import { configureStore } from '@reduxjs/toolkit'
import websiteReducer from './features/websiteData'

export const makeStore = () => {
  return configureStore({
    reducer: {
      websiteData: websiteReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
