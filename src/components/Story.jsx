import { motion } from 'framer-motion'

const timeline = [
  { year: '1978', text: 'A small family tavern opens in the heart of Andalucía, where recipes are passed from abuela to chef.' },
  { year: '1999', text: 'A new generation blends tradition with modern technique, honoring seasonality and craft.' },
  { year: 'Hoy', text: 'Sueño Andaluz: an ode to warmth, conviviality, and the soul of Southern Spain.' },
]

export default function Story() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="prose prose-invert max-w-none">
        <p className="text-white/90">
          Our philosophy is simple: celebrate the generosity of Andalusian cuisine through produce-driven plates, wood fire, and the sunlit brightness of olive oil and citrus. We cook with respect for the past and joy for the present.
        </p>
        <p className="text-white/80">
          Our dining room blends stone, tile, and linen with contemporary lines, inviting slow meals and lively conversations. It is a place to gather, to linger, to dream.
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
