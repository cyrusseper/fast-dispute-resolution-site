import { LegalDocumentPage } from "@/components/LegalDocumentPage"
import { cookiesContent } from "@/lib/legalContent"

export const metadata = {
  title: "Cookie Notice",
  description: "Cookie Notice for Fast Dispute Resolution.",
}

export default function CookiesPage() {
  return <LegalDocumentPage content={cookiesContent} documentKey="cookies" />
}
