'use client'

import { SignOut } from '@phosphor-icons/react'
import { logout } from '../utils/cookies'

export default function Home({ name }: { name: string }) {
  return (
    <main className='flex w-full flex-col items-center justify-center gap-4 p-4'>
      <header className='flex w-full justify-end'>
        <button
          className='rounded-md border border-white bg-blue-900 p-2 text-sm text-white outline-none'
          onClick={() => logout()}
        >
          <SignOut className='h-4 w-4 text-white' />
        </button>
      </header>
      <div className='h-full'>
        <h1 className='text-xl'>
          Welcome, <b>{name}</b>!
        </h1>
      </div>
    </main>
  )
}
