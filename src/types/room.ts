import { LoginT, PlayerT } from '@/types/player'
import { EntityT } from '@/types/shared'

export type RoomT = {
  name: string
  banker: string
  players: PlayerT[]
}

export type CreateRoomReturnT = {
  roomId: string
  rooms: EntityT[]
}

export type CreateRoomT = LoginT & { playerId: string }

export type GetRoomT = { roomId?: string }
