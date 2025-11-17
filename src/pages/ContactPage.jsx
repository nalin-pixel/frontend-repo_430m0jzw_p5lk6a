import Section from '../components/Section'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

export default function ContactPage() {
  const { t, lang } = useI18n()
  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Contacto · Sueño Andaluz' : 'Contact · Sueño Andaluz',
      description: lang === 'es' ? 'Dirección, horarios y formas de contacto.' : 'Address, hours, and contact details.',
      lang
    })
  }, [lang])

  return (
    <Section eyebrow={t('sections.contactEyebrow')} title={t('sections.contactTitle')} withDivider>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-serif text-xl mb-2">{t('contact.address')}</h3>
          <p className="text-white/80">Calle de los Sueños 21, Sevilla</p>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-serif text-xl mb-2">{t('contact.hours')}</h3>
          <p className="text-white/80">Mon–Thu: 18:00–23:00<br/>Fri–Sat: 18:00–01:00<br/>Sun: 13:00–21:00</p>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-serif text-xl mb-2">{t('contact.contact')}</h3>
          <p className="text-white/80">+34 950 000 000<br/>hola@suenoandaluz.com</p>
        </div>
      </div>
    </Section>
  )
}
