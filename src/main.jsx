// main.jsx
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

/* AOS */
import AOS from 'aos'
import 'aos/dist/aos.css'

const LOCKED_GREENWAY_ADVISORS_HASH = '#/asesores#greemway'

function normalizeLegacyHashRoute() {
  const { hash } = window.location

  if (hash === LOCKED_GREENWAY_ADVISORS_HASH) return

  if (hash === '#asesores-greenway' || hash === '#/asesores-greenway') {
    window.history.replaceState(null, '', '/asesorias-greenway')
    return
  }

  if (hash.startsWith('#/')) {
    window.history.replaceState(null, '', hash.slice(1))
  }
}

export default function Root() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 12,
    })
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

normalizeLegacyHashRoute()
ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
