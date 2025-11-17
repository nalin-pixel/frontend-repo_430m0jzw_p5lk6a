import Section from '../components/Section'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Tasting from '../components/Tasting'
import Awards from '../components/Awards'
import Story from '../components/Story'
import Gallery from '../components/Gallery'
import Reservations from '../components/Reservations'
import { useI18n } from '../i18n'

export default function Home() {
  const { t } = useI18n()
  return (
    <>
      <Hero />

      <Section id="menu" eyebrow={t('sections.menuEyebrow')} title={t('sections.menuTitle')}>
        <Menu />
      </Section>

      <Section id="tasting" eyebrow={t('sections.tastingEyebrow')} title={t('sections.tastingTitle')}>
        <Tasting />
      </Section>

      <div className="mx-auto max-w-7xl px-6 -mt-8">
        <Awards />
      </div>

      <Section id="story" eyebrow={t('sections.storyEyebrow')} title={t('sections.storyTitle')}>
        <Story />
      </Section>

      <Section id="gallery" eyebrow={t('sections.galleryEyebrow')} title={t('sections.galleryTitle')}>
        <Gallery />
      </Section>

      <Section id="reservations" eyebrow={t('sections.reservationsEyebrow')} title={t('sections.reservationsTitle')}>
        <Reservations />
      </Section>
    </>
  )
}
