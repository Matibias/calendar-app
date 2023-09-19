import { addHours } from 'date-fns'

export interface Event {
  _id: number
  title: string
  notes: string
  start: Date
  end: Date
  bgColor: string
  user: User
}

interface User {
  _id: string
  name: string
}

const emptyEvent: Event[] = [
  {
    _id: new Date().getTime(),
    title: 'Conmemoración de los 50 años del golpe de estado',
    notes: 'Notes',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Matias'
    }
  }
]

export const emptyCalendar = {
  events: emptyEvent,
  activeEvent: null
}
