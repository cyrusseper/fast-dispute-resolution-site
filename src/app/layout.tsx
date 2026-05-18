import type { Metadata } from "next"
import "./globals.css"

const siteUrl = "https://fastdisputeresolution.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fast Dispute Resolution | Online Family Mediation",
    template: "%s | Fast Dispute Resolution",
  },
  description:
    "Resolve divorce, custody, support, and family financial disputes online with a neutral mediator and multilingual communication.",
  keywords: [
    "online mediation",
    "family mediation",
    "divorce mediation",
    "child custody mediation",
    "Fast Dispute Resolution",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Fast Dispute Resolution",
    description:
      "Online family mediation for divorce, custody, support, and financial disputes.",
    url: siteUrl,
    siteName: "Fast Dispute Resolution",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Dispute Resolution",
    description:
      "Resolve family disputes online with a neutral mediator and multilingual support.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
