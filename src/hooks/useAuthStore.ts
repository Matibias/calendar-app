import { calendarApi } from '@/api'
import { useAppDispatch, useAppSelector } from '.'
import { onChecking, onLogin, onLogout } from '@/store'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const startLogin = async ({ email, password }: { email: string, password: string }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime().toString())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales Incorrectas'))
    }
  }

  return {
    // Properties
    status,
    user,
    errorMessage,
    // Methods
    startLogin

  }
}
