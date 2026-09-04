import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const STRIPE_LINKS = {
  5: 'https://buy.stripe.com/28E6oHgNCaGb4nX64be3e00',
  10: 'https://buy.stripe.com/7sYeVd2WM9C7aMlgIPe3e01',
  25: 'https://buy.stripe.com/fZu6oH7d2cOj8Ed1NVe3e02',
  50: 'https://buy.stripe.com/3cIdR954U15B1bL78fe3e03',
  custom: 'https://buy.stripe.com/00w9AT40Q3dJ3jTeAHe3e04',
}

const TIERS = [5, 10, 25, 50]

export default function ContributionWidget({ selectedTier, onSelectTier }) {
  const { t } = useTranslation()
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)

  const handleSelect = (amount) => {
    setIsCustom(false)
    setCustomAmount('')
    onSelectTier(amount)
  }

  const handleCustomFocus = () => {
    setIsCustom(true)
    if (customAmount) {
      onSelectTier(parseFloat(customAmount))
    }
  }

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, '')
    setCustomAmount(val)
    if (val) {
      onSelectTier(parseFloat(val))
    }
  }

  const getStripeLink = () => {
    if (isCustom) return STRIPE_LINKS.custom
    return STRIPE_LINKS[selectedTier] || STRIPE_LINKS.custom
  }

  return (
    <section id="support" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="text-white">{t('contribution.title')} </span>
            <span className="gradient-text">{t('contribution.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {t('contribution.subtitle')}
          </p>
        </div>

        {/* Widget card */}
        <div className="glass-card neon-border p-6 sm:p-8 animate-glow-pulse">
          {/* Tier buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            {TIERS.map((amount) => (
              <a
                key={amount}
                href={STRIPE_LINKS[amount]}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSelect(amount)}
                className={`
                  relative py-4 rounded-xl font-bold text-lg transition-all duration-200 cursor-pointer text-center no-underline
                  ${!isCustom && selectedTier === amount
                    ? 'bg-smartok-cyan/15 border-2 border-smartok-cyan text-smartok-cyan neon-text scale-105'
                    : 'bg-smartok-card/50 border border-white/10 text-gray-400 hover:border-smartok-cyan/30 hover:text-white'
                  }
                `}
              >
                ${amount}
                {!isCustom && selectedTier === amount && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-smartok-cyan flex items-center justify-center">
                    <svg className="w-3 h-3 text-smartok-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </a>
            ))}

            {/* Custom amount button */}
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                placeholder={t('contribution.custom')}
                value={customAmount}
                onFocus={handleCustomFocus}
                onChange={handleCustomChange}
                className={`
                  w-full h-full py-4 rounded-xl font-bold text-lg text-center bg-smartok-card/50 border transition-all duration-200 outline-none
                  ${isCustom
                    ? 'border-2 border-smartok-cyan text-smartok-cyan neon-text scale-105'
                    : 'border-white/10 text-gray-400 hover:border-smartok-cyan/30 focus:border-smartok-cyan/50'
                  }
                `}
              />
              {isCustom && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-smartok-cyan flex items-center justify-center">
                  <svg className="w-3 h-3 text-smartok-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
            </div>
          </div>

          {/* Amount display */}
          <div className="flex items-center justify-between py-4 px-5 rounded-xl bg-smartok-bg/60 border border-white/5 mb-6">
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">{t('contribution.amountLabel')}</span>
            <span className="text-2xl font-bold text-smartok-cyan neon-text">
              ${isCustom ? (customAmount || '0') : selectedTier}.00
            </span>
          </div>

          {/* CTA button */}
          <a
            href={getStripeLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-xl font-bold text-lg text-center text-smartok-bg bg-gradient-to-r from-smartok-cyan to-smartok-neon hover:from-smartok-cyan hover:to-smartok-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] active:scale-[0.98]"
          >
            {t('contribution.cta')}
          </a>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
            {t('contribution.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  )
}
