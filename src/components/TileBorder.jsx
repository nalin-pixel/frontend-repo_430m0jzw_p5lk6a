export default function TileBorder({ className = '', tone = 'light' }) {
  const light = tone === 'light'
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            light
              ? 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 10px, rgba(0,0,0,0.02) 10px 20px)'
              : 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 10px, rgba(255,255,255,0.03) 10px 20px)',
          maskImage:
            'linear-gradient(to bottom, transparent, black 16px, black calc(100% - 16px), transparent)',
        }}
      />
      <div className={`absolute inset-x-0 top-0 h-[2px] ${light ? 'bg-neutral-300/70' : 'bg-white/20'}`} />
      <div className={`absolute inset-x-0 bottom-0 h-[2px] ${light ? 'bg-neutral-300/70' : 'bg-white/20'}`} />
    </div>
  )
}
