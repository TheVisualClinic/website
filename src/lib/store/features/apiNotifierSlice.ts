import { createSlice } from '@reduxjs/toolkit'

interface ApiNotifierState {
  inviteMember: boolean
}

const initialState: ApiNotifierState = {
  inviteMember: false,
}

const apiNotifierSlice = createSlice({
  name: 'apiNotifier',
  initialState,
  reducers: {
    notifyInviteSuccess: (state) => {
      state.inviteMember = true
    },
    resetInviteNotification: (state) => {
      state.inviteMember = false
    },
  },
})

export const { notifyInviteSuccess, resetInviteNotification } = apiNotifierSlice.actions

export default apiNotifierSlice.reducer
