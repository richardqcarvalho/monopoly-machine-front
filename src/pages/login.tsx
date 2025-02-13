import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

export const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const goToCreateAccount = () => navigate('/create-account')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      const { id } = await response.json()

      localStorage.setItem('userId', id)

      navigate('/')
    }
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
      <div className='flex flex-col gap-6'>
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-6'
        >
          <Input
            id='name'
            placeholder='Type your name'
            onChange={e => setName(e.target.value)}
            value={name}
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
          <Button type='submit'>Enter</Button>
        </form>
        <Button onClick={goToCreateAccount}>Create account</Button>
      </div>
    </div>
  )
}
