import { Outlet } from 'react-router-dom'
import { I18nProvider } from './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Layout() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <ScrollToTop />
        <main className="pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
