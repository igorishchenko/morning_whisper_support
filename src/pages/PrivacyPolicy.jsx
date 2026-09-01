import React from 'react'
import LegalDoc from '../components/LegalDoc'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useTranslation } from '../i18n'
import { getPrivacy } from '../content/legal'
import './Page.css'

function PrivacyPolicy() {
  const { locale } = useTranslation()
  const doc = getPrivacy(locale)

  useDocumentMeta({
    title: doc.meta.title,
    description: doc.meta.description,
    path: '/privacy',
    locale,
  })

  return <LegalDoc doc={doc} />
}

export default PrivacyPolicy
