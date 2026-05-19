import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import {
  LocalizedLegalParams,
  generateLocalizedLegalStaticParams,
  getLocalizedLegalLocale,
} from "@/lib/localizedLegalRoutes"
import { localizedLegalContent } from "@/lib/legalTranslations"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Fast Dispute Resolution.",
}

export const generateStaticParams = generateLocalizedLegalStaticParams

export default async function LocalizedPrivacyPage({ params }: { params: LocalizedLegalParams }) {
  const locale = await getLocalizedLegalLocale(params)

  return <LegalDocumentPage content={localizedLegalContent[locale].privacy} documentKey="privacy" locale={locale} />
}
