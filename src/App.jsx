import React from 'react'
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import CardsPage from './pages/Cards'
import AsesoresPage from './pages/Asesores'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeRoute />} />
      <Route path='/cards/:slug' element={<CardsPage />} />
      <Route path='/asesores' element={<AsesoresPage />} />
      <Route
        path='/asesores-greenway'
        element={<AsesoresPage variante='greenway' />}
      />
      <Route
        path='/asesorias-greenway'
        element={<AsesoresPage variante='greenway' />}
      />
      <Route
        path='*'
        element={<NotFoundRoute />}
      />
    </Routes>
  )
}

function HomeRoute() {
  const location = useLocation()

  if (location.hash === '#/asesores#greemway') {
    return <AsesoresPage variante='greenway' />
  }

  if (location.hash === '#asesores-greenway') {
    return <Navigate to='/asesorias-greenway' replace />
  }

  return <CardsPage />
}

function NotFoundRoute() {
  const location = useLocation()

  if (location.hash === '#/asesores#greemway') {
    return <AsesoresPage variante='greenway' />
  }

  return (
    <div className='p-6'>
      <p>
        Ruta no encontrada. Volver al{' '}
        <Link to='/' className='underline'>
          inicio
        </Link>
        .
      </p>
    </div>
  )
}
