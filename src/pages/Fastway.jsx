import { useCallback, useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  Package,
  Pause,
  Phone,
  Play,
} from 'lucide-react'
import { WhatsappLogo } from 'phosphor-react'
import { fastwayLinks, fastwayPeople, fastwayWhatsapp } from './fastway.data'
import { fastwayBrochures } from './fastway.brochures'
import { buildGmailComposeLink, buildMailtoLink } from '../utils/links'
import './fastway.css'

function Brand() {
  return (
    <span className="fwd-brand">
      <img src="/fastway/logo.webp" alt="Fast Way" width="1200" height="401" />
      <span aria-hidden="true" />
    </span>
  )
}

// Same perspective, opening angles and timing as the Clients Fastway portal.
function DoorEntrance({ onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 2400)
    return () => window.clearTimeout(timer)
  }, [onFinish])
  return (
    <div className="fwd-entrance" aria-label="Bienvenido a Fastway">
      <div className="fwd-entrance-room">
        <div className="fwd-entrance-sign">
          <Brand />
          <span>BIENVENIDO A FASTWAY</span>
        </div>
      </div>
      <div className="fwd-door fwd-door-left" aria-hidden="true" />
      <div className="fwd-door fwd-door-right" aria-hidden="true" />
      <button className="fwd-skip-intro" onClick={onFinish}>
        Ir al directorio <ArrowRight size={14} />
      </button>
    </div>
  )
}

function emailClick(event, email) {
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
    event.preventDefault()
    window.location.href = buildMailtoLink(email)
  }
}

function ContactActions({ person }) {
  return (
    <div className="fwd-contact-actions">
      <a
        className="fwd-whatsapp"
        href={fastwayWhatsapp(person)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir WhatsApp de ${person.name}`}
      >
        <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
        <span>WhatsApp</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <a
        className="fwd-email"
        href={buildGmailComposeLink(person.email)}
        onClick={(event) => emailClick(event, person.email)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enviar correo a ${person.name}`}
      >
        <Mail size={15} aria-hidden="true" />
        <span>Correo</span>
      </a>
      <a
        className="fwd-call"
        href={`tel:${person.phone.replace(/\s/g, '')}`}
        aria-label={`Llamar a ${person.name}: ${person.phone}`}
      >
        <Phone size={15} aria-hidden="true" />
      </a>
    </div>
  )
}

function ContactCard({ person }) {
  return (
    <article
      id={`fwd-${person.id}`}
      className={`fwd-contact ${person.featured ? 'fwd-contact-ceo' : ''}`}
      style={{ '--fwd-photo-scale': person.photoScale || 1 }}
      aria-labelledby={`fwd-name-${person.id}`}
    >
      <span className="fwd-card-art" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none">
          <path d="M60 8 105 34v52L60 112 15 86V34Z" />
          <path d="m60 30 26 15v30L60 90 34 75V45Z" />
          <path d="M60 30v30l26 15M60 60 34 75" />
        </svg>
      </span>
      <div className="fwd-portrait">
        <span className="fwd-photo-crop">
          <img
            src={person.image}
            alt={person.fullName}
            width="180"
            height="180"
          />
        </span>
        <svg
          className="fwd-portrait-orbit"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="116" height="116" rx="15" pathLength="100" />
        </svg>
      </div>
      <div className="fwd-person-info">
        {person.featured && (
          <span className="fwd-ceo-tag">DIRECCIÓN GENERAL</span>
        )}
        <h2 id={`fwd-name-${person.id}`}>{person.name}</h2>
        <p>{person.role}</p>
      </div>
      <ContactActions person={person} />
    </article>
  )
}

