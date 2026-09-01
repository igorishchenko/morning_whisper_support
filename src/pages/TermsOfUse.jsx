import React from 'react'
import LegalDoc from '../components/LegalDoc'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useTranslation } from '../i18n'
import { getTerms } from '../content/legal'
import './Page.css'

function TermsOfUse() {
  const { locale } = useTranslation()
  const doc = getTerms(locale)

  useDocumentMeta({
    title: doc.meta.title,
    description: doc.meta.description,
    path: '/terms',
    locale,
  })

  return <LegalDoc doc={doc} />
}

export default TermsOfUse
