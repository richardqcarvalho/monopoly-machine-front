'use client'

import { redirect } from 'next/navigation'

export default function Home() {
  if (!localStorage.getItem('token')) redirect('/login')

  const handleLogout = () => {
    localStorage.clear()
    redirect('/login')
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      <h1>Home</h1>
      <button
        className='w-64 rounded-md bg-white px-4 py-3 text-sm text-blue-900 outline-none'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
