import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import { privacyContent } from "@/lib/legalContent"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Fast Dispute Resolution.",
}

export default function PrivacyPage() {
  return <LegalDocumentPage content={privacyContent} documentKey="privacy" />
}
