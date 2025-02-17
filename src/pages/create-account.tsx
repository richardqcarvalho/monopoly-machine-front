import { createAccount } from '@/actions/player'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
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
    <Card className='w-[350px]'>
      <CardHeader className='flex-row'>
        <Button
          onClick={() => navigate('/login')}
          variant='outline'
          size='icon'
        >
          <ArrowLeft />
        </Button>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(fields => mutate(fields))}
          className='flex flex-col gap-6'
        >
          <div>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='Type your name'
              {...register('name', { required: true })}
            />
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='Type your password'
              type='password'
              {...register('password', { required: true })}
            />
          </div>
          <div>
            <Label htmlFor='password-confirmation'>Password confirmation</Label>
            <Input
              id='password-confirmation'
              placeholder='Type your password again'
              type='password'
              {...register('passwordConfirmation', { required: true })}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type='submit'
          disabled={isPending}
          variant='outline'
        >
          Create
        </Button>
      </CardFooter>
    </Card>
  )
}
