import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1604909052742-18a56f4cd5ac?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541782814453-c28a0b5b14e9?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532635026-c96689b76f6f?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529059997568-3d847b1154f8?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1780&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((src, i) => (
        <motion.div key={src} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl">
          <img src={src} alt="Food" className="h-44 w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-56 md:h-64" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
        </motion.div>
      ))}
    </div>
  )
}
