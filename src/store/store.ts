import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui/uiSlice'
import calendarSlice from './calendar/calendarSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    ui: uiSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
