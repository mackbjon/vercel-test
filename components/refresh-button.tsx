'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, useTransition } from 'react'

export default function RefreshButton() {
  const router = useRouter()
  const startTime = useRef<any>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (isPending) {
      startTime.current = Date.now()
    } else {
      if (startTime.current) {
        console.log(`Time elapsed: ${startTime.current - Date.now()} ms`)
      }
    }
  }, [isPending])

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-gray-400' : ''
      } text-sm text-gray-500 hover:text-gray-900`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh()
        })
      }}
    >
      {isPending ? 'Refreshing...' : 'Refresh'}
    </button>
  )
}
