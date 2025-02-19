import { api } from '@/lib/api'
import { CreateRoomReturnT, CreateRoomT, GetRoomT, RoomT } from '@/types/room'
import { EntityT } from '@/types/shared'

export const createRoom = async ({ name, password, playerId }: CreateRoomT) => {
  const { data } = await api.post<CreateRoomReturnT>(`/room/${playerId}`, {
    name,
    ...(password && { password }),
  })

  return data
}

export const getRooms = async () => {
  const { data } = await api.get<EntityT[]>('/rooms')

  return data
}

export const getRoom = async ({ roomId }: GetRoomT) => {
  const { data } = await api.get<RoomT>(`/room/${roomId}`)

  return data
}
