import { getRoom } from '@/actions/room'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

export const Room = () => {
  const { roomId } = useParams()
  const { isPending, data } = useQuery({
    queryKey: ['get-room'],
    queryFn: async () => {
      const room = await getRoom({ roomId })

      return room
    },
  })

  return (
    <div>{isPending ? <span>Loading...</span> : <span>{data?.name}</span>}</div>
  )
}