function Brochures() {
  return (
    <section className="fwd-brochures" aria-labelledby="fwd-brochures-title">
      <h2 id="fwd-brochures-title" className="fwd-section-label">
        BROCHURES Y CATÁLOGOS
      </h2>
      <div className="fwd-brochure-list">
        {fastwayBrochures.map((document) => (
          <div className="fwd-brochure" key={document.id}>
            <a
              className="fwd-brochure-open"
              href={document.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${document.title} en PDF`}
            >
              <span className="fwd-brochure-cover">
                {document.cover ? (
                  <img
                    src={document.cover}
                    alt=""
                    width="45"
                    height="56"
                    loading="lazy"
                  />
                ) : (
                  <FileText size={24} />
                )}
              </span>
              <span className="fwd-brochure-copy">
                <strong>{document.title}</strong>
                <small>{document.info}</small>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="fwd-brochure-download"
              href={document.url}
              download={document.filename}
              aria-label={`Descargar ${document.title}`}
            >
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        ))}
        {!fastwayBrochures.length && (
          <p className="fwd-brochures-empty">
            Nuestro material comercial estará disponible aquí.
          </p>
        )}
      </div>
    </section>
  )
}

export default function FastwayPage() {
  const [motionPaused, setMotionPaused] = useState(false)
  const [intro, setIntro] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const finishIntro = useCallback(() => setIntro(false), [])
  const ceo = fastwayPeople[0]
  const advisors = fastwayPeople.slice(1)

  useEffect(() => {
    document.body.classList.add('fwd-directory')
    const previousTitle = document.title
    document.title = 'Fastway | Directorio comercial'
    const favicon = document.querySelector('link[rel="icon"]')
    const previousIcon = favicon?.getAttribute('href')
    const previousIconType = favicon?.getAttribute('type')
    favicon?.setAttribute('href', '/fastway/favicon.png')
    favicon?.setAttribute('type', 'image/png')
    const metas = {
      'meta[name="description"]':
        'Directorio comercial Fastway. Contacta a Gina Sánchez, CEO, Karen González, Felipe Barrera y Mauricio Morales por WhatsApp, correo o teléfono.',
      'meta[name="theme-color"]': '#ffffff',
      'meta[property="og:title"]': 'Fastway | Directorio comercial',
      'meta[property="og:description"]':
        'Acceso directo al equipo comercial de Fastway.',
      'meta[property="og:site_name"]': 'Fastway',
    }
    const original = Object.entries(metas).map(([selector, value]) => {
      const element = document.querySelector(selector)
      const content = element?.getAttribute('content')
      element?.setAttribute('content', value)
      return { element, content }
    })
    return () => {
      document.body.classList.remove('fwd-directory')
      document.title = previousTitle
      if (previousIcon) favicon?.setAttribute('href', previousIcon)
      if (previousIconType) favicon?.setAttribute('type', previousIconType)
      original.forEach(({ element, content }) => {
        if (content != null) element?.setAttribute('content', content)
      })
    }
  }, [])

  useEffect(() => {
    if (!intro) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [intro])

  useEffect(() => {
    if (intro) return
    const profile = new URLSearchParams(window.location.search).get('perfil')
    if (fastwayPeople.some((person) => person.id === profile)) {
      document
        .getElementById(`fwd-${profile}`)
        ?.scrollIntoView({ block: 'center' })
    }
  }, [intro])

  return (
    <main
      className={`fwd-directory-page ${intro ? '' : 'fwd-ready'} ${motionPaused ? 'fwd-motion-paused' : ''}`}
    >
      {intro && <DoorEntrance onFinish={finishIntro} />}
      <div className="fwd-shell" inert={intro}>
        <header className="fwd-header">
          <Brand />
          <span className="fwd-company">FAST WAY LOGISTIC SAS BIC</span>
          <h1>Directorio comercial</h1>
          <p>Elige a tu asesor y conversemos.</p>
        </header>
        <section aria-label="Dirección general">
          <ContactCard person={ceo} />
        </section>
        <section className="fwd-advisors" aria-label="Asesores comerciales">
          <h2 className="fwd-section-label">EQUIPO COMERCIAL</h2>
          <div className="fwd-advisors-grid">
            {advisors.map((person) => (
              <ContactCard key={person.id} person={person} />
            ))}
          </div>
        </section>
        <Brochures />
        <footer className="fwd-footer">
          <nav aria-label="Plataformas Fastway">
            <a
              href={fastwayLinks.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe2 size={13} />
              Sitio web
              <ArrowUpRight size={11} />
            </a>
            <a
              href={fastwayLinks.clients}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Package size={13} />
              Clientes
              <ArrowUpRight size={11} />
            </a>
            <a
              href={fastwayLinks.academy}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={14} />
              Academia
              <ArrowUpRight size={11} />
            </a>
          </nav>
          <a
            className="fwd-genika"
            href="https://genika.appfastway.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Directorio digital por</span>
            <img src="/Genika.webp" alt="Genika" width="50" height="25" />
          </a>
          <button
            className="fwd-motion-toggle"
            onClick={() => setMotionPaused(!motionPaused)}
            aria-pressed={motionPaused}
            aria-label={
              motionPaused ? 'Activar animaciones' : 'Pausar animaciones'
            }
          >
            {motionPaused ? <Play size={12} /> : <Pause size={12} />}
            <span>
              {motionPaused ? 'Activar movimiento' : 'Pausar movimiento'}
            </span>
          </button>
        </footer>
      </div>
    </main>
  )
}
