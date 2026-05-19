"use client"

import { languages, LanguageCode } from "@/lib/i18n"
import type { LegalDocumentKey } from "@/lib/legalTranslations"

export function LegalLanguageSwitcher({
  currentLocale,
  documentKey,
}: {
  currentLocale: LanguageCode
  documentKey: LegalDocumentKey
}) {
  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="legal-language-select">
        Language
      </label>
      <select
        id="legal-language-select"
        className="focus-ring h-11 max-w-[145px] rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm sm:max-w-none"
        value={currentLocale}
        onChange={(event) => {
          window.location.href = legalDocumentHref(event.target.value as LanguageCode, documentKey)
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function legalDocumentHref(locale: LanguageCode, documentKey: LegalDocumentKey) {
  return locale === "en" ? `/${documentKey}` : `/${locale}/${documentKey}`
}
