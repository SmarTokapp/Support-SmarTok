import { useTranslation } from 'react-i18next'

const MONTHLY_DATA = {
  month: 'September 2026',
  supportReceived: 2840,
  infrastructureCosts: 2315,
  reserved: 525,
}

const BREAKDOWN = [
  { key: 'aws', name: 'AWS Hosting', amount: 680, icon: 'cloud', color: '#00f3ff' },
  { key: 'cdn', name: 'CDN (Content Delivery)', amount: 320, icon: 'network', color: '#00ffaa' },
  { key: 'render', name: 'Render (API Services)', amount: 450, icon: 'server', color: '#a855f7' },
  { key: 'database', name: 'Database (PostgreSQL)', amount: 290, icon: 'database', color: '#0a84ff' },
  { key: 'ionos', name: 'IONOS (Domain & DNS)', amount: 85, icon: 'globe', color: '#00f3ff' },
  { key: 'security', name: 'Security & SSL', amount: 240, icon: 'shield', color: '#00ffaa' },
  { key: 'moderation', name: 'Moderation & AI Safety', amount: 250, icon: 'eye', color: '#a855f7' },
]

const HISTORICAL_DATA = {
  supportReceived: 18420,
  totalExpenses: 16780,
  reservedBalance: 1640,
}

function Icon({ name, color }) {
  const icons = {
    cloud: <path d="M17.5 19a4.5 4.5 0 100-9 5.5 5.5 0 00-10.83-1.5A4 4 0 006.5 19h11z" />,
    network: <path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />,
    server: <path d="M5 3h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 8h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />,
    database: <path d="M12 3c5 0 9 1.5 9 3s-4 3-9 3-9-1.5-9-3 4-3 9-3zm0 7c5 0 9-1.5 9-3v4c0 1.5-4 3-9 3s-9-1.5-9-3V7c0 1.5 4 3 9 3zm0 7c5 0 9-1.5 9-3v4c0 1.5-4 3-9 3s-9-1.5-9-3v-4c0 1.5 4 3 9 3z" />,
    globe: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c2.5 0 4.5 3.6 4.5 8s-2 8-4.5 8-4.5-3.6-4.5-8 2-8 4.5-8zM2.5 12h19M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />,
    shield: <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />,
    eye: <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 3a4 4 0 110 8 4 4 0 010-8z" />,
  }

  return (
    <svg className="w-5 h-5" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

function StatCard({ label, value, accent }) {
  return (
    <div className="glass-card p-5 sm:p-6 flex flex-col items-center text-center">
      <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{label}</span>
      <span className={`text-2xl sm:text-3xl font-bold ${accent}`}>${value.toLocaleString()}</span>
    </div>
  )
}

export default function TransparencyBoard() {
  const { t } = useTranslation()
  const totalBreakdown = BREAKDOWN.reduce((sum, item) => sum + item.amount, 0)

  return (
    <section id="transparency" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-smartok-neon/5 border border-smartok-neon/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-smartok-neon" />
            <span className="text-xs font-mono text-smartok-neon tracking-wider uppercase">{t('transparency.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-white">{t('transparency.title')} </span>
            <span className="gradient-text">{t('transparency.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            {t('transparency.subtitle')}
          </p>
        </div>

        {/* Tier 1: Summary Widget */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-smartok-cyan/10 border border-smartok-cyan/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-smartok-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">
              {t('transparency.currentMonth')} — <span className="text-smartok-cyan">{MONTHLY_DATA.month}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              label={t('transparency.summary.supportReceived')}
              value={MONTHLY_DATA.supportReceived}
              accent="text-smartok-cyan neon-text"
            />
            <StatCard
              label={t('transparency.summary.infrastructureCosts')}
              value={MONTHLY_DATA.infrastructureCosts}
              accent="text-orange-400"
            />
            <StatCard
              label={t('transparency.summary.reserved')}
              value={MONTHLY_DATA.reserved}
              accent="text-smartok-neon"
            />
          </div>

          {/* Progress bar */}
          <div className="mt-6 glass-card p-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t('transparency.costCoverage')}</span>
              <span className="text-xs font-mono text-smartok-cyan">
                {Math.round((MONTHLY_DATA.infrastructureCosts / MONTHLY_DATA.supportReceived) * 100)}% {t('transparency.covered')}
              </span>
            </div>
            <div className="h-3 rounded-full bg-smartok-bg/80 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-smartok-cyan to-smartok-neon transition-all duration-1000"
                style={{ width: `${(MONTHLY_DATA.infrastructureCosts / MONTHLY_DATA.supportReceived) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tier 2: Detailed Report */}
        <div id="breakdown" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-smartok-purple/10 border border-smartok-purple/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-smartok-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">{t('transparency.detailedBreakdown')} — <span className="text-smartok-cyan">{MONTHLY_DATA.month}</span></h3>
          </div>

          <div className="glass-card p-5 sm:p-6">
            <div className="space-y-3">
              {BREAKDOWN.map((item, idx) => {
                const pct = (item.amount / totalBreakdown) * 100
                return (
                  <div key={item.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center border"
                          style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}30` }}
                        >
                          <Icon name={item.icon} color={item.color} />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {t(`transparency.breakdown.${item.key}`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gray-500">{pct.toFixed(1)}%</span>
                        <span className="text-sm font-bold text-white tabular-nums">${item.amount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-smartok-bg/60 overflow-hidden ml-12">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: item.color,
                          boxShadow: `0 0 8px ${item.color}40`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Total */}
            <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">{t('transparency.totalInfrastructureCosts')}</span>
              <span className="text-xl font-bold text-orange-400">${totalBreakdown.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Historical (All-Time) */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-smartok-blue/10 border border-smartok-blue/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-smartok-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">{t('transparency.historical')} — <span className="text-smartok-cyan">{t('transparency.allTime')}</span></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              label={t('transparency.historicalSummary.totalSupport')}
              value={HISTORICAL_DATA.supportReceived}
              accent="text-smartok-cyan neon-text"
            />
            <StatCard
              label={t('transparency.historicalSummary.totalExpenses')}
              value={HISTORICAL_DATA.totalExpenses}
              accent="text-orange-400"
            />
            <StatCard
              label={t('transparency.historicalSummary.reservedBalance')}
              value={HISTORICAL_DATA.reservedBalance}
              accent="text-smartok-neon"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
