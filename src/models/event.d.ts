export interface Event {
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
