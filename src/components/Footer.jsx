import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/icon.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="SmarTok" className="w-7 h-7 rounded-lg" />
            <span className="text-sm font-bold">
              <span className="text-white">Smar</span>
              <span className="text-smartok-cyan">Tok</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="https://smart.smartok.app/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-smartok-cyan transition-colors">{t('footer.privacy')}</a>
            <Link to="/terms" className="hover:text-smartok-cyan transition-colors">{t('footer.terms')}</Link>
            <a href="#transparency" className="hover:text-smartok-cyan transition-colors">{t('footer.transparency')}</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('footer.disclaimer')}
          </p>
          <p className="mt-4 text-xs text-gray-700 font-mono">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
