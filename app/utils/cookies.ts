'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(name: string) {
  const cookieStore = await cookies()

  cookieStore.set('name', name)

  redirect('/')
}

export async function checkCookies() {
  const cookieStore = await cookies()

  const name = cookieStore.get('name')

  if (!name) redirect('/login')
}

export async function logout() {
  const cookieStore = await cookies()

  cookieStore.delete('name')

  redirect('/login')
}
