import Section from '../components/Section'
import Story from '../components/Story'
import { useI18n } from '../i18n'
import { useEffect } from 'react'
import { setSEO } from '../seo'

export default function StoryPage() {
  const { t, lang } = useI18n()
  useEffect(() => {
    setSEO({
      title: lang === 'es' ? 'Historia · Sueño Andaluz' : 'Our Story · Sueño Andaluz',
      description: lang === 'es' ? 'Oficio con raíces andaluzas, tradición y técnica contemporánea.' : 'Craft rooted in Andalusia, blending tradition and contemporary technique.',
      lang
    })
  }, [lang])

  return (
    <Section eyebrow={t('sections.storyEyebrow')} title={t('sections.storyTitle')} withDivider>
      <Story />
    </Section>
  )
}
