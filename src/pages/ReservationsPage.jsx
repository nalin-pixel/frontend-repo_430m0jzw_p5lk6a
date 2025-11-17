import Section from '../components/Section'
import Reservations from '../components/Reservations'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

export default function ReservationsPage() {
  const { t, lang } = useI18n()
  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Reservas · Sueño Andaluz' : 'Reservations · Sueño Andaluz',
      description: lang === 'es' ? 'Reserva tu mesa en Sueño Andaluz, cocina andaluza moderna en Sevilla.' : 'Book your table at Sueño Andaluz, modern Andalusian cuisine in Seville.',
      lang
    })
  }, [lang])

  return (
    <Section eyebrow={t('sections.reservationsEyebrow')} title={t('sections.reservationsTitle')} withDivider>
      <Reservations />
    </Section>
  )
}
