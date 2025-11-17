import Section from '../components/Section'
import Gallery from '../components/Gallery'
import { useI18n } from '../i18n'

export default function GalleryPage() {
  const { t } = useI18n()
  return (
    <Section eyebrow={t('sections.galleryEyebrow')} title={t('sections.galleryTitle')}>
      <Gallery />
    </Section>
  )
}
