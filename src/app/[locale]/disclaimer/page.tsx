import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import {
  LocalizedLegalParams,
  generateLocalizedLegalStaticParams,
  getLocalizedLegalLocale,
} from "@/lib/localizedLegalRoutes"
import { localizedLegalContent } from "@/lib/legalTranslations"

export const metadata = {
  title: "Legal Disclaimer",
  description: "Legal Disclaimer for Fast Dispute Resolution.",
}

export const generateStaticParams = generateLocalizedLegalStaticParams

export default async function LocalizedDisclaimerPage({ params }: { params: LocalizedLegalParams }) {
  const locale = await getLocalizedLegalLocale(params)

  return <LegalDocumentPage content={localizedLegalContent[locale].disclaimer} documentKey="disclaimer" locale={locale} />
}
