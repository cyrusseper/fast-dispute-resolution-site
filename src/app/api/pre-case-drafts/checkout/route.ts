import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

const cleanBaseUrl = (value: string | null | undefined) =>
  typeof value === "string" && value.trim() ? value.trim().replace(/\/+$/, "") : ""

const getArtemisPreCaseCheckoutApiUrl = () => {
  const explicit = cleanBaseUrl(process.env.ARTEMIS_PRECASE_DRAFT_CHECKOUT_API_URL)
  if (explicit) return explicit

  const baseUrl = cleanBaseUrl(process.env.ARTEMIS_PRECASE_BASE_URL)
  if (baseUrl) return `${baseUrl}/api/pre-case-drafts/checkout`

  const vercelEnv = (process.env.VERCEL_ENV || "").trim().toLowerCase()
  if (vercelEnv && vercelEnv !== "production") return ""

  return "https://artemischat.com/api/pre-case-drafts/checkout"
}

const forwardHeaders = () => {
  const headers: Record<string, string> = {
    "content-type": "application/json",
  }
  if (process.env.FDR_PRECASE_DRAFT_SECRET) {
    headers["x-fdr-precase-secret"] = process.env.FDR_PRECASE_DRAFT_SECRET
  }
  return headers
}

export async function POST(req: NextRequest) {
  const checkoutApiUrl = getArtemisPreCaseCheckoutApiUrl()
  if (!checkoutApiUrl) {
    return NextResponse.json(
      { error: "Activation checkout is not configured for this preview environment." },
      { status: 503 },
    )
  }

  const body = await req.json().catch(() => ({}))
  const response = await fetch(checkoutApiUrl, {
    method: "POST",
    headers: forwardHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  })

  const payload = await response.json().catch(() => ({ error: "Unable to read checkout response." }))
  return NextResponse.json(payload, { status: response.status })
}
