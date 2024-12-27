'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(name: string) {
  const cookieStore = await cookies()

  cookieStore.set('name', name)

  redirect('/')
}

export async function getPlayerName() {
  const cookieStore = await cookies()

  const name = cookieStore.get('name')

  if (name) return name.value
  else redirect('/login')
}

export async function logout() {
  const cookieStore = await cookies()

  cookieStore.delete('name')

  redirect('/login')
}
