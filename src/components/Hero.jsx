import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.4),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.6),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto flex h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">{t('hero.badge')}</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.05] text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/90">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#reservations" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-900/20">{t('hero.ctaReserve')}</a>
            <a href="#menu" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white/90 hover:bg-white/20">{t('hero.ctaMenu')}</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="h-10 w-6 rounded-full border border-white/30 bg-white/10 p-1">
          <motion.div animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-white" />
        </motion.div>
      </div>
    </section>
  )
}
