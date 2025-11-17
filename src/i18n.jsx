import { createContext, useContext, useState, useMemo } from 'react'

const I18nContext = createContext()

const dictionary = {
  en: {
    nav: {
      menu: 'Menu',
      story: 'Our Story',
      gallery: 'Gallery',
      reservations: 'Reservations',
      contact: 'Contact',
      reserve: 'Reserve'
    },
    hero: {
      badge: 'Modern Andalusian Cuisine',
      title: 'Sueño Andaluz',
      desc: 'A contemporary homage to the flavors, rhythms, and warmth of Southern Spain. Fire-kissed tapas, seasonal seafood, and wines from sunlit hillsides.',
      ctaReserve: 'Reserve a Table',
      ctaMenu: 'Explore the Menu'
    },
    sections: {
      menuEyebrow: 'La Carta',
      menuTitle: 'Seasonal Menu',
      storyEyebrow: 'Nuestra Historia',
      storyTitle: 'Craft rooted in Andalusia',
      galleryEyebrow: 'Galería',
      galleryTitle: 'From the kitchen & the room',
      tastingEyebrow: 'Experiencia',
      tastingTitle: 'Tasting Menu & Wine Pairing',
      reservationsEyebrow: 'Reservas',
      reservationsTitle: 'Your table awaits',
      contactEyebrow: 'Contacto',
      contactTitle: 'Visit us',
    },
    story: {
      p1: 'Our philosophy is simple: celebrate the generosity of Andalusian cuisine through produce-driven plates, wood fire, and the sunlit brightness of olive oil and citrus. We cook with respect for the past and joy for the present.',
      p2: 'Our dining room blends stone, tile, and linen with contemporary lines, inviting slow meals and lively conversations. It is a place to gather, to linger, to dream.',
      timeline: [
        { year: '1978', text: 'A small family tavern opens in the heart of Andalucía, where recipes are passed from abuela to chef.' },
        { year: '1999', text: 'A new generation blends tradition with modern technique, honoring seasonality and craft.' },
        { year: 'Today', text: 'Sueño Andaluz: an ode to warmth, conviviality, and the soul of Southern Spain.' },
      ],
    },
    reservations: {
      title: 'Reserve a Table',
      name: 'Name',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      reserve: 'Reserve',
      booking: 'Booking…',
      reserved: 'Reserved ✓',
      hoursTitle: 'Hours & Details',
    },
    contact: {
      address: 'Address',
      contact: 'Contact',
      hours: 'Hours',
    },
    tasting: {
      intro: 'An elegant journey across land and sea: a six-course celebration of olive groves, coastal winds, and Moorish echoes.',
      menuTitle: 'Prix Fixe Tasting',
      price: '€75 per person',
      pairingTitle: 'Wine Pairing',
      pairingDesc: 'Four pours spanning fino sherry to mountain garnacha.',
      pairingPrice: '€38 add-on',
      reserveCta: 'Book the Experience',
      notes: 'Kindly inform us of allergies. Vegetarian route available with advance notice.'
    },
    awards: {
      press: 'Press & Accolades',
    },
    footer: {
      byline: 'Modern Andalusian Cuisine · Seville'
    }
  },
  es: {
    nav: {
      menu: 'Carta',
      story: 'Historia',
      gallery: 'Galería',
      reservations: 'Reservas',
      contact: 'Contacto',
      reserve: 'Reservar'
    },
    hero: {
      badge: 'Cocina Andaluza Moderna',
      title: 'Sueño Andaluz',
      desc: 'Un homenaje contemporáneo a los sabores, ritmos y calidez del Sur de España. Tapas al fuego, mar de temporada y vinos de laderas soleadas.',
      ctaReserve: 'Reserva tu mesa',
      ctaMenu: 'Explora la carta'
    },
    sections: {
      menuEyebrow: 'La Carta',
      menuTitle: 'Menú de temporada',
      storyEyebrow: 'Nuestra Historia',
      storyTitle: 'Oficio con raíces andaluzas',
      galleryEyebrow: 'Galería',
      galleryTitle: 'De la cocina y la sala',
      tastingEyebrow: 'Experiencia',
      tastingTitle: 'Menú Degustación y Maridaje',
      reservationsEyebrow: 'Reservas',
      reservationsTitle: 'Tu mesa te espera',
      contactEyebrow: 'Contacto',
      contactTitle: 'Visítanos',
    },
    story: {
      p1: 'Nuestra filosofía es sencilla: celebrar la generosidad de la cocina andaluza con platos de producto, fuego de leña y la luz del aceite de oliva y los cítricos. Cocinamos con respeto al pasado y alegría por el presente.',
      p2: 'La sala mezcla piedra, azulejo y lino con líneas contemporáneas, invitando a comidas largas y conversaciones vivas. Es un lugar para reunirse, demorarse y soñar.',
      timeline: [
        { year: '1978', text: 'Una pequeña taberna familiar abre en el corazón de Andalucía, donde las recetas pasan de la abuela al cocinero.' },
        { year: '1999', text: 'Una nueva generación une tradición y técnica moderna, honrando la estacionalidad y el oficio.' },
        { year: 'Hoy', text: 'Sueño Andaluz: un canto a la calidez, la convivencia y el alma del Sur.' },
      ],
    },
    reservations: {
      title: 'Reservar mesa',
      name: 'Nombre',
      email: 'Correo',
      date: 'Fecha',
      time: 'Hora',
      guests: 'Comensales',
      reserve: 'Reservar',
      booking: 'Reservando…',
      reserved: 'Reservado ✓',
      hoursTitle: 'Horarios y detalles',
    },
    contact: {
      address: 'Dirección',
      contact: 'Contacto',
      hours: 'Horarios',
    },
    tasting: {
      intro: 'Un viaje elegante por mar y sierra: seis pases que celebran los olivares, los vientos costeros y los ecos andalusíes.',
      menuTitle: 'Menú Degustación',
      price: '75 € por persona',
      pairingTitle: 'Maridaje de Vinos',
      pairingDesc: 'Cuatro copas del fino a la garnacha de montaña.',
      pairingPrice: '38 € suplemento',
      reserveCta: 'Reservar la experiencia',
      notes: 'Indícanos alergias. Ruta vegetariana disponible con antelación.'
    },
    awards: {
      press: 'Prensa y Reconocimientos',
    },
    footer: {
      byline: 'Cocina Andaluza Moderna · Sevilla'
    }
  }
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(() => ({ lang, setLang, t: (path) => get(dictionary[lang], path) }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

function get(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj)
}
