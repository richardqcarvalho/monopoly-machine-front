'use client'

import { SignOut } from '@phosphor-icons/react'
import { redirect } from 'next/navigation'
import { Fragment, useState } from 'react'
import { logout } from '../utils/cookies'

export default function Home({ name }: { name: string }) {
  const [rooms, setRooms] = useState<{ id: string; name: string }[]>([])

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
      <h1 className='text-xl'>
        Welcome, <b>{name}</b>!
      </h1>
      <ul className='flex h-full w-full flex-col items-center gap-1 overflow-auto rounded-md border border-white p-1'>
        {rooms.length == 0 ? (
          <li>No rooms found</li>
        ) : (
          <Fragment>
            {rooms.map(room => (
              <li
                key={room.id}
                className='w-full rounded-md border border-white p-2'
                onClick={() => redirect(`/game/${room.id}`)}
              >
                {room.name}
              </li>
            ))}
          </Fragment>
        )}
      </ul>
      <footer className='flex w-full flex-col py-2'>
        <button
          className='rounded-md border border-white bg-blue-900 px-4 py-3 text-base text-white outline-none'
          onClick={() => {}}
        >
          Create room
        </button>
      </footer>
    </main>
  )
}
