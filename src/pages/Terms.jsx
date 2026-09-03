import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Terms() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-smartok-bg text-white">
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-smartok-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-smartok-cyan transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('terms.back')}
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">{t('terms.title')}</span>
        </h1>
        <p className="text-sm text-gray-500 font-mono mb-10">{t('terms.lastUpdated')}</p>

        <p className="text-gray-400 leading-relaxed mb-10">{t('terms.intro')}</p>

        <div className="space-y-8">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num}>
              <h2 className="text-lg font-semibold text-white mb-2">
                {t(`terms.sections.${num}_heading`)}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                {t(`terms.sections.${num}_body`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 text-smartok-cyan text-sm font-semibold hover:bg-smartok-cyan/20 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('terms.back')}
          </Link>
        </div>
      </div>
    </div>
  )
}
