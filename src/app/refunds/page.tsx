import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import { refundsContent } from "@/lib/legalContent"

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy for Fast Dispute Resolution.",
}

export default function RefundsPage() {
  return <LegalDocumentPage content={refundsContent} documentKey="refunds" />
}
