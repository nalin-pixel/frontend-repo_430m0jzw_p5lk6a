import { Instagram, Facebook, Mail } from 'lucide-react'
import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl text-white">Sueño Andaluz</h3>
            <p className="text-white/60">{t('footer.byline')}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#contact" className="rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Sueño Andaluz. All rights reserved.</div>
      </div>
    </footer>
  )
}
