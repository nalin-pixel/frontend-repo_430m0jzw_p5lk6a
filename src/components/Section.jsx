import Divider from './Divider'

export default function Section({ id, eyebrow, title, children, background = 'dark', withDivider = false }) {
  const isDark = background === 'dark'
  return (
    <section id={id} className={`${isDark ? 'bg-[#0a0a0a]' : 'bg-neutral-50'} relative py-20 sm:py-28`}>
      {/* Ambient radial light */}
      <div className="absolute inset-0 pointer-events-none">
        {isDark ? (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(244,114,182,0.06),transparent_40%)]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,180,0,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,90,0.05),transparent_40%)]" />
        )}
      </div>

      {/* Ceramic-inspired top border */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[10px]">
        <div className={`h-full w-full opacity-60 ${isDark ? '' : ''}`} style={{
          backgroundImage:
            'repeating-conic-gradient(from 45deg, rgba(255,255,255,0.08) 0% 25%, rgba(255,255,255,0.0) 0% 50%)',
          maskImage:
            'radial-gradient(circle at 50% -40px, rgba(0,0,0,1) 40px, rgba(0,0,0,0) 120px)'
        }} />
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
        {withDivider && <Divider theme={isDark ? 'dark' : 'light'} />}
      </div>

      {/* Ceramic-inspired bottom border */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[10px]">
        <div className={`h-full w-full opacity-60 rotate-180 ${isDark ? '' : ''}`} style={{
          backgroundImage:
            'repeating-conic-gradient(from 45deg, rgba(255,255,255,0.08) 0% 25%, rgba(255,255,255,0.0) 0% 50%)',
          maskImage:
            'radial-gradient(circle at 50% -40px, rgba(0,0,0,1) 40px, rgba(0,0,0,0) 120px)'
        }} />
      </div>
    </section>
  )
}
