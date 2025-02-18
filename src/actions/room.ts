import { CreateRoomT } from '@/types/room'

const { VITE_API_HOST } = import.meta.env

export const createRoom = async ({ name, password, playerId }: CreateRoomT) => {
  const response = await fetch(`${VITE_API_HOST}/room/${playerId}`, {
    method: 'POST',
    body: JSON.stringify({ name, ...(password && { password }) }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status !== 200) return

  const { id } = await response.json()

  return id
}

export const getRooms = async () => {
  const response = await fetch(`${VITE_API_HOST}/rooms`, {
    method: 'GET',
  })

  if (response.status !== 200) return []

  const rooms = await response.json()

  return rooms
}
