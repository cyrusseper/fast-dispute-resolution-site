import Link from "next/link"
import { Scale } from "lucide-react"
import { BRAND_NAME, LanguageCode, getDirection } from "@/lib/i18n"
import type { LegalDocumentKey } from "@/lib/legalTranslations"
import { LOCALIZED_TRANSLATION_NOTICE, TRANSLATION_NOTICE } from "@/lib/legalTranslationNotice"
import { LegalLanguageSwitcher } from "@/components/LegalLanguageSwitcher"
import { SiteFooter } from "@/components/SiteFooter"

const translationNotices = new Set<string>([TRANSLATION_NOTICE, ...Object.values(LOCALIZED_TRANSLATION_NOTICE)])

export function LegalDocumentPage({
  content,
  documentKey,
  locale = "en",
}: {
  content: string
  documentKey: LegalDocumentKey
  locale?: LanguageCode
}) {
  const rawBlocks = content.trim().split(/\n\n+/)
  const notice = translationNotices.has(rawBlocks[0]) ? rawBlocks[0] : null
  const blocks = notice ? rawBlocks.slice(1) : rawBlocks
  const [titleBlock, updatedBlock, ...bodyBlocks] = blocks
  const titleLines = titleBlock.split("\n")
  const direction = getDirection(locale)

  return (
    <div className="min-h-screen bg-[#f7fafc] text-slate-950" dir={direction}>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between gap-4">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-950 text-white shadow-soft">
              <Scale className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">{BRAND_NAME}</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden flex-wrap justify-end gap-x-5 gap-y-2 text-sm font-medium text-slate-600 md:flex">
              <Link className="transition hover:text-slate-950" href="/#services">
                Services
              </Link>
              <Link className="transition hover:text-slate-950" href="/#process">
                Process
              </Link>
              <Link className="transition hover:text-slate-950" href="/#pricing">
                Pricing
              </Link>
            </nav>
            <LegalLanguageSwitcher currentLocale={locale} documentKey={documentKey} />
          </div>
        </div>
      </header>

      <main className="px-4 py-14 sm:py-20">
        <article className="mx-auto max-w-[800px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {notice ? (
            <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-base font-semibold leading-7 text-slate-900">
              {notice}
            </p>
          ) : null}
          <p className={`${notice ? "mt-8 " : ""}text-sm font-semibold uppercase tracking-[0.22em] text-brand-600`}>
            {titleLines[0]}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {titleLines.slice(1).join(" ")}
          </h1>
          <p className="mt-5 text-base font-semibold text-slate-700">{updatedBlock}</p>

          <div className="mt-10 space-y-7 text-base leading-8 text-slate-700">
            {bodyBlocks.map((block, index) => (
              <LegalBlock key={`${block.slice(0, 24)}-${index}`} block={block} />
            ))}
          </div>
        </article>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}

function LegalBlock({ block }: { block: string }) {
  const lines = block.split("\n")
  const [firstLine, ...restLines] = lines
  const isNumberedHeading = /^\d+\.\s/.test(firstLine)
  const isLetterHeading = /^[A-Z]\.\s/.test(firstLine)

  if ((isNumberedHeading || isLetterHeading) && restLines.length > 0) {
    const HeadingTag = isNumberedHeading ? "h2" : "h3"

    return (
      <section className="space-y-3">
        <HeadingTag
          className={
            isNumberedHeading
              ? "text-2xl font-semibold tracking-tight text-slate-950"
              : "text-lg font-semibold tracking-tight text-slate-950"
          }
        >
          {firstLine}
        </HeadingTag>
        <LineGroup lines={restLines} />
      </section>
    )
  }

  if (isNumberedHeading || isLetterHeading) {
    const HeadingTag = isNumberedHeading ? "h2" : "h3"

    return (
      <HeadingTag
        className={
          isNumberedHeading
            ? "text-2xl font-semibold tracking-tight text-slate-950"
            : "text-lg font-semibold tracking-tight text-slate-950"
        }
      >
        {firstLine}
      </HeadingTag>
    )
  }

  return <LineGroup lines={lines} />
}

function LineGroup({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p
          key={`${line}-${index}`}
          className={line.startsWith("- ") || /^\([a-z]\)/.test(line) ? "pl-4" : undefined}
        >
          {line}
        </p>
      ))}
    </div>
  )
}
