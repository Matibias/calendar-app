import { calendarApi } from '@/api'
import { useAppDispatch, useAppSelector } from '.'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '@/store'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const startLogin = async ({ email, password }: { email: string, password: string }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales Incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    console.log('Esto llega', { name, email, password })
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('auth/new', { name, email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      console.log({ error })
      dispatch(onLogout(error.response.data?.msg))
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    // const tokenDate = new Date(parseInt(tokenInitDate))
    // const now = new Date()
    // now.setHours(now.getHours() + 1)

    // if (now > tokenDate) {
    //   dispatch(onLogout('Token expirado'))
    //   return
    // }

    try {
      const { data } = await calendarApi.get('/auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  return {
    // Properties
    status,
    user,
    errorMessage,
    // Methods
    startLogin,
    startRegister,
    checkAuthToken

  }
}
