import { getRooms } from '@/actions/room'
import { CreateRoom } from '@/components/create-room'
import { RoomsTable } from '@/components/rooms-table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()
  const { data: rooms } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: getRooms,
    initialData: [],
  })
  const logout = () => {
    localStorage.removeItem('playerId')

    navigate('/login')
  }

  return (
    <Card className='w-80'>
      <CardHeader className='flex flex-row justify-end'>
        <Button
          onClick={logout}
          variant='outline'
          size='icon'
        >
          <LogOut className='text-md' />
        </Button>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <RoomsTable rooms={rooms} />
      </CardContent>
      <CardFooter className='flex justify-end'>
        <CreateRoom />
      </CardFooter>
    </Card>
  )
}
