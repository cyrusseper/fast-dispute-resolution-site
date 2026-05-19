import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import { disclaimerContent } from "@/lib/legalContent"

export const metadata = {
  title: "Legal Disclaimer",
  description: "Legal Disclaimer for Fast Dispute Resolution.",
}

export default function DisclaimerPage() {
  return <LegalDocumentPage content={disclaimerContent} documentKey="disclaimer" />
}
