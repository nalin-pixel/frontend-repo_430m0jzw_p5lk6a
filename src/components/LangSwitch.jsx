import { Globe } from 'lucide-react'
import { useI18n } from '../i18n'

export default function LangSwitch({ className = '' }) {
  const { lang, setLang } = useI18n()
  const toggle = () => setLang(lang === 'en' ? 'es' : 'en')
  return (
    <button onClick={toggle} className={`inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white ${className}`} aria-label="Toggle language">
      <Globe className="h-4 w-4" /> {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
