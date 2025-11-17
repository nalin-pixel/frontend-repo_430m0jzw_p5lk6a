import { motion } from 'framer-motion'

export default function Gallery({ images = [] }) {
  const palette = 'from-amber-500 via-rose-500 to-red-600'
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((src, i) => (
        <motion.figure
          key={src + i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl"
        >
          <img
            src={src}
            alt="Sueño Andaluz"
            className="h-44 w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-56 md:h-64"
            style={{ filter: 'saturate(1.05) contrast(1.05) hue-rotate(-4deg)' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className={`pointer-events-none absolute inset-0 rounded-2xl border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]`} />
          <div className={`pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${palette} blur-[6px] mix-blend-screen`} />
        </motion.figure>
      ))}
    </div>
  )
}
