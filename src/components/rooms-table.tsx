import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EntityT } from '@/types/shared'
import { useNavigate } from 'react-router'

export const RoomsTable = ({ rooms }: { rooms: EntityT[] }) => {
  const navigate = useNavigate()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.map(room => (
          <TableRow
            key={room.id}
            className='cursor-pointer'
            onClick={() => navigate(`/room/${room.id}`)}
          >
            <TableCell>{room.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
