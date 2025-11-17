import Section from '../components/Section'
import Menu from '../components/Menu'
import Tasting from '../components/Tasting'
import Awards from '../components/Awards'
import { useI18n } from '../i18n'

export default function MenuPage() {
  const { t } = useI18n()
  return (
    <>
      <Section eyebrow={t('sections.menuEyebrow')} title={t('sections.menuTitle')}>
        <Menu />
      </Section>
      <Section eyebrow={t('sections.tastingEyebrow')} title={t('sections.tastingTitle')}>
        <Tasting />
      </Section>
      <div className="mx-auto max-w-7xl px-6 -mt-8">
        <Awards />
      </div>
    </>
  )
}
