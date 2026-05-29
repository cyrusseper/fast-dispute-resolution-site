import type { Metadata } from "next"
import { Suspense } from "react"
import { PreCaseStartFlow } from "@/components/PreCaseStartFlow"

export const metadata: Metadata = {
  title: "Start Your Family Resolution",
  description: "Answer a few simple questions and save your family dispute resolution progress.",
  alternates: {
    canonical: "/start",
  },
}

export default function StartPage() {
  return (
    <Suspense fallback={null}>
      <PreCaseStartFlow />
    </Suspense>
  )
}
