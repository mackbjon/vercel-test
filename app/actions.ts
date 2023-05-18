'use server'
import { revalidateTag } from 'next/cache'

export const refreshUsers = async () => {
  revalidateTag('users')
}
