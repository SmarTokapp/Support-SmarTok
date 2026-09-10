import { useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ContributionWidget from './components/ContributionWidget.jsx'
import TransparencyBoard from './components/TransparencyBoard.jsx'
import Footer from './components/Footer.jsx'
import WebAppOverlay from './components/WebAppOverlay.jsx'

export default function App() {
  const [selectedTier, setSelectedTier] = useState(10)
  const [webAppOpen, setWebAppOpen] = useState(false)
  const launchBtnRef = useRef(null)

  return (
    <div className="min-h-screen bg-smartok-bg text-white overflow-x-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-smartok-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-smartok-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar onLaunchWebApp={() => setWebAppOpen(true)} launchBtnRef={launchBtnRef} />
        <Hero />
        <ContributionWidget
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
        />
        <TransparencyBoard />
        <Footer />
      </div>

      {/* Web App demo overlay — replicates the iframe overlay + "Back to Website"
          exit button behavior from the main smartok.app site. */}
      <WebAppOverlay
        open={webAppOpen}
        onClose={() => setWebAppOpen(false)}
        launchBtnRef={launchBtnRef}
      />
    </div>
  )
}
