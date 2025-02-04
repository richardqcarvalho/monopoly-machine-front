import { Button } from '@component/button'
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
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-10 bg-blue-900'>
      <div className='flex flex-col gap-6'>
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-6'
        >
          <div className='relative'>
            <label
              htmlFor='name'
              className='absolute -top-2.5 left-3 bg-blue-900 px-1 py-0.5 text-xs text-white'
            >
              Name
            </label>
            <input
              id='name'
              className='w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50'
              placeholder='Type your name'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='relative'>
            <label
              htmlFor='password'
              className='absolute -top-2.5 left-3 bg-blue-900 px-1 py-0.5 text-xs text-white'
            >
              Password
            </label>
            <input
              id='password'
              className='w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50'
              placeholder='Type your password'
              onChange={e => setPassword(e.target.value)}
              value={password}
              type='password'
            />
          </div>
          <Button type='submit'>Enter</Button>
        </form>
        <Button onClick={goToCreateAccount}>Create account</Button>
      </div>
    </div>
  )
}
