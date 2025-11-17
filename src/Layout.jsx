import { Outlet } from 'react-router-dom'
import { I18nProvider } from './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
