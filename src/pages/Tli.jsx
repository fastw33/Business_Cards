import { useCallback, useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Download, FileText, Globe2, Mail, MapPin, Pause, Phone, Plane, Play } from 'lucide-react'
import { WhatsappLogo } from 'phosphor-react'
import { tliLinks, tliPeople, tliWhatsapp } from './tli.data'
import { tliBrochures } from './tli.brochures'
import './tli.css'

function Brand() {
  return <img className="tli-brand" src="/tli/logo.webp" alt="Transport Logistic International" width="3156" height="1264" />
}

function Entrance({ onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 2100)
    return () => window.clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="tli-entrance" aria-label="Welcome to TLI Miami">
      <div className="tli-flight-scene" aria-hidden="true">
        <svg className="tli-flight-route" viewBox="0 0 360 180" fill="none">
          <path className="tli-flight-guide" d="M20 150C85 150 60 35 165 55S250 145 340 25" />
          <path className="tli-flight-trace" pathLength="1" d="M20 150C85 150 60 35 165 55S250 145 340 25" />
          <circle cx="20" cy="150" r="5" /><circle cx="340" cy="25" r="5" />
        </svg>
        <span className="tli-flight-plane"><Plane size={25} strokeWidth={1.6} /></span>
        <span className="tli-flight-origin">MIA</span>
      </div>
      <div className="tli-entrance-brand"><Brand /><span>GOOD CONNECTIONS. GREAT POSSIBILITIES.</span></div>
      <button className="tli-skip" onClick={onFinish}>Skip to contacts <ArrowRight size={14} aria-hidden="true" /></button>
    </div>
  )
}

function ContactCard({ person, index }) {
  return (
    <article id={`tli-${person.id}`} className="tli-card" aria-labelledby={`tli-name-${person.id}`} style={{ '--tli-order': index }}>
      <div className="tli-card-top"><span>{person.role}</span><img src="/tli/logo.webp" alt="TLI Miami" width="3156" height="1264" /></div>
      <div className="tli-person">
        <h3 id={`tli-name-${person.id}`}>{person.name}</h3>
        <a className="tli-phone" href={`tel:+${person.number}`} aria-label={`Call ${person.name} at ${person.phone}`}>{person.phone}</a>
      </div>
      <div className="tli-actions">
        <a className="tli-whatsapp" href={tliWhatsapp(person)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${person.name} (opens in a new tab)`}>
          <WhatsappLogo size={18} weight="fill" aria-hidden="true" /><span>WhatsApp</span><ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a className="tli-email" href={`mailto:${person.emails[0]}`} aria-label={`Email ${person.name} at ${person.emails[0]}`}><Mail size={16} aria-hidden="true" /><span>Email</span></a>
        <a className="tli-call" href={`tel:+${person.number}`} aria-label={`Call ${person.name}`}><Phone size={16} aria-hidden="true" /></a>
      </div>
      {person.emails.length > 1 && <a className="tli-alternate-email" href={`mailto:${person.emails[1]}`} aria-label={`Alternative email for ${person.name}: ${person.emails[1]}`}>Alternative email <ArrowUpRight size={11} aria-hidden="true" /></a>}
    </article>
  )
}

function Brochures() {
  if (!tliBrochures.length) return null
  return (
    <section className="tli-brochures" aria-labelledby="tli-brochures-title">
      <h2 id="tli-brochures-title" className="tli-section-label">BROCHURES & RESOURCES</h2>
      {tliBrochures.map((brochure) => <div className="tli-brochure" key={brochure.id}>
        <a href={brochure.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${brochure.title} PDF (opens in a new tab)`}>
          {brochure.cover ? <img src={brochure.cover} width="40" height="52" alt="" loading="lazy" /> : <FileText size={24} aria-hidden="true" />}
          <span><strong>{brochure.title}</strong><small>PDF document</small></span><ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <a className="tli-download" href={brochure.url} download={brochure.filename} aria-label={`Download ${brochure.title}`}><Download size={18} aria-hidden="true" /></a>
      </div>)}
    </section>
  )
}

