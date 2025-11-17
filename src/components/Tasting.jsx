import { motion } from 'framer-motion'
import { Wine, Star } from 'lucide-react'
import { useI18n } from '../i18n'

const courses = [
  { title: 'Aceite y Pan', desc: 'Degustación de AOVE de cosecha temprana, pan de masa madre' },
  { title: 'Ostra y Azahar', desc: 'Ostra templada, vinagreta de naranja amarga de Sevilla' },
  { title: 'Gazpacho Blanco', desc: 'Ajo blanco con uva moscatel y almendra marcona' },
  { title: 'Mar y Sierra', desc: 'Calamar a la brasa y secreto ibérico, jugo de pimentón' },
  { title: 'Arroz del Campo', desc: 'Arroz de perdiz, romero y aceituna verde' },
  { title: 'Dulce Moruno', desc: 'Naranja, miel y especias, aceite de oliva' },
]

export default function Tasting() {
  const { t } = useI18n()
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center gap-2 text-white">
          <Star className="h-5 w-5 text-amber-400" />
          <h3 className="font-serif text-2xl">{t('tasting.menuTitle')}</h3>
        </div>
        <p className="text-white/80 mb-4">{t('tasting.intro')}</p>
        <ul className="space-y-3">
          {courses.map((c) => (
            <li key={c.title} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-white">{c.title}</p>
                <p className="text-sm text-white/70">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-white/90">{t('tasting.price')}</span>
          <a href="#reservations" className="rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-4 py-2 text-sm font-semibold text-white">{t('tasting.reserveCta')}</a>
        </div>
        <p className="mt-4 text-xs text-white/60">{t('tasting.notes')}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center gap-2 text-white">
          <Wine className="h-5 w-5 text-rose-400" />
          <h3 className="font-serif text-2xl">{t('tasting.pairingTitle')}</h3>
        </div>
        <p className="text-white/80">{t('tasting.pairingDesc')}</p>
        <div className="mt-6">
          <span className="rounded-full bg-white/10 px-3 py-1 text-white/90">{t('tasting.pairingPrice')}</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-rose-600/10 p-3">
            <p className="text-sm">Fino • Jerez</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-rose-600/10 p-3">
            <p className="text-sm">Manzanilla • Sanlúcar</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-rose-600/10 p-3">
            <p className="text-sm">Garnacha • Sierra de Málaga</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-rose-600/10 p-3">
            <p className="text-sm">Moscatel Viejo • Axarquía</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
