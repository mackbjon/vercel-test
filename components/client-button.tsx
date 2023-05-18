'use client'
/* @ts-expect-error */
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function ClientButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className={`${
        pending ? 'cursor-not-allowed text-gray-400' : ''
      } text-sm text-gray-500 hover:text-gray-900`}
      type="submit"
    >
      {'Refresh'}
    </button>
  )
}
