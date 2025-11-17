import Section from '../components/Section'
import Menu from '../components/Menu'
import Tasting from '../components/Tasting'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

export default function MenuPage() {
  const { t, lang } = useI18n()

  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Carta · Sueño Andaluz' : 'Menu · Sueño Andaluz',
      description: lang === 'es' ? 'Platos de temporada, brasas y mar de Andalucía.' : 'Seasonal Andalusian dishes from grill to sea.',
      lang
    })
  }, [lang])

  return (
    <>
      <Section eyebrow={t('sections.menuEyebrow')} title={t('sections.menuTitle')} withDivider>
        <Menu />
      </Section>
      <Section eyebrow={t('sections.tastingEyebrow')} title={t('sections.tastingTitle')} withDivider>
        <Tasting />
      </Section>
    </>
  )
}
