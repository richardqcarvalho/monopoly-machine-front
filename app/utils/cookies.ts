'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(token: string) {
  const cookieStore = await cookies()

  cookieStore.set('token', token)

  redirect('/')
}

export async function checkCookies() {
  const cookieStore = await cookies()

  const token = cookieStore.get('token')

  if (!token) redirect('/login')
}

export async function logout() {
  const cookieStore = await cookies()

  cookieStore.delete('token')

  redirect('/login')
}
