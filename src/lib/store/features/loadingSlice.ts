import { createSlice } from '@reduxjs/toolkit'

interface PageLoadingState {
  value: boolean
}

const initialState: PageLoadingState = {
  value: true,
}

const pageLoadingSlice = createSlice({
  name: 'page-loading',
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.value = true
    },
    loadingStop: (state) => {
      state.value = false
    },
  },
})

export const { loadingStart, loadingStop } = pageLoadingSlice.actions
export default pageLoadingSlice.reducer
