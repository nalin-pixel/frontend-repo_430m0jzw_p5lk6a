import React from 'react'

// Ceramic-inspired azulejo border using CSS gradients
export function AzulejoBorder({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(black,black)], border border-white/10" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60">
        <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_45deg,rgba(255,255,255,0.08)_0_25%,transparent_0_50%,rgba(255,255,255,0.08)_0_75%,transparent_0)] [background-size:16px_16px] mix-blend-overlay" />
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_10%_0%,rgba(255,180,0,.08),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(255,0,90,.08),transparent_35%)]" />
      </div>
    </div>
  )
}

// Geometric divider evoking tilework
export function GeometricDivider({ className = '' }) {
  return (
    <div className={`relative my-12 flex items-center justify-center ${className}`} aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute grid grid-cols-3 gap-2">
        <span className="h-2 w-2 rotate-45 bg-white/40" />
        <span className="h-2 w-2 rotate-45 bg-rose-400/60" />
        <span className="h-2 w-2 rotate-45 bg-amber-400/60" />
      </div>
    </div>
  )
}
