import { LoginPage } from '@/auth'
import { CalendarPage } from '@/calendar'
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRouter = (): JSX.Element => {
  const authStatus = 'authenticated'

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path='/auth/*' element={<LoginPage />}/>
          : <Route path='/*' element={<CalendarPage />}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login' />}/>
    </Routes>
  )
}
