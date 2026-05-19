import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import {
  LocalizedLegalParams,
  generateLocalizedLegalStaticParams,
  getLocalizedLegalLocale,
} from "@/lib/localizedLegalRoutes"
import { localizedLegalContent } from "@/lib/legalTranslations"

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Fast Dispute Resolution.",
}

export const generateStaticParams = generateLocalizedLegalStaticParams

export default async function LocalizedTermsPage({ params }: { params: LocalizedLegalParams }) {
  const locale = await getLocalizedLegalLocale(params)

  return <LegalDocumentPage content={localizedLegalContent[locale].terms} documentKey="terms" locale={locale} />
}
