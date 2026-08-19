import React from 'react'

/**
 * Long-form legal page: hero, sticky table of contents, then the sections.
 * `sections` drives the contents list; each entry's `id` must match the
 * corresponding <section id="…"> rendered in `children`.
 */
export function DocLayout({ eyebrow, title, lede, updated, sections, children }) {
  return (
    <div className="page">
      <header className="page-hero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="page-description">{lede}</p>
        <p className="last-updated">
          <strong>Last updated:</strong>&nbsp;{updated}
        </p>
      </header>

      <div className="doc-layout">
        <aside className="doc-toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </aside>
        <div className="doc-body">{children}</div>
      </div>
    </div>
  )
}

export default DocLayout
