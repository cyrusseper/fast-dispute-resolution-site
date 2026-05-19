import Link from "next/link"
import { BRAND_NAME, CONTACT_EMAIL, LanguageCode } from "@/lib/i18n"

const legalLinks = [
  { href: "/terms", key: "terms" },
  { href: "/privacy", key: "privacy" },
  { href: "/refunds", key: "refunds" },
  { href: "/disclaimer", key: "disclaimer" },
  { href: "/cookies", key: "cookies" },
] as const

const legalLinkLabels: Record<LanguageCode, Record<(typeof legalLinks)[number]["key"], string>> = {
  en: {
    terms: "Terms",
    privacy: "Privacy",
    refunds: "Refunds",
    disclaimer: "Disclaimer",
    cookies: "Cookies",
  },
  es: {
    terms: "Términos",
    privacy: "Privacidad",
    refunds: "Reembolsos",
    disclaimer: "Aviso legal",
    cookies: "Cookies",
  },
  pt: {
    terms: "Termos",
    privacy: "Privacidade",
    refunds: "Reembolsos",
    disclaimer: "Aviso legal",
    cookies: "Cookies",
  },
  fr: {
    terms: "Conditions",
    privacy: "Confidentialité",
    refunds: "Remboursements",
    disclaimer: "Mentions légales",
    cookies: "Cookies",
  },
  ar: {
    terms: "الشروط",
    privacy: "الخصوصية",
    refunds: "المبالغ المستردة",
    disclaimer: "إخلاء المسؤولية",
    cookies: "ملفات تعريف الارتباط",
  },
  fa: {
    terms: "شرایط",
    privacy: "حریم خصوصی",
    refunds: "بازپرداخت‌ها",
    disclaimer: "سلب مسئولیت",
    cookies: "کوکی‌ها",
  },
  ru: {
    terms: "Условия",
    privacy: "Конфиденциальность",
    refunds: "Возвраты",
    disclaimer: "Отказ от ответственности",
    cookies: "Файлы cookie",
  },
  zh: {
    terms: "条款",
    privacy: "隐私",
    refunds: "退款",
    disclaimer: "免责声明",
    cookies: "Cookie",
  },
  hi: {
    terms: "शर्तें",
    privacy: "गोपनीयता",
    refunds: "धनवापसी",
    disclaimer: "अस्वीकरण",
    cookies: "कुकीज़",
  },
}

export function SiteFooter({
  currentYear = new Date().getFullYear(),
  locale = "en",
}: {
  currentYear?: number
  locale?: LanguageCode
}) {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="shell flex flex-col gap-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">{BRAND_NAME}</p>
          <a className="mt-2 block text-brand-700 hover:text-brand-950" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {legalLinks.map((link) => (
            <Link key={link.href} className="hover:text-slate-950" href={localizedLegalHref(link.href, locale)}>
              {legalLinkLabels[locale][link.key]}
            </Link>
          ))}
          <span>
            © {currentYear} {BRAND_NAME}.
          </span>
        </div>
      </div>
    </footer>
  )
}

function localizedLegalHref(href: string, locale: LanguageCode) {
  return locale === "en" ? href : `/${locale}${href}`
}
