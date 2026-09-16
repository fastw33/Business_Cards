import React from 'react'
import { EnvelopeSimple, GlobeHemisphereWest, WhatsappLogo } from 'phosphor-react'
import { buildMailtoLink } from '../utils/links'
import './asesores.css'

const asesores = {
  paolaGarzon: {
    nombre: 'Paola Garzon',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar2.webp',
    whatsapp: '573182123378',
    email: 'gsanchez@greenwayinter.com',
  },
  cristinaAvendano: {
    nombre: 'Cristina Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar2.webp',
    whatsapp: '17864236363',
  },
  juanAvendano: {
    nombre: 'Juan Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar1.webp',
    whatsapp: '17862165515',
  },
  giancarloAvendano: {
    nombre: 'Giancarlo Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/Gian.webp',
    whatsapp: '17866610046',
    email: 'gc@greenwayinter.com',
  },
  carollHuertas: {
    nombre: 'Caroll Mishel Huertas Rojas',
    cargo: 'Líder de Calidad',
    foto: '/Caroll.png',
    whatsapp: '573504586346',
  },
  andresBarrera: {
    nombre: 'Andres Felipe Barrera Rodriguez',
    cargo: 'Representación en Colombia',
    foto: '/AndresBarrera.png',
    whatsapp: '573028583784',
    alias: 'Felipe',
  },
  omarMelo: {
    nombre: 'Omar Melo',
    cargo: 'Representación en Colombia',
    foto: '/omar.webp',
    whatsapp: '573134292250',
  },
  karenGonzalez: {
    nombre: 'Karen Gonzalez',
    cargo: 'Representación en Colombia',
    foto: '/karen.png',
    whatsapp: '573143002760',
    email: 'insales@greenwayinter.com',
  },
  claudiaMorales: {
    nombre: 'Claudia Morales',
    cargo: 'Representación en Colombia',
    foto: '/claudia.webp',
    whatsapp: '573107811985',
  },
}

const asesoresEstadosUnidosLatam = [
  asesores.paolaGarzon,
  asesores.cristinaAvendano,
  asesores.juanAvendano,
  asesores.giancarloAvendano,
]

const asesoresColombia = [
  asesores.andresBarrera,
  asesores.omarMelo,
  asesores.karenGonzalez,
]

const seccionesAsesoresHarvest = [
  {
    titulo: 'Representación en Estados Unidos y Latinoamérica',
    asesores: asesoresEstadosUnidosLatam,
  },
  {
    titulo: 'Representación en Colombia',
    asesores: asesoresColombia,
  },
]

const seccionesAsesoresGreenway = [
  {
    titulo: 'Advisors',
    asesores: [
      {
        ...asesores.karenGonzalez,
        foto: '/karen-greenway.jpg',
      },
      {
        ...asesores.paolaGarzon,
        foto: '/paola-greenway.jpg',
      },
      {
        ...asesores.giancarloAvendano,
        foto: '/giancarlo-greenway.webp',
      },
    ],
  },
]

const paginasAsesores = {
  harvest: {
    clase: 'asesores-page--harvest',
    logo: '/Harvest.webp',
    marca: 'Harvest',
    titulo: 'Selecciona a tu asesor',
    descripcion: 'Haz click en una tarjeta para abrir WhatsApp.',
    sitio: 'https://metalharvest.io',
    secciones: seccionesAsesoresHarvest,
  },
  greenway: {
    clase: 'asesores-page--greenway',
    logo: '/Green.png',
    logoVideo: '/greenway-logo-animation.mp4',
    logoFinal: '/greenway-logo-static.webp',
    marca: 'Green Way International',
    titulo: 'Green Way International Advisors',
    subtitulo: 'Asesores internacionales',
    descripcion:
      'Contacta por WhatsApp / Contact via WhatsApp',
    sitio: 'https://www.greenwayinter.com',
    sitioTexto: 'www.greenwayinter.com',
    secciones: seccionesAsesoresGreenway,
  },
}

function obtenerNombreMensaje(asesor) {
  if (asesor.alias) return asesor.alias
  const [nombre] = asesor.nombre.split(' ')
  return nombre
}

function crearMensaje(asesor, sitio) {
  const nombreMensaje = obtenerNombreMensaje(asesor)
  return `Hola ${nombreMensaje}, escanee tu tarjeta con QR y me interesa algun negocio con tu empresa ${sitio}`
}

function crearUrlWhatsApp(telefono, mensaje) {
  if (!telefono) return ''

  const mensajeCodificado = encodeURIComponent(mensaje)
  return `https://wa.me/${telefono}?text=${mensajeCodificado}`
}

function abrirCorreo(event, emailUrl) {
  event.preventDefault()
  window.location.href = emailUrl
}

