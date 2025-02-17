import { createRoom } from '@/actions/room'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CreateRoomT } from '@/types/room'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const CreateRoom = () => {
  const playerId = localStorage.getItem('playerId') as string
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<CreateRoomT>()
  const { isPending, mutate } = useMutation({
    mutationFn: createRoom,
    onSuccess: (id?: string) => {
      if (id) navigate(`/room/${id}`)
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create room</Button>
      </DialogTrigger>
      <DialogContent className='w-80'>
        <DialogHeader>
          <DialogTitle>Create room</DialogTitle>
          <DialogDescription>
            Choose your room's name and password
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(fields => mutate({ ...fields, playerId }))}
          className='flex flex-col gap-6'
        >
          <div className='flex flex-col gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='Type your name'
              {...register('name', { required: true })}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='Type your password'
              type='password'
              {...register('password', { required: true })}
            />
          </div>
          <div>
            <Button
              type='submit'
              className='w-full'
              disabled={isPending}
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
