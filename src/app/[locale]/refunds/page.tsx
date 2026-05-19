import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import {
  LocalizedLegalParams,
  generateLocalizedLegalStaticParams,
  getLocalizedLegalLocale,
} from "@/lib/localizedLegalRoutes"
import { localizedLegalContent } from "@/lib/legalTranslations"

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy for Fast Dispute Resolution.",
}

export const generateStaticParams = generateLocalizedLegalStaticParams

export default async function LocalizedRefundsPage({ params }: { params: LocalizedLegalParams }) {
  const locale = await getLocalizedLegalLocale(params)

  return <LegalDocumentPage content={localizedLegalContent[locale].refunds} documentKey="refunds" locale={locale} />
}
