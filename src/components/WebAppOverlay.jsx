import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

// Must match the exact URL used by the main website (SmarTokWebsite main.js):
//   var WEBAPP_URL = 'https://smart.smartok.app';
// No query parameters are appended. This identical URL is what allows the
// "<- Back to Website" exit button (rendered by this overlay, positioned on
// top of the iframe) to appear in the same place as on smartok.app.
const WEBAPP_URL = 'https://smart.smartok.app'

export default function WebAppOverlay({ open, onClose, launchBtnRef }) {
  const { t } = useTranslation()
  const iframeRef = useRef(null)
  const exitBtnRef = useRef(null)

  // Lock body scroll + focus the exit button when the overlay opens,
  // mirroring openWebAppDemo() in SmarTokWebsite/main.js.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const id = setTimeout(() => exitBtnRef.current?.focus(), 100)
      return () => clearTimeout(id)
    }
    document.body.style.overflow = ''
  }, [open])

  // Close on Escape, mirroring the main site's keydown handler.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Restore focus to the launch button when closing, mirroring closeWebAppDemo().
  const handleClose = () => {
    onClose()
    setTimeout(() => launchBtnRef?.current?.focus(), 0)
  }

  // Clear the iframe src when hidden so audio/playback stops, matching the
  // main site which sets webappIframe.src = '' on close.
  return (
    <div
      className={`webapp-overlay ${open ? 'active' : ''}`}
      aria-hidden={!open}
    >
      <button
        ref={exitBtnRef}
        className="webapp-exit-btn"
        onClick={handleClose}
        aria-label={t('webapp.exitAria')}
        tabIndex={open ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>{t('webapp.exit')}</span>
      </button>
      <iframe
        ref={iframeRef}
        className="webapp-iframe"
        src={open ? WEBAPP_URL : ''}
        title="SmarTok Web App"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
