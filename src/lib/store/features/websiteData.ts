import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactData {
  phone_number: string
  email: string
}

interface SocialData {
  social_facebook_label: string
  social_facebook_link: string
  social_instagram_label: string
  social_instagram_link: string
  social_tiktok_label: string
  social_tiktok_link: string
  social_line_label: string
  social_line_link: string
}

interface WebsiteDataState {
  contactData: ContactData
  socialData: SocialData
}

const initialState: WebsiteDataState = {
  contactData: {
    phone_number: '',
    email: '',
  },
  socialData: {
    social_facebook_label: '',
    social_facebook_link: '',
    social_instagram_label: '',
    social_instagram_link: '',
    social_tiktok_label: '',
    social_tiktok_link: '',
    social_line_label: '',
    social_line_link: '',
  },
}

const pageLoadingSlice = createSlice({
  name: 'page-loading',
  initialState,
  reducers: {
    setContactData(state, action: PayloadAction<ContactData>) {
      state.contactData = action.payload
    },
    updateContactField(state, action: PayloadAction<{ field: keyof ContactData; value: string }>) {
      const { field, value } = action.payload
      state.contactData[field] = value
    },
    setSocialData(state, action: PayloadAction<SocialData>) {
      state.socialData = action.payload
    },
    updateSocialField(state, action: PayloadAction<{ field: keyof SocialData; value: string }>) {
      const { field, value } = action.payload
      state.socialData[field] = value
    },
    resetWebsiteData(state) {
      state.contactData = initialState.contactData
      state.socialData = initialState.socialData
    },
  },
})

export const {
  setContactData,
  updateContactField,
  setSocialData,
  updateSocialField,
  resetWebsiteData,
} = pageLoadingSlice.actions
export default pageLoadingSlice.reducer
