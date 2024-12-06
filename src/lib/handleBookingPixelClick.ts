import ReactPixel from 'react-facebook-pixel'

export const handleBookingPixelClick = (location: string) => {
  if (typeof window === 'undefined') return

  const actionData = {
    buttonName: 'BOOKING',
    actionType: 'redirectToLINE',
    targetURL: 'https://lin.ee/CyHa9b3',
    pageLocation: location || 'Default Section',
    deviceType: detectDeviceType(),
  }
  ReactPixel.trackCustom('ButtonClicked', actionData)
}

const detectDeviceType = (): string => {
  if (typeof navigator === 'undefined') return 'unknown'
  const userAgent = navigator.userAgent.toLowerCase()

  if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
    return 'mobile'
  }

  if (/tablet/.test(userAgent)) {
    return 'tablet'
  }

  return 'desktop'
}
