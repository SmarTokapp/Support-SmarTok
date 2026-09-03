import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-smartok-cyan/5 border border-smartok-cyan/20">
            <span className="w-2 h-2 rounded-full bg-smartok-neon animate-pulse" />
            <span className="text-xs font-mono text-smartok-cyan tracking-wider uppercase">{t('hero.badge')}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance animate-slide-up">
          {t('hero.headline')}
          <br />
          <span className="gradient-text neon-text">{t('hero.headlineHighlight')}</span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-3xl mx-auto text-center text-base sm:text-lg text-gray-400 leading-relaxed text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t('hero.subtext')}
        </p>

        {/* YouTube Short embed (vertical 9:16) */}
        <div className="mt-14 flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div
            className="relative rounded-2xl glass-card neon-border overflow-hidden"
            style={{ aspectRatio: '9 / 16', width: '100%', maxWidth: '360px', maxHeight: '640px' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/CypM4WG8tQM"
              title={t('hero.videoLabel')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA scroll */}
        <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="#support"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-smartok-cyan transition-colors"
          >
            <span>{t('hero.scrollCta')}</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
