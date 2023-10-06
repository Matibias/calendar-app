import { LoginPage } from '@/auth'
import { CalendarPage } from '@/calendar'
import { useAuthStore } from '@/hooks'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

export const AppRouter = (): JSX.Element => {
  // const authStatus = 'not-authenticated'
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return <h1>Cargando...</h1>
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? <Route path='/auth/*' element={<LoginPage />}/>
          : <Route path='/*' element={<CalendarPage />}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login' />}/>
    </Routes>
  )
}
