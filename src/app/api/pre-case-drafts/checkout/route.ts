import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

const ARTEMIS_PRECASE_DRAFT_CHECKOUT_API_URL =
  process.env.ARTEMIS_PRECASE_DRAFT_CHECKOUT_API_URL ||
  "https://artemischat.com/api/pre-case-drafts/checkout"

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
  const body = await req.json().catch(() => ({}))
  const response = await fetch(ARTEMIS_PRECASE_DRAFT_CHECKOUT_API_URL, {
    method: "POST",
    headers: forwardHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  })

  const payload = await response.json().catch(() => ({ error: "Unable to read checkout response." }))
  return NextResponse.json(payload, { status: response.status })
}
