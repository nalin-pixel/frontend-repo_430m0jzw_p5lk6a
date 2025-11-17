export default function Divider({ theme = 'dark' }) {
  const isDark = theme === 'dark'
  return (
    <div className="relative my-16">
      <div className={`mx-auto h-px w-full max-w-6xl ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-neutral-400/50 to-transparent'}`} />
      <div className="pointer-events-none absolute inset-0">
        <div className={`mx-auto h-[2px] w-24 rounded-full ${isDark ? 'bg-gradient-to-r from-amber-500/60 via-rose-500/60 to-red-600/60' : 'bg-gradient-to-r from-amber-600/60 via-rose-600/60 to-red-700/60'} blur-[2px]`} />
      </div>
    </div>
  )
}
