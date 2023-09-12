import { Calendar, type EventPropGetter } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { Navbar } from '../'
import { getMessagesES, localizer } from '@/helpers'
import { type Event } from '@/models'

const events: Event[] = [{
  title: 'Conmemoración de los 50 años del golpe de estado',
  notes: 'Notes',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Matias'
  }
}]

export const CalendarPage = (): JSX.Element => {
  const eventStyleGetter: EventPropGetter<Event> = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      display: 'block'
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
      culture="es"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
    />

    </>
  )
}