export default function TliPage() {
  const [intro, setIntro] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [motionPaused, setMotionPaused] = useState(false)
  const finishIntro = useCallback(() => setIntro(false), [])

  useEffect(() => {
    const previousTitle = document.title
    const previousLang = document.documentElement.lang
    document.title = 'TLI Miami | Team directory'
    document.documentElement.lang = 'en'
    document.body.classList.add('tli-directory')
    const meta = {
      'meta[name="description"]': 'Connect directly with the TLI Miami team. WhatsApp, email and phone contacts for sales, office management, traffic and operations.',
      'meta[name="theme-color"]': '#f0f3f0',
      'meta[property="og:title"]': 'TLI Miami | Team directory',
      'meta[property="og:description"]': 'Your direct connection to the TLI Miami team.',
      'meta[property="og:site_name"]': 'TLI Miami',
    }
    const previous = Object.entries(meta).map(([selector, content]) => {
      const element = document.querySelector(selector)
      const value = element?.getAttribute('content')
      element?.setAttribute('content', content)
      return { element, value }
    })
    const icon = document.querySelector('link[rel="icon"]')
    const iconHref = icon?.getAttribute('href')
    const iconType = icon?.getAttribute('type')
    icon?.setAttribute('href', '/tli/favicon.png')
    icon?.setAttribute('type', 'image/png')
    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLang
      document.body.classList.remove('tli-directory')
      previous.forEach(({ element, value }) => {
        if (value == null) element?.removeAttribute('content')
        else element?.setAttribute('content', value)
      })
      if (iconHref != null) icon?.setAttribute('href', iconHref)
      else icon?.removeAttribute('href')
      if (iconType != null) icon?.setAttribute('type', iconType)
      else icon?.removeAttribute('type')
    }
  }, [])

  useEffect(() => {
    if (!intro) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [intro])

  useEffect(() => {
    if (intro) return
    const profile = new URLSearchParams(window.location.search).get('profile')
    if (tliPeople.some((person) => person.id === profile)) {
      document.getElementById(`tli-${profile}`)?.scrollIntoView({ block: 'center' })
    }
  }, [intro])

  return (
    <main className={`tli-page ${intro ? '' : 'tli-ready'} ${motionPaused ? 'tli-motion-paused' : ''}`}>
      {intro && <Entrance onFinish={finishIntro} />}
      <div className="tli-shell" inert={intro}>
        <header className="tli-header">
          <div className="tli-header-top">
            <Brand />
            <span className="tli-location"><MapPin size={12} aria-hidden="true" />MIAMI, FLORIDA</span>
          </div>
          <div className="tli-header-copy">
            <span className="tli-eyebrow">REAL PEOPLE. DIRECT CONNECTIONS.</span>
            <h1>Your team.<br /><span>One connection.</span></h1>
            <p>Choose your contact. We’ll take it from here.</p>
            <svg className="tli-header-route" viewBox="0 0 190 120" fill="none" aria-hidden="true"><path d="M8 105C45 105 20 17 88 30S138 100 180 12" /><circle cx="8" cy="105" r="4" /><circle cx="180" cy="12" r="4" /></svg>
          </div>
        </header>
        <section aria-labelledby="tli-team-title">
          <div className="tli-team-label"><h2 id="tli-team-title" className="tli-section-label">CONTACT DIRECTORY</h2><span>{String(tliPeople.length).padStart(2, '0')} CONTACTS <ArrowRight size={12} aria-hidden="true" /></span></div>
          <div className="tli-team-grid">{tliPeople.map((person, index) => <ContactCard key={person.id} person={person} index={index} />)}</div>
        </section>
        <Brochures />
        <footer className="tli-footer">
          <nav aria-label="TLI Miami links">
            <a href={tliLinks.website} target="_blank" rel="noopener noreferrer"><Globe2 size={14} aria-hidden="true" />Visit our website<ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={tliLinks.map} target="_blank" rel="noopener noreferrer"><MapPin size={14} aria-hidden="true" />Get directions<ArrowUpRight size={12} aria-hidden="true" /></a>
          </nav>
          <p>10049 NW 89th Ave, Unit 4 · Medley, FL 33178</p>
          <a className="tli-genika" href="https://genika.appfastway.com/" target="_blank" rel="noopener noreferrer"><span>Digital directory by</span><img src="/Genika.webp" alt="Genika" width="44" height="22" /></a>
          <button className="tli-motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused}>
            {motionPaused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}{motionPaused ? 'Enable motion' : 'Pause motion'}
          </button>
        </footer>
      </div>
    </main>
  )
}
