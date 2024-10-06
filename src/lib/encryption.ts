export async function encryptData(data: string, key: CryptoKey): Promise<string> {
  const encodedData = new TextEncoder().encode(data)
  const iv = crypto.getRandomValues(new Uint8Array(12))

  const encryptedData = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    encodedData
  )

  const mergedArray = new Uint8Array(iv.byteLength + encryptedData.byteLength)
  mergedArray.set(iv, 0)
  mergedArray.set(new Uint8Array(encryptedData), iv.byteLength)

  return btoa(String.fromCharCode(...mergedArray))
}

export async function decryptData(encryptedData: string, key: CryptoKey): Promise<string> {
  const data = Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0))
  const iv = data.slice(0, 12)
  const encrypted = data.slice(12)

  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    encrypted
  )

  return new TextDecoder().decode(decryptedData)
}

export async function generateKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder().encode(secret)

  let keyBytes
  if (enc.length >= 32) {
    keyBytes = enc.slice(0, 32)
  } else if (enc.length >= 16) {
    keyBytes = enc.slice(0, 16)
  } else {
    keyBytes = new Uint8Array(16)
    keyBytes.set(enc)
  }

  return await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['encrypt', 'decrypt'])
}
