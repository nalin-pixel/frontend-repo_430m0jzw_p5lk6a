import Section from '../components/Section'
import { useI18n } from '../i18n'

export default function ContactPage() {
  const { t } = useI18n()
  return (
    <Section background="light" eyebrow={t('sections.contactEyebrow')} title={t('sections.contactTitle')}>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
          <h3 className="font-serif text-xl mb-2">{t('contact.address')}</h3>
          <p>Calle de los Sueños 21<br/>41001 Sevilla, España</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
          <h3 className="font-serif text-xl mb-2">{t('contact.contact')}</h3>
          <p>+34 950 000 000<br/>hola@suenoandaluz.es</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
          <h3 className="font-serif text-xl mb-2">{t('contact.hours')}</h3>
          <p>Mon–Thu: 18:00 – 23:00<br/>Fri–Sat: 18:00 – 01:00<br/>Sun: 13:00 – 21:00</p>
        </div>
      </div>
    </Section>
  )
}
