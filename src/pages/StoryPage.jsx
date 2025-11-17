import Section from '../components/Section'
import Story from '../components/Story'
import { useI18n } from '../i18n'

export default function StoryPage() {
  const { t } = useI18n()
  return (
    <Section eyebrow={t('sections.storyEyebrow')} title={t('sections.storyTitle')}>
      <Story />
    </Section>
  )
}
