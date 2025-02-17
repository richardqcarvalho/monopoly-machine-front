import { LoginT } from '@/types/player'

export const createAccount = async ({ name, password }: LoginT) =>
  await fetch('http://localhost:4000/player', {
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const login = async ({ name, password }: LoginT) => {
  const response = await fetch('http://localhost:4000/login', {
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
