'use server'
import { revalidatePath } from 'next/cache'
import { getUsers } from '../lib/getUsers'

export const refreshUsers = async () => {
  await getUsers()
  revalidatePath('/')
}
