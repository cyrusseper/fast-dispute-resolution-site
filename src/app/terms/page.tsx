import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/i18n"

export const metadata = {
  title: "Terms",
  description: `Website terms for ${BRAND_NAME}.`,
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <article className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
          {BRAND_NAME}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Terms</h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
          <p>
            This standalone website is a marketing page for {BRAND_NAME}. It does not
            create a mediator-client relationship, legal representation, or legal advice.
          </p>
          <p>
            Starting a case redirects to ArtemisChat, where the active intake, payment,
            mediation, and case workflow are presented before users continue.
          </p>
          <p>
            For website questions, contact{" "}
            <a className="font-semibold text-brand-700" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  )
}
