import { notFound } from "next/navigation"
import { languages } from "@/lib/i18n"
import type { LocalizedLegalLanguage } from "@/lib/legalTranslations"

export const localizedLegalLanguages: LocalizedLegalLanguage[] = languages
  .map((language) => language.code)
  .filter((code): code is LocalizedLegalLanguage => code !== "en")

export type LocalizedLegalParams = Promise<{ locale: string }>

export function generateLocalizedLegalStaticParams() {
  return localizedLegalLanguages.map((locale) => ({ locale }))
}

export async function getLocalizedLegalLocale(params: LocalizedLegalParams): Promise<LocalizedLegalLanguage> {
  const { locale } = await params

  if (!localizedLegalLanguages.includes(locale as LocalizedLegalLanguage)) {
    notFound()
  }

  return locale as LocalizedLegalLanguage
}
