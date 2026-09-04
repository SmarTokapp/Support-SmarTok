const LOCALE_MAP = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  ja: 'ja-JP',
  zh: 'zh-CN',
  ko: 'ko-KR',
  pt: 'pt-PT',
  it: 'it-IT',
  ru: 'ru-RU',
  ar: 'ar-SA',
}

export function formatCurrentMonthYear(lang = 'en') {
  const locale = LOCALE_MAP[lang] || 'en-US'
  return new Date().toLocaleDateString(locale, { month: 'long', year: 'numeric' })
}
