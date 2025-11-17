import Section from '../components/Section'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Tasting from '../components/Tasting'
import Awards from '../components/Awards'
import Story from '../components/Story'
import Gallery from '../components/Gallery'
import Reservations from '../components/Reservations'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

export default function Home() {
  const { t, lang } = useI18n()

  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Sueño Andaluz · Cocina Andaluza Moderna' : 'Sueño Andaluz · Modern Andalusian Dining',
      description: lang === 'es'
        ? 'Cocina andaluza contemporánea en Sevilla. Carta de temporada, bodega cuidada y hospitalidad cálida.'
        : 'Contemporary Andalusian cuisine in Seville. Seasonal menu, thoughtful cellar, and warm hospitality.',
      lang
    })
  }, [lang])

  return (
    <>
      <Hero />

      <Section id="menu" eyebrow={t('sections.menuEyebrow')} title={t('sections.menuTitle')} withDivider>
        <Menu />
      </Section>

      <Section id="tasting" eyebrow={t('sections.tastingEyebrow')} title={t('sections.tastingTitle')} withDivider>
        <Tasting />
      </Section>

      <div className="mx-auto max-w-7xl px-6 -mt-8">
        <Awards />
      </div>

      <Section id="story" eyebrow={t('sections.storyEyebrow')} title={t('sections.storyTitle')} withDivider>
        <Story />
      </Section>

      <Section id="gallery" eyebrow={t('sections.galleryEyebrow')} title={t('sections.galleryTitle')} withDivider>
        <Gallery />
      </Section>

      <Section id="reservations" eyebrow={t('sections.reservationsEyebrow')} title={t('sections.reservationsTitle')} withDivider>
        <Reservations />
      </Section>
    </>
  )
}
