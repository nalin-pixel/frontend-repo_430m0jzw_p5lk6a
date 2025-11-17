import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Reservations() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 })
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('done'), 1000)
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <h3 className="mb-4 font-serif text-2xl">{t('reservations.title')}</h3>
        <form onSubmit={submit} className="grid gap-4">
          <div>
            <label className="mb-1 block text-sm text-white/70">{t('reservations.name')}</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="María García" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">{t('reservations.email')}</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="tu@correo.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">{t('reservations.date')}</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-rose-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">{t('reservations.time')}</label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-rose-500/40" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">{t('reservations.guests')}</label>
            <input type="number" min="1" max="10" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-rose-500/40" />
          </div>
          <motion.button whileTap={{ scale: 0.98 }} disabled={status !== 'idle'} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-6 py-3 font-semibold text-white disabled:opacity-60">
            {status === 'loading' ? t('reservations.booking') : status === 'done' ? t('reservations.reserved') : t('reservations.reserve')}
          </motion.button>
        </form>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <h3 className="mb-4 font-serif text-2xl">{t('reservations.hoursTitle')}</h3>
        <ul className="space-y-2 text-white/80">
          <li>Mon–Thu: 18:00 – 23:00</li>
          <li>Fri–Sat: 18:00 – 01:00</li>
          <li>Sun: 13:00 – 21:00</li>
          <li className="pt-3">Calle de los Sueños 21, Sevilla</li>
          <li>+34 950 000 000</li>
        </ul>
      </div>
    </div>
  )
}
