import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Profile {
  firstName: string
  lastName: string
  nickName: string
  gender: string
  dateOfBirth: string
  profilePicture: string | null
}

interface Contact {
  email: string
  mobilePhone: string
}

interface Role {
  role_id: number
  name: string
}

interface Permission {
  permission_id: number
  name_en: string
}

interface UserDetails {
  userId: string
  username: string
  userStatus: string
  profile: Profile
  contact: Contact
  role: Role
  permissions: Permission[]
}

const initialUserDetails: UserDetails = {
  userId: '',
  username: '',
  userStatus: '',
  profile: {
    firstName: '',
    lastName: '',
    nickName: '',
    gender: '',
    dateOfBirth: '',
    profilePicture: null,
  },
  contact: {
    email: '',
    mobilePhone: '',
  },
  role: {
    role_id: 0,
    name: '',
  },
  permissions: [],
}

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: initialUserDetails,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      return action.payload
    },
    updateUserProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      state.profile = { ...state.profile, ...action.payload }
    },
    updateUserContact: (state, action: PayloadAction<Partial<Contact>>) => {
      state.contact = { ...state.contact, ...action.payload }
    },
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload
    },
    setPermissions: (state, action: PayloadAction<Permission[]>) => {
      state.permissions = action.payload
    },
    clearUserDetails: () => {
      return initialUserDetails
    },
  },
})

export const {
  setUserDetails,
  updateUserProfile,
  updateUserContact,
  setRole,
  setPermissions,
  clearUserDetails,
} = userDetailsSlice.actions
export default userDetailsSlice.reducer
