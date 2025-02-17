import { LoginT } from '@/types/player'

export type RoomT = {
  id: string
  name: string
  password: string
  players: string[]
  banker: string
}

export type CreateRoomT = LoginT & { playerId: string }
