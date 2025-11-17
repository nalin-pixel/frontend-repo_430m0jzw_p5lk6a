import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import StoryPage from './pages/StoryPage'
import GalleryPage from './pages/GalleryPage'
import ReservationsPage from './pages/ReservationsPage'
import ContactPage from './pages/ContactPage'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="story" element={<StoryPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
