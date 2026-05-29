import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

const ARTEMIS_PRECASE_DRAFT_API_URL =
  process.env.ARTEMIS_PRECASE_DRAFT_API_URL || "https://artemischat.com/api/pre-case-drafts"

const forwardHeaders = () => {
  const headers: Record<string, string> = {
    "content-type": "application/json",
  }
  if (process.env.FDR_PRECASE_DRAFT_SECRET) {
    headers["x-fdr-precase-secret"] = process.env.FDR_PRECASE_DRAFT_SECRET
  }
  return headers
}

const proxyJson = async (response: Response) => {
  const payload = await response.json().catch(() => ({ error: "Unable to read response." }))
  return NextResponse.json(payload, { status: response.status })
}

export async function GET(req: NextRequest) {
  const resumeToken = req.nextUrl.searchParams.get("resumeToken") || ""
  const url = new URL(ARTEMIS_PRECASE_DRAFT_API_URL)
  url.searchParams.set("resumeToken", resumeToken)

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: forwardHeaders(),
    cache: "no-store",
  })

  return proxyJson(response)
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const response = await fetch(ARTEMIS_PRECASE_DRAFT_API_URL, {
    method: "POST",
    headers: forwardHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  })

  return proxyJson(response)
}

export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const response = await fetch(ARTEMIS_PRECASE_DRAFT_API_URL, {
    method: "PATCH",
    headers: forwardHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  })

  return proxyJson(response)
}
