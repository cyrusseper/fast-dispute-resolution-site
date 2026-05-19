import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import { termsContent } from "@/lib/legalContent"

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Fast Dispute Resolution.",
}

export default function TermsPage() {
  return <LegalDocumentPage content={termsContent} documentKey="terms" />
}
