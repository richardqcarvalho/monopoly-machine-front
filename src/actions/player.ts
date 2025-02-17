import { LoginT } from '@/types/player'

const { VITE_API_HOST } = import.meta.env

export const createAccount = async ({ name, password }: LoginT) =>
  await fetch(`${VITE_API_HOST}/player`, {
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const login = async ({ name, password }: LoginT) => {
  const response = await fetch(`${VITE_API_HOST}/login`, {
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status !== 200) return

  const { id } = await response.json()

  return id
}
