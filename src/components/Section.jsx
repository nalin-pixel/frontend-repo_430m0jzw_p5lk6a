export default function Section({ id, eyebrow, title, children, background = 'dark' }) {
  const isDark = background === 'dark'
  return (
    <section id={id} className={`${isDark ? 'bg-[#0a0a0a]' : 'bg-neutral-50'} relative py-20 sm:py-28`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          {eyebrow && (
            <p className={`text-xs uppercase tracking-[0.2em] ${isDark ? 'text-white/60' : 'text-neutral-600'}`}>{eyebrow}</p>
          )}
          {title && (
            <h2 className={`mt-3 text-3xl sm:text-4xl font-serif ${isDark ? 'text-white' : 'text-neutral-900'}`}>{title}</h2>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
