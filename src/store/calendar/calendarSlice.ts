import { emptyCalendar } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: emptyCalendar,
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload
    },
    onAddNewEvent: (state, action) => {
      state.events.push(action.payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map(event => {
        if (event._id === action.payload._id) {
          return action.payload
        }
        return event
      })
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent !== null) {
        state.events = state.events.filter(event => event._id !== state.activeEvent._id)
        state.activeEvent = null
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions

export default calendarSlice.reducer
