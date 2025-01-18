'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import { redirect, useParams } from 'next/navigation'

export default function Game() {
  const { slug: id } = useParams()

  return (
    <div className='p-4'>
      <button
        className='rounded-md border border-white bg-blue-900 p-2 text-sm text-white outline-none'
        onClick={() => redirect('/')}
      >
        <ArrowLeft className='h-4 w-4 text-white' />
      </button>
      <h1>{id}</h1>
    </div>
  )
}
