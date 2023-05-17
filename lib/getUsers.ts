import { cache } from 'react'
import { prisma } from '@/lib/prisma'
// import 'server-only'

export const preloadUsers = () => void getUsers()

export const getUsers = cache(async () => {
  // const startTime = Date.now()
  const users = await prisma.users.findMany()
  // const duration = Date.now() - startTime

  return users
})
