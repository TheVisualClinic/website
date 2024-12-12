export const handleBookingPixelClick = async (location: string) => {
  if (typeof window === 'undefined') return

  try {
    const ReactPixel = (await import('react-facebook-pixel')).default
    const actionData = {
      buttonName: 'BOOKING',
      actionType: 'redirectToLINE',
      targetURL: 'https://lin.ee/CyHa9b3',
      pageLocation: location || 'Default Section',
      deviceType: detectDeviceType(),
    }

    ReactPixel.trackCustom('ButtonClicked', actionData)
  } catch (error) {
    console.error('Error in handleBookingPixelClick:', error)
  }
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