function AsesorContenido({ asesor, whatsappUrl, enlazarWhatsapp = true }) {
  const emailUrl = asesor.email ? buildMailtoLink(asesor.email) : ''

  return (
    <>
      {asesor.foto && (
        <div className='asesor-avatar-wrap'>
          <img
            src={asesor.foto}
            alt={asesor.nombre}
            className='asesor-avatar'
            loading='lazy'
          />
          <span className='asesor-avatar-ring asesor-avatar-ring--one' />
          <span className='asesor-avatar-ring asesor-avatar-ring--two' />
        </div>
      )}
      <div className='asesor-content'>
        <h2>{asesor.nombre}</h2>
        <p>{asesor.cargo}</p>
        <div className='asesor-actions'>
          {whatsappUrl && enlazarWhatsapp && (
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noreferrer'
              className='asesor-action asesor-action--whatsapp'
              aria-label={`Contactar a ${asesor.nombre} por WhatsApp`}
            >
              <WhatsappLogo
                className='asesor-whatsapp-icon'
                weight='fill'
                aria-hidden='true'
              />
              Abrir WhatsApp
            </a>
          )}
          {whatsappUrl && !enlazarWhatsapp && (
            <span className='asesor-action asesor-action--whatsapp'>
              <WhatsappLogo
                className='asesor-whatsapp-icon'
                weight='fill'
                aria-hidden='true'
              />
              Abrir WhatsApp
            </span>
          )}
          {emailUrl && (
            <a
              href={emailUrl}
              onClick={(event) => abrirCorreo(event, emailUrl)}
              className='asesor-action asesor-action--email'
              aria-label={`Enviar correo a ${asesor.nombre}`}
            >
              <EnvelopeSimple
                className='asesor-email-icon'
                weight='bold'
                aria-hidden='true'
              />
              <span>
                <strong>Enviar correo</strong>
                {asesor.email}
              </span>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default function AsesoresPage({ variante = 'harvest' }) {
  const pagina = paginasAsesores[variante] || paginasAsesores.harvest
  const [logoVideoFinalizado, setLogoVideoFinalizado] = React.useState(false)

  return (
    <main className={`asesores-page ${pagina.clase}`}>
      <div className='asesores-shell'>
        <header className='asesores-header' data-aos='fade-down'>
          <div className='asesores-brand'>
            {pagina.logoVideo && !logoVideoFinalizado ? (
              <video
                src={pagina.logoVideo}
                className='asesores-logo asesores-logo-video'
                autoPlay
                muted
                playsInline
                preload='auto'
                onEnded={() => setLogoVideoFinalizado(true)}
                onError={() => setLogoVideoFinalizado(true)}
                aria-label={pagina.marca}
              />
            ) : (
              <img
                src={pagina.logoFinal || pagina.logo}
                alt={pagina.marca}
                className='asesores-logo'
              />
            )}
            <p className='asesores-pill'>{pagina.marca}</p>
          </div>
          <h1>{pagina.titulo}</h1>
          {pagina.subtitulo && <strong>{pagina.subtitulo}</strong>}
          <p>{pagina.descripcion}</p>
          {pagina.sitioTexto && (
            <a
              href={pagina.sitio}
              target='_blank'
              rel='noreferrer'
              className='asesores-site-link'
            >
              <GlobeHemisphereWest
                className='asesores-site-icon'
                weight='bold'
                aria-hidden='true'
              />
              {pagina.sitioTexto}
            </a>
          )}
        </header>

        {pagina.secciones.map((seccion, seccionIndex) => (
          <section className='asesores-section' key={seccion.titulo}>
            <h2 className='asesores-section-title'>{seccion.titulo}</h2>

            <div className='asesores-grid'>
              {seccion.asesores.map((asesor, index) => {
                const mensaje = crearMensaje(asesor, pagina.sitio)
                const url = crearUrlWhatsApp(asesor.whatsapp, mensaje)
                const delay = (seccionIndex * 4 + index) * 80

                if (asesor.email) {
                  return (
                    <article
                      key={`${asesor.whatsapp || asesor.nombre}-${index}`}
                      className='asesor-card'
                      data-aos='fade-up'
                      data-aos-delay={delay}
                    >
                      <AsesorContenido asesor={asesor} whatsappUrl={url} />
                    </article>
                  )
                }

                return (
                  <a
                    key={`${asesor.whatsapp || asesor.nombre}-${index}`}
                    href={url || undefined}
                    target='_blank'
                    rel='noreferrer'
                    className='asesor-card'
                    aria-label={`Contactar a ${asesor.nombre} por WhatsApp`}
                    data-aos='fade-up'
                    data-aos-delay={delay}
                  >
                    <AsesorContenido
                      asesor={asesor}
                      whatsappUrl={url}
                      enlazarWhatsapp={false}
                    />
                  </a>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
