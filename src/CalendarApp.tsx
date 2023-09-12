import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'

export const CalendarApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
