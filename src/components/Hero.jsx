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

        {/* Primary Download on Google Play button — highly visible to users
            visiting the site for help. Links directly to the Play Store listing. */}
        <div className="mt-10 flex justify-center animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.rios.smartok"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-smartok-cyan to-smartok-neon text-black font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(0,243,255,0.35)] hover:shadow-[0_0_40px_rgba(0,243,255,0.55)] hover:-translate-y-0.5 transition-all"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
            </svg>
            {t('hero.downloadBtn')}
          </a>
        </div>

        {/* Creator support message — self-hosted mp4 (video 265).
            `controls` keeps audio available: the spoken message must be
            audible, so no forced `muted` + no autoplay (browsers would
            block unmuted autoplay anyway). `loop` replays it. */}
        <div className="mt-14 flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div
            className="relative rounded-2xl glass-card neon-border overflow-hidden"
            style={{ width: '100%', maxWidth: '480px' }}
          >
            <video
              className="w-full h-auto block"
              src="https://d3kbe080p2nfsf.cloudfront.net/videos/37/1790307590534_lv_0_20260924233429.mp4"
              poster="https://d3kbe080p2nfsf.cloudfront.net/videos/37/1790307618657_thumb_1790307618453.jpg"
              title={t('hero.videoLabel')}
              controls
              loop
              playsInline
              preload="metadata"
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
