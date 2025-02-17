import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RoomT } from '@/types/room'

export const RoomsTable = ({ rooms }: { rooms: RoomT[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.map(room => (
          <TableRow key={room.id}>
            <TableCell>{room.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
