import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Story() {
  const { t } = useI18n()
  const timeline = t('story.timeline')
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="prose prose-invert max-w-none">
        <p className="text-white/90">
          {t('story.p1')}
        </p>
        <p className="text-white/80">
          {t('story.p2')}
        </p>
      </div>
      <ol className="relative border-l border-white/10 pl-6">
        {timeline.map((item, idx) => (
          <motion.li
            key={item.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-8"
          >
            <div className="absolute -left-2.5 h-4 w-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-600" />
            <h4 className="font-serif text-xl text-white">{item.year}</h4>
            <p className="text-white/80">{item.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
