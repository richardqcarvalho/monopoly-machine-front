import { createAccount } from '@/actions/player'
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
    <Card className='w-80'>
      <CardHeader>
        <div>
          <Button
            onClick={() => navigate('/login')}
            variant='outline'
            size='icon'
          >
            <ArrowLeft />
          </Button>
        </div>
        <div>
          <CardTitle className='text-2xl'>Create account</CardTitle>
          <CardDescription>
            Insert your name, choose a password and confirm your password to
            create your account
          </CardDescription>
        </div>
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
          <div className='flex flex-col gap-2'>
            <Label htmlFor='password-confirmation'>Password confirmation</Label>
            <Input
              id='password-confirmation'
              placeholder='Type your password again'
              type='password'
              {...register('passwordConfirmation', { required: true })}
            />
          </div>
          <Button
            type='submit'
            disabled={isPending}
            className='w-full'
          >
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
