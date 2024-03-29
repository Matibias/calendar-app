import { Calendar, type EventPropGetter } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../'
import { getMessagesES, localizer } from '@/helpers'
import { type Event } from '@/models'
import { useState } from 'react'
import { useUiStore, useCalendarStore } from '@/hooks'

export const CalendarPage = (): JSX.Element => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const eventStyleGetter: EventPropGetter<Event> = (event, start, end, isSelected) => {
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

  const onDoubleClick = (event) => {
    openDateModal()
  }

  const onSelect = (event) => {
    // console.log({ click: event })
    setActiveEvent(event)
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />

      <Calendar
      culture="es"
      localizer={localizer}
      defaultView={ lastView }
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />

    </>
  )
}
