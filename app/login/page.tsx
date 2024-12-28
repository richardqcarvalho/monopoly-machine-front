'use client'

import { useState } from 'react'
import { login } from '../utils/cookies'

export default function Login() {
  const [name, setName] = useState('')

  return (
    <div className='flex w-full flex-col items-center justify-center gap-10 sm:hidden'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>Welcome to</h1>
        <h2 className='text-3xl font-bold'>MONOPOLY MACHINE</h2>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='relative'>
          <label
            htmlFor='name'
            className='absolute -top-4 left-3 bg-blue-900 p-2 text-xs'
          >
            Name
          </label>
          <input
            id='name'
            className='w-64 rounded-md border border-white bg-blue-900 px-4 py-3 text-sm outline-none placeholder:text-[#ffffff50]'
            placeholder='Type your name'
            onChange={e => setName(e.target.value)}
            value={name}
            onKeyDown={e => {
              if (e.key == 'Enter') login(name)
            }}
          />
        </div>
        <button
          className='w-64 rounded-md bg-white px-4 py-3 text-sm text-blue-900 outline-none'
          onClick={() => login(name)}
        >
          Enter
        </button>
      </div>
    </div>
  )
}
