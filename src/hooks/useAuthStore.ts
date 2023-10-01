import { calendarApi } from '@/api'
import { useAppDispatch, useAppSelector } from '.'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const startLogin = async ({ email, password }: { email: string, password: string }) => {
    console.log({ email, password })
    try {
      const resp = await calendarApi.post('/auth', { email, password })
      console.log(resp)
    } catch (error) {
      console.log(error)
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
