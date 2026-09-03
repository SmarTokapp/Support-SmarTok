import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import logoIcon from '../assets/icon.png'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-smartok-bg/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={logoIcon} alt="SmarTok" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">Smar</span>
              <span className="text-smartok-cyan neon-text">Tok</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#support" className="text-sm text-gray-400 hover:text-smartok-cyan transition-colors">{t('nav.support')}</a>
            <a href="#transparency" className="text-sm text-gray-400 hover:text-smartok-cyan transition-colors">{t('nav.transparency')}</a>
            <a href="#breakdown" className="text-sm text-gray-400 hover:text-smartok-cyan transition-colors">{t('nav.breakdown')}</a>
            <LanguageSwitcher />
            <a
              href="#support"
              className="px-5 py-2 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 text-smartok-cyan text-sm font-semibold hover:bg-smartok-cyan/20 transition-all"
            >
              {t('nav.supportNow')}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#support"
              className="px-4 py-1.5 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 text-smartok-cyan text-sm font-semibold"
            >
              {t('nav.support')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
