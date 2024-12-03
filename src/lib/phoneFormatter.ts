// lib/phoneFormatter.ts

/**
 * Format a phone number into the format 086-543-4354.
 * @param phoneNumber - A string of digits representing the phone number.
 * @returns A formatted phone number string.
 */
export function formatPhoneNumber(phoneNumber: string): string {
  const phonePattern = /(\d{3})(\d{3})(\d{4})/
  return phoneNumber ? phoneNumber.replace(phonePattern, '$1-$2-$3') : '-'
}
