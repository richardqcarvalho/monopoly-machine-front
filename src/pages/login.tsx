import { login } from '@/actions/player'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { LoginT } from '@/types/player'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginT>()
  const { isPending, mutate } = useMutation({
    mutationFn: login,
    onSuccess: (id?: string) => {
      if (id) {
        localStorage.setItem('playerId', id)
        navigate('/')
      }
    },
  })

  return (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Login with your name and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(fields => mutate(fields))}
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
              disabled={isPending}
              className='w-full'
            >
              Enter
            </Button>
          </div>
        </form>
        <div className='my-4 flex items-center gap-4'>
          <Separator className='flex-1' />
          <span>Don't you have it?</span>
          <Separator className='flex-1' />
        </div>
        <Button
          onClick={() => navigate('/create-account')}
          disabled={isPending}
          variant='outline'
          className='w-full'
        >
          Create account
        </Button>
      </CardContent>
    </Card>
  )
}
