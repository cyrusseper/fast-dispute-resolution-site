import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock3, LockKeyhole, RotateCcw, Scale, ShieldCheck } from "lucide-react"
import { BRAND_NAME } from "@/lib/i18n"

const ARTEMIS_SIGNUP_URL = "https://artemischat.com/signup?source=fdr"

const steps = [
  "Create your secure account",
  "Answer a few simple questions about your situation",
  "See the exact cost before any payment",
  "We invite the other party automatically",
  "Mediation begins at your pace",
]

const reassuranceItems = [
  { text: "Takes about 5–10 minutes to get started", icon: Clock3 },
  { text: "No pressure - continue anytime", icon: RotateCcw },
  { text: "Private and secure", icon: ShieldCheck },
]

export const metadata: Metadata = {
  title: "Start Your Mediation Case",
  description:
    "Learn what happens before creating your secure Fast Dispute Resolution mediation case setup account.",
  alternates: {
    canonical: "/start",
  },
}

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-950">
      <section className="flex min-h-screen items-center border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="shell w-full">
          <div className="mx-auto max-w-3xl">
            <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-950 text-white shadow-soft">
                <Scale className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold tracking-tight sm:text-base">{BRAND_NAME}</span>
            </Link>

            <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-5 shadow-soft sm:p-6">
              <div className="rounded-[26px] border border-slate-200 bg-white p-7 sm:p-10">
                <div className="mx-auto max-w-2xl text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <LockKeyhole className="size-7" aria-hidden="true" />
                  </div>
                  <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    Start Your Mediation Case
                  </h1>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Before you begin, here&apos;s exactly what will happen.
                  </p>
                </div>

                <ol className="mt-10 space-y-3">
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="pt-1 text-base font-semibold leading-7 text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5">
                  <ul className="grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-3">
                    {reassuranceItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.text} className="flex items-start gap-2">
                          <Icon className="mt-0.5 size-5 shrink-0 text-brand-700" aria-hidden="true" />
                          <span>{item.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="mt-9 flex flex-col items-center gap-4 text-center">
                  <a
                    href={ARTEMIS_SIGNUP_URL}
                    className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
                  >
                    Continue to Secure Setup
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-center text-sm text-slate-500">
                    Questions before you begin? We’re here to help —{" "}
                    <a
                      href="mailto:support@fastdisputeresolution.com"
                      className="font-medium text-brand-700 underline-offset-4 hover:underline"
                    >
                      support@fastdisputeresolution.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <CheckCircle2 className="size-4 text-brand-600" aria-hidden="true" />
                    You will see pricing before any payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
