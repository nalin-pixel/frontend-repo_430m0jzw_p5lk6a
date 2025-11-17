import { useState } from 'react'
import { Menu, X, Phone, CalendarDays } from 'lucide-react'

const navItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reservations', label: 'Reservations' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-red-600 shadow-inner" />
              <div className="tracking-wide">
                <span className="block text-sm text-white/70">Sueño</span>
                <span className="block -mt-1 text-lg font-semibold text-white">Andaluz</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-white/90">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#reservations" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/20">
                <CalendarDays className="h-4 w-4" /> Reserve
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2 text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="tel:+34950000000" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white">
                  <Phone className="h-4 w-4" /> +34 950 000 000
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
