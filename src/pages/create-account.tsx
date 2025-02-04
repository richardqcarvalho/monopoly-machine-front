import { Button } from '@component/button'
import { Input } from '@component/input'
import { ArrowLeft } from '@phosphor-icons/react'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export const CreateAccount = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState(true)
  const navigate = useNavigate()

  useEffect(
    () => setError(password !== passwordConfirmation),
    [passwordConfirmation, password],
  )

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (error) return

    const response = await fetch('http://localhost:4000/player', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) navigate('/login')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-10 bg-blue-900'>
      <div className='flex flex-col gap-6 rounded-md border border-white p-6'>
        <div>
          <Button
            onClick={() => navigate('/login')}
            className='rounded-full p-3'
          >
            <ArrowLeft className='text-md' />
          </Button>
        </div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-6'
        >
          <Input
            id='name'
            placeholder='Type your name'
            onChange={e => setName(e.target.value)}
            value={name}
            readOnly
            onFocus={e => e.target.removeAttribute('readOnly')}
            label='Name'
          />
          <Input
            id='password'
            placeholder='Type your password'
            onChange={e => setPassword(e.target.value)}
            value={password}
            type='password'
            label='Password'
          />
          <Input
            id='password-confirmation'
            placeholder='Type your password again'
            onChange={e => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            type='password'
            label='Password confirmation'
            error={error}
          />
          <Button type='submit'>Create</Button>
        </form>
      </div>
    </div>
  )
}
