import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Menu from './components/Menu'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Reservations from './components/Reservations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />

      <Section id="menu" eyebrow="La Carta" title="Seasonal Menu">
        <Menu />
      </Section>

      <Section id="story" eyebrow="Nuestra Historia" title="Craft rooted in Andalusia">
        <Story />
      </Section>

      <Section id="gallery" eyebrow="Galería" title="From the kitchen & the room">
        <Gallery />
      </Section>

      <Section id="reservations" eyebrow="Reservas" title="Your table awaits">
        <Reservations />
      </Section>

      <Section id="contact" background="light" eyebrow="Contacto" title="Visit us">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">Address</h3>
            <p>Calle de los Sueños 21<br/>41001 Sevilla, España</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">Contact</h3>
            <p>+34 950 000 000<br/>hola@suenoandaluz.es</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
            <h3 className="font-serif text-xl mb-2">Hours</h3>
            <p>Mon–Thu: 18:00 – 23:00<br/>Fri–Sat: 18:00 – 01:00<br/>Sun: 13:00 – 21:00</p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App
