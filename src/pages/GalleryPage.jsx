import Section from '../components/Section'
import Gallery from '../components/Gallery'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

// Accept real photography via query param or future API
const sample = [
  'https://images.unsplash.com/photo-1604909052742-18a56f4cd5ac?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541782814453-c28a0b5b14e9?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532635026-c96689b76f6f?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529059997568-3d847b1154f8?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1780&auto=format&fit=crop'
]

export default function GalleryPage() {
  const { t, lang } = useI18n()
  const params = new URLSearchParams(window.location.search)
  const external = params.get('imgs')?.split(',')?.filter(Boolean)

  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Galería · Sueño Andaluz' : 'Gallery · Sueño Andaluz',
      description: lang === 'es' ? 'Fotografía de cocina y sala: la atmósfera de Sueño Andaluz.' : 'Kitchen and dining room photography: the atmosphere of Sueño Andaluz.',
      lang
    })
  }, [lang])

  return (
    <Section eyebrow={t('sections.galleryEyebrow')} title={t('sections.galleryTitle')} withDivider>
      <Gallery images={external?.length ? external : sample} />
    </Section>
  )
}
