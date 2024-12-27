'use client'

import { logout } from '../utils/cookies'

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      <h1>Home</h1>
      <button
        className='w-64 rounded-md bg-white px-4 py-3 text-sm text-blue-900 outline-none'
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  )
}