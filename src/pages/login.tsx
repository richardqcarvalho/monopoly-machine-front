import { login } from '@/actions/player'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
      <div className='flex flex-col gap-6'>
        <form
          onSubmit={handleSubmit(fields => mutate(fields))}
          className='flex flex-col gap-6'
        >
          <Input
            placeholder='Type your name'
            {...register('name', { required: true })}
          />
          <Input
            placeholder='Type your password'
            type='password'
            {...register('password', { required: true })}
          />
          <Button
            type='submit'
            disabled={isPending}
            variant='outline'
          >
            Enter
          </Button>
        </form>
        <Button
          onClick={() => navigate('/create-account')}
          disabled={isPending}
          variant='outline'
        >
          Create account
        </Button>
      </div>
    </div>
  )
}
