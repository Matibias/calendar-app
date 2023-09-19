import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '@/store'
import { useAppDispatch, useAppSelector } from './storeHooks'

export const useCalendarStore = () => {
  const dispatch = useAppDispatch()
  const { events, activeEvent } = useAppSelector(state => state.calendar)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    // TODO bien
    if (calendarEvent._id) {
      // actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      // creando
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
  }

  const startDeletingEvent = (): void => {
    dispatch(onDeleteEvent())
  }

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
