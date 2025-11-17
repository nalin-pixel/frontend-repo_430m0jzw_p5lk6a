import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Menu from './components/Menu'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Tasting from './components/Tasting'
import Awards from './components/Awards'
import Reservations from './components/Reservations'
import Footer from './components/Footer'
import { useI18n } from './i18n'

function App() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />

      <Section id="menu" eyebrow={t('sections.menuEyebrow')} title={t('sections.menuTitle')}>
        <Menu />
      </Section>

      <Section id="tasting" eyebrow={t('sections.tastingEyebrow')} title={t('sections.tastingTitle')}>
        <Tasting />
      </Section>

      <div className="mx-auto max-w-7xl px-6 -mt-8">
        <Awards />
      </div>

      <Section id="story" eyebrow={t('sections.storyEyebrow')} title={t('sections.storyTitle')}>
        <Story />
      </Section>

      <Section id="gallery" eyebrow={t('sections.galleryEyebrow')} title={t('sections.galleryTitle')}>
        <Gallery />
      </Section>

      <Section id="reservations" eyebrow={t('sections.reservationsEyebrow')} title={t('sections.reservationsTitle')}>
        <Reservations />
      </Section>

      <Section id="contact" background="light" eyebrow={t('sections.contactEyebrow')} title={t('sections.contactTitle')}>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">{t('contact.address')}</h3>
            <p>Calle de los Sueños 21<br/>41001 Sevilla, España</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">{t('contact.contact')}</h3>
            <p>+34 950 000 000<br/>hola@suenoandaluz.es</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">{t('contact.hours')}</h3>
            <p>Mon–Thu: 18:00 – 23:00<br/>Fri–Sat: 18:00 – 01:00<br/>Sun: 13:00 – 21:00</p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App
