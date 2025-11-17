import { motion } from 'framer-motion'

const items = [
  {
    category: 'Tapas',
    dishes: [
      { name: 'Gambas al Ajillo', desc: 'Sizzling garlic prawns, chili, fino sherry', price: '€14' },
      { name: 'Tortilla de Patatas', desc: 'Traditional omelette, confit onion, aioli', price: '€9' },
      { name: 'Jamón Ibérico', desc: 'Acorn-fed, hand carved, pan con tomate', price: '€18' },
    ],
  },
  {
    category: 'Mar y Tierra',
    dishes: [
      { name: 'Lubina a la Plancha', desc: 'Crisp sea bass, saffron beurre monté, fennel', price: '€24' },
      { name: 'Secreto Ibérico', desc: 'Charred pork, smoked pimentón glaze, piquillo', price: '€26' },
      { name: 'Arroz Caldoso', desc: 'Rich shellfish rice, saffron, green olive', price: '€22' },
    ],
  },
  {
    category: 'Dulces',
    dishes: [
      { name: 'Tarta de Naranja', desc: 'Seville orange curd, almond sable, crema', price: '€10' },
      { name: 'Churros Finos', desc: 'Crisp ribbons, dark chocolate, olive oil salt', price: '€8' },
    ],
  },
]

export default function Menu() {
  return (
    <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
      {items.map((section, i) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 * i }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
        >
          <h3 className="mb-4 font-serif text-2xl">{section.category}</h3>
          <ul className="space-y-4">
            {section.dishes.map((d) => (
              <li key={d.name} className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-medium">{d.name}</p>
                  <p className="text-sm text-white/70">{d.desc}</p>
                </div>
                <span className="text-white/80">{d.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
