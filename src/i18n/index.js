import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import ja from './locales/ja.json'
import zh from './locales/zh.json'
import ko from './locales/ko.json'
import pt from './locales/pt.json'
import it from './locales/it.json'
import ru from './locales/ru.json'
import ar from './locales/ar.json'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      ja: { translation: ja },
      zh: { translation: zh },
      ko: { translation: ko },
      pt: { translation: pt },
      it: { translation: it },
      ru: { translation: ru },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'fr', 'de', 'ja', 'zh', 'ko', 'pt', 'it', 'ru', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag', 'cookie', 'localStorage'],
      caches: ['localStorage'],
    },
  })

// Set RTL direction for Arabic
if (i18n.language === 'ar' || i18n.language?.startsWith('ar')) {
  document.documentElement.dir = 'rtl'
} else {
  document.documentElement.dir = 'ltr'
}

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' || lng?.startsWith('ar') ? 'rtl' : 'ltr'
})

export default i18n
