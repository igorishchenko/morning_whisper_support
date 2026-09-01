import React from 'react'
import { Link } from 'react-router-dom'
import DocLayout from './DocLayout'

/**
 * Renders a legal document from structured content rather than hand-written
 * JSX, so the same markup serves all four languages and a translator only ever
 * touches strings.
 *
 * A section is `{ id, title, blocks[] }`. Block shapes:
 *   { p: 'text' }                          paragraph
 *   { h3: 'text' } / { h4: 'text' }        sub-heading
 *   { ul: ['a', 'b'] } / { ol: [...] }     list
 *   { callout: [blocks], tone?, icon? }    boxed note
 *   { table: { head: [...], rows: [[...]] } }
 *
 * Inline markup inside any string, kept deliberately small:
 *   **bold**            → <strong>
 *   [label](/privacy)   → internal <Link>
 *   [label](https://…)  → external <a target="_blank" rel="noopener noreferrer">
 */

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

function renderInline(text, keyPrefix = '') {
  if (typeof text !== 'string') return text

  return text.split(INLINE).filter(Boolean).map((chunk, i) => {
    const key = `${keyPrefix}${i}`

    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      return <strong key={key}>{chunk.slice(2, -2)}</strong>
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(chunk)
    if (link) {
      const [, label, href] = link
      if (href.startsWith('/')) {
        return (
          <Link key={key} to={href}>
            {label}
          </Link>
        )
      }
      return (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    }

    return <React.Fragment key={key}>{chunk}</React.Fragment>
  })
}

function Blocks({ blocks, keyPrefix = '' }) {
  return blocks.map((block, i) => {
    const key = `${keyPrefix}${i}`

    if (block.p !== undefined) return <p key={key}>{renderInline(block.p, `${key}-`)}</p>
    if (block.h3 !== undefined) return <h3 key={key}>{renderInline(block.h3, `${key}-`)}</h3>
    if (block.h4 !== undefined) return <h4 key={key}>{renderInline(block.h4, `${key}-`)}</h4>

    if (block.ul || block.ol) {
      const items = block.ul ?? block.ol
      const List = block.ul ? 'ul' : 'ol'
      return (
        <List key={key}>
          {items.map((item, j) => (
            <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}-`)}</li>
          ))}
        </List>
      )
    }

    if (block.callout) {
      return (
        <div key={key} className={`callout${block.tone ? ` callout-${block.tone}` : ''}`}>
          <span className="callout-icon" aria-hidden="true">
            {block.icon ?? '☕'}
          </span>
          <div>
            <Blocks blocks={block.callout} keyPrefix={`${key}-`} />
          </div>
        </div>
      )
    }

    if (block.table) {
      return (
        <div key={key} className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                {block.table.head.map((h, j) => (
                  <th key={`${key}-h${j}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, j) => (
                <tr key={`${key}-r${j}`}>
                  {row.map((cell, k) => (
                    <td key={`${key}-r${j}c${k}`}>{renderInline(cell, `${key}-${j}-${k}-`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return null
  })
}

/**
 * @param {object} doc  `{ eyebrow, title, lede, updatedLabel, updated, sections }`
 */
export function LegalDoc({ doc }) {
  return (
    <DocLayout
      eyebrow={doc.eyebrow}
      title={doc.title}
      lede={doc.lede}
      updated={doc.updated}
      updatedLabel={doc.updatedLabel}
      sections={doc.sections.map((s) => ({ id: s.id, title: s.title }))}
      tocTitle={doc.tocTitle}
    >
      {doc.sections.map((section) => (
        <section className="policy-section" id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <Blocks blocks={section.blocks} keyPrefix={`${section.id}-`} />
        </section>
      ))}
    </DocLayout>
  )
}

export default LegalDoc
