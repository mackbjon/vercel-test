import { revalidatePath } from 'next/cache'

export default function ServerRefreshButton() {
  const refreshUsers = async () => {
    'use server'
    revalidatePath('/')
  }

  return (
    <form>
      <button
        /* @ts-expect-error */
        formAction={refreshUsers}
        className={`text-sm text-gray-500 hover:text-gray-900`}
      >
        {'Refresh'}
      </button>
    </form>
  )
}
