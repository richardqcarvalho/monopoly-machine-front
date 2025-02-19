import { CreateRoomReturnT, CreateRoomT, GetRoomT, RoomT } from '@/types/room'

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

  const data: CreateRoomReturnT = await response.json()

  return data
}

export const getRooms = async () => {
  const response = await fetch(`${VITE_API_HOST}/rooms`)

  if (response.status !== 200) return []

  const rooms = await response.json()

  return rooms
}

export const getRoom = async ({ roomId }: GetRoomT) => {
  if (!roomId) return

  const response = await fetch(`${VITE_API_HOST}/room/${roomId}`)

  if (response.status !== 200) return

  const room: RoomT = await response.json()

  return room
}
