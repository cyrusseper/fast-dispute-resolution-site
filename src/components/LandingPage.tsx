"use client"

import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  Languages,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import {
  ARTEMIS_CTA_URL,
  BRAND_NAME,
  CONTACT_EMAIL,
  LanguageCode,
  copy,
  getDirection,
  languages,
  normalizeLanguage,
} from "@/lib/i18n"

const advantageIcons = [Languages, Zap, Brain, ShieldCheck, Clock3, Scale]
const serviceIcons = [FileText, ShieldCheck, MessageSquareText, Scale, CheckCircle2, FileText, Globe2]

export function LandingPage() {
  const [language, setLanguage] = useState<LanguageCode>("en")
  const content = copy[language]
  const fallback = copy.en
  const multilingual = content.multilingual ?? fallback.multilingual ?? { title: "", body: [] }
  const whoItsFor = content.whoItsFor ?? fallback.whoItsFor ?? { title: "", items: [] }
  const trust = content.trust ?? fallback.trust ?? { title: "", body: "", items: [] }
  const credibility = content.credibility ?? fallback.credibility ?? { title: "", body: "" }
  const pricingChecklist = content.pricing.checklist ?? fallback.pricing.checklist ?? []
  const direction = getDirection(language)
  const ctaUrl = `${ARTEMIS_CTA_URL}?lang=${language}`

  useEffect(() => {
    const stored = window.localStorage.getItem("fdr-language")
    const detected = stored || window.navigator.language
    setLanguage(normalizeLanguage(detected))
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = direction
    window.localStorage.setItem("fdr-language", language)
  }, [direction, language])

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fafc] text-slate-950" dir={direction}>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between gap-4">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-full">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-950 text-white shadow-soft">
              <Scale className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">{BRAND_NAME}</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a className="transition hover:text-slate-950" href="#advantages">
              {content.nav.advantages}
            </a>
            <a className="transition hover:text-slate-950" href="#services">
              {content.nav.services}
            </a>
            <a className="transition hover:text-slate-950" href="#process">
              {content.nav.process}
            </a>
            <a className="transition hover:text-slate-950" href="#pricing">
              {content.nav.pricing}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <label className="sr-only" htmlFor="language-select">
              {content.nav.language}
            </label>
            <select
              id="language-select"
              className="focus-ring h-11 max-w-[130px] rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm sm:max-w-none"
              value={language}
              onChange={(event) => setLanguage(normalizeLanguage(event.target.value))}
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <a
              href={ctaUrl}
              className="focus-ring inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 sm:px-5"
            >
              <span className="hidden sm:inline">{content.nav.start}</span>
              <span className="sm:hidden">{content.finalCta.cta}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative border-b border-slate-200 bg-white">
          <div className="shell grid min-h-[calc(100svh-80px)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                {content.hero.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
                {content.hero.subheadline}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={ctaUrl}
                  className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
                >
                  {content.hero.cta}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
                <p className="text-sm font-semibold text-slate-500">{content.hero.secondary}</p>
              </div>
              <div className="mt-10 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                {[content.hero.trustA, content.hero.trustB, content.hero.trustC].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-brand-600" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-4 shadow-soft">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                        {content.hero.previewTitle}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        {content.hero.previewStatus}
                      </h2>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Sparkles className="size-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[content.hero.previewStepA, content.hero.previewStepB, content.hero.previewStepC].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                        >
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                            {index + 1}
                          </span>
                          <span className="font-semibold text-slate-800">{item}</span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl bg-brand-950 p-5 text-white">
                    <div className="flex items-center gap-3">
                      <Globe2 className="size-5 text-brand-100" aria-hidden="true" />
                      <p className="text-sm font-semibold">{content.hero.trustC}</p>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-brand-50">
                      <span className="rounded-full bg-white/10 px-3 py-2">Español</span>
                      <span className="rounded-full bg-white/10 px-3 py-2">Português</span>
                      <span className="rounded-full bg-white/10 px-3 py-2">العربية</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{multilingual.title}</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                {multilingual.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="advantages" className="py-20 sm:py-28">
          <div className="shell">
            <SectionIntro eyebrow={content.advantages.eyebrow} title={content.advantages.title} intro={content.advantages.intro} />
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.advantages.items.map((item, index) => {
                const Icon = advantageIcons[index] || CheckCircle2
                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200 bg-white py-20 sm:py-28">
          <div className="shell">
            <SectionIntro eyebrow={content.services.eyebrow} title={content.services.title} intro={content.services.intro} />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.services.items.map((item, index) => {
                const Icon = serviceIcons[index] || CheckCircle2
                return (
                  <div
                    key={item}
                    className="flex min-h-24 items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <Icon className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <p className="font-semibold leading-7 text-slate-800">{item}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="shell">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{whoItsFor.title}</h2>
              <ul className="mt-7 grid gap-3 text-base font-semibold text-slate-800 sm:grid-cols-2">
                {whoItsFor.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 sm:py-28">
          <div className="shell">
            <SectionIntro eyebrow={content.process.eyebrow} title={content.process.title} intro={content.process.intro} />
            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {content.process.steps.map((step, index) => (
                <article key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-y border-slate-200 bg-white py-20 sm:py-28">
          <div className="shell">
            <div className="grid gap-8 rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-100">
                  {content.pricing.eyebrow}
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{content.pricing.title}</h2>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-7">
                <p className="text-2xl font-semibold leading-10">{content.pricing.body}</p>
                {pricingChecklist.length ? (
                  <ul className="mt-5 space-y-2 text-base leading-8 text-slate-100">
                    {pricingChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-100" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-5 text-base leading-8 text-slate-200">{content.pricing.note}</p>
                {content.pricing.keyLine ? (
                  <p className="mt-5 text-base font-semibold leading-8 text-brand-100">{content.pricing.keyLine}</p>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="shell">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{trust.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{trust.body}</p>
              <ul className="mt-7 grid gap-3 text-base font-semibold text-slate-800 sm:grid-cols-2">
                {trust.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <ShieldCheck className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{credibility.title}</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{credibility.body}</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="shell">
            <div className="rounded-[36px] border border-brand-100 bg-white p-8 text-center shadow-soft sm:p-12">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">{content.finalCta.headline}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.finalCta.body}</p>
              <a
                href={ctaUrl}
                className="focus-ring mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-base font-semibold text-white transition hover:bg-brand-700"
              >
                {content.finalCta.cta}
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="shell flex flex-col gap-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-950">{BRAND_NAME}</p>
            <a className="mt-2 block text-brand-700 hover:text-brand-950" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-slate-950" href="/privacy">
              {content.footer.privacy}
            </a>
            <a className="hover:text-slate-950" href="/terms">
              {content.footer.terms}
            </a>
            {content.footer.rights ? (
              <span>
                © {currentYear} {BRAND_NAME}. {content.footer.rights}
              </span>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
    </div>
  )
}
