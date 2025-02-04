import { ArrowLeft } from '@phosphor-icons/react'
import clsx from 'clsx'
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
          <button
            onClick={() => navigate('/login')}
            className='cursor-pointer rounded-full border border-white p-1 text-white transition hover:bg-white hover:text-blue-900'
          >
            <ArrowLeft />
          </button>
        </div>
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
              readOnly
              onFocus={e => e.target.removeAttribute('readOnly')}
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
          <div className='relative'>
            <label
              htmlFor='password-confirmation'
              className={clsx(
                'absolute -top-2.5 left-3 bg-blue-900 px-1 py-0.5 text-xs',
                error ? 'text-red-500' : 'text-white',
              )}
            >
              Password confirmation
            </label>
            <input
              id='password-confirmation'
              className={clsx(
                'w-64 rounded-md border bg-blue-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50',
                error ? 'border-red-500' : 'border-white',
              )}
              placeholder='Type your password again'
              onChange={e => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
              type='password'
            />
          </div>
          <button
            type='submit'
            className='cursor-pointer rounded-md border border-white bg-blue-900 px-4 py-3 text-sm text-white outline-none'
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}
