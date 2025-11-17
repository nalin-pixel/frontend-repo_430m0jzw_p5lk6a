import Section from '../components/Section'
import Reservations from '../components/Reservations'
import { useI18n } from '../i18n'

export default function ReservationsPage() {
  const { t } = useI18n()
  return (
    <Section eyebrow={t('sections.reservationsEyebrow')} title={t('sections.reservationsTitle')}>
      <Reservations />
    </Section>
  )
}
