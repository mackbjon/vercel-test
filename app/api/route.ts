import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'

export const dynamic = 'force-dynamic'
export const runtime = 'edge'
export const preferredRegion = 'iad1'

export async function GET() {
  const users = await prisma.users.findMany()
  return NextResponse.json(users)
}
