import { createAccount } from '@/actions/player'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CreateAccountT } from '@/types/player'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const CreateAccount = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<CreateAccountT>()
  const { isPending, mutate } = useMutation({
    mutationFn: createAccount,
    onSuccess: () => navigate('/login'),
  })

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-10'>
      <div className='flex flex-col gap-6 rounded-md border border-white p-6'>
        <div>
          <Button
            onClick={() => navigate('/login')}
            variant='outline'
          >
            <ArrowLeft className='text-md' />
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(fields => mutate(fields))}
          className='flex flex-col gap-6'
        >
          <Input
            id='name'
            placeholder='Type your name'
            {...register('name', { required: true })}
          />
          <Input
            id='password'
            placeholder='Type your password'
            type='password'
            {...register('password', { required: true })}
          />
          <Input
            id='password-confirmation'
            placeholder='Type your password again'
            type='password'
            {...register('passwordConfirmation', { required: true })}
          />
          <Button
            type='submit'
            disabled={isPending}
            variant='outline'
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  )
}
