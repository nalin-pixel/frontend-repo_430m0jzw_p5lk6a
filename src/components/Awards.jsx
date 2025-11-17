import { motion } from 'framer-motion'
import { Crown, Award, Newspaper } from 'lucide-react'
import { useI18n } from '../i18n'

const logos = [
  { name: 'Guía Repsol', icon: Crown },
  { name: 'Michelin Guide', icon: Award },
  { name: 'El Comidista', icon: Newspaper },
  { name: 'Condé Nast', icon: Newspaper },
  { name: 'Time Out', icon: Newspaper },
]

export default function Awards() {
  const { t } = useI18n()
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{t('awards.press')}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {logos.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80"
          >
            <l.icon className="h-4 w-4 text-amber-300" />
            <span className="text-sm">{l.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
