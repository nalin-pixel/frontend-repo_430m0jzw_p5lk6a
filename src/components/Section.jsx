export default function Section({ id, eyebrow, title, children, background = 'dark' }) {
  const isDark = background === 'dark'
  return (
    <section id={id} className={`${isDark ? 'bg-[#0a0a0a]' : 'bg-neutral-50'} relative py-20 sm:py-28`}>
      <div className="absolute inset-0 pointer-events-none">
        {isDark ? (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(244,114,182,0.06),transparent_40%)]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,180,0,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,90,0.05),transparent_40%)]" />
        )}
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
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
