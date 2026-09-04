import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import logoIcon from '../assets/icon.png'

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#support', label: t('nav.support') },
    { href: '#transparency', label: t('nav.transparency') },
    { href: '#breakdown', label: t('nav.breakdown') },
  ]

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

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-smartok-cyan transition-colors">
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#support"
              className="px-5 py-2 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 text-smartok-cyan text-sm font-semibold hover:bg-smartok-cyan/20 transition-all"
            >
              {t('nav.supportNow')}
            </a>
          </div>

          {/* Mobile: language selector, support button, hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#support"
              className="px-3 py-1.5 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 text-smartok-cyan text-xs font-semibold"
            >
              {t('nav.supportNow')}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-smartok-card/50 text-gray-300 hover:text-smartok-cyan hover:border-smartok-cyan/30 transition-all"
            >
              <div className="flex flex-col justify-center items-center gap-1.5">
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-smartok-bg/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-smartok-cyan hover:bg-smartok-cyan/5 border border-transparent hover:border-smartok-cyan/20 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
