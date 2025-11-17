import { useI18n } from '../i18n'
import { GeometricDivider } from './Decor'

export default function Awards() {
  const { t } = useI18n()
  const outlets = ['Michelin Guide', 'Condé Nast', 'El Comidista', 'Apicius']
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">{t('awards.press')}</p>
      <GeometricDivider />
      <div className="mt-6 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-4">
        {outlets.map((o) => (
          <div key={o} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">{o}</div>
        ))}
      </div>
    </div>
  )
}
