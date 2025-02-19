import { api } from '@/lib/api'
import { LoginT } from '@/types/player'
import { EntityT } from '@/types/shared'

export const createAccount = async ({ name, password }: LoginT) =>
  api.post('/player', {
    name,
    password,
  })

export const login = async ({ name, password }: LoginT) => {
  const { data } = await api.post<EntityT>('/login', {
    name,
    password,
  })

  return data
}
