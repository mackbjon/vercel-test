'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavButton() {
  const segment = useSelectedLayoutSegment()

  return (
    <Link href="/table">
      <button>Active Table</button>
    </Link>
  )
}
