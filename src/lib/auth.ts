import { decryptData, encryptData, generateKey } from '@/lib/encryption'

/**
 * Get the access token from local storage and decrypt it using the client key.
 * @returns The decrypted access token as a string.
 * @throws An error if the client key is not defined or the token is not found.
 */
export const getAccessToken = async (): Promise<string> => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    return 'fail'
  }

  const secretKey = process.env.NEXT_PUBLIC_CLIENT_KEY
  if (!secretKey) {
    throw new Error('CLIENT_KEY is not defined in the environment variables')
  }

  const key = await generateKey(secretKey)
  return await decryptData(accessToken, key)
}

/**
 * Save the encrypted access token to local storage.
 * @param accessToken - The plain text access token to be encrypted and saved.
 */
export const saveAccessToken = async (accessToken: string): Promise<void> => {
  const secretKey = process.env.NEXT_PUBLIC_CLIENT_KEY
  if (!secretKey) {
    throw new Error('CLIENT_KEY is not defined in the environment variables')
  }

  const key = await generateKey(secretKey)
  const encryptedToken = await encryptData(accessToken, key)

  localStorage.setItem('accessToken', encryptedToken)
}

/**
 * Get the refresh token from local storage and decrypt it using the client key.
 * @returns The decrypted refresh token as a string.
 * @throws An error if the client key is not defined or the token is not found.
 */
export const getRefreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (!refreshToken) {
    return 'fail'
  }

  const secretKey = process.env.NEXT_PUBLIC_CLIENT_KEY
  if (!secretKey) {
    throw new Error('CLIENT_KEY is not defined in the environment variables')
  }

  const key = await generateKey(secretKey)
  return await decryptData(refreshToken, key)
}

/**
 * Save the encrypted refresh token to local storage.
 * @param refreshToken - The plain text refresh token to be encrypted and saved.
 */
export const saveRefreshToken = async (refreshToken: string): Promise<void> => {
  const secretKey = process.env.NEXT_PUBLIC_CLIENT_KEY
  if (!secretKey) {
    throw new Error('CLIENT_KEY is not defined in the environment variables')
  }

  const key = await generateKey(secretKey)
  const encryptedToken = await encryptData(refreshToken, key)

  localStorage.setItem('refreshToken', encryptedToken)
}

/**
 * Remove both the access token and refresh token from local storage.
 */
export const clearTokens = (): void => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
