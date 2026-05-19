import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import {
  LocalizedLegalParams,
  generateLocalizedLegalStaticParams,
  getLocalizedLegalLocale,
} from "@/lib/localizedLegalRoutes"
import { localizedLegalContent } from "@/lib/legalTranslations"

export const metadata = {
  title: "Cookie Notice",
  description: "Cookie Notice for Fast Dispute Resolution.",
}

export const generateStaticParams = generateLocalizedLegalStaticParams

export default async function LocalizedCookiesPage({ params }: { params: LocalizedLegalParams }) {
  const locale = await getLocalizedLegalLocale(params)

  return <LegalDocumentPage content={localizedLegalContent[locale].cookies} documentKey="cookies" locale={locale} />
}
