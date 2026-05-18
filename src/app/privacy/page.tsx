import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/i18n"

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy information for ${BRAND_NAME}.`,
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <article className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
          {BRAND_NAME}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
          <p>
            This website provides general information about {BRAND_NAME} and links to
            ArtemisChat so visitors can start a mediation case online.
          </p>
          <p>
            Information submitted after clicking “Start Your Case Now” is handled by
            ArtemisChat under the policies and workflow shown there. Do not submit private
            case details through email.
          </p>
          <p>
            For privacy questions, contact{" "}
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
