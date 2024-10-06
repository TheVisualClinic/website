import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './features/loadingSlice'
import myUserSlice from './features/myUserSlice'
import apiNotifierSlice from './features/apiNotifierSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      myUser: myUserSlice,
      loading: loadingReducer,
      apiNotifier: apiNotifierSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
