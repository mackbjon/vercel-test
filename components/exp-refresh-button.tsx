import ClientButton from './client-button'
import { revalidatePath } from 'next/cache'

export default function ServerRefreshButton() {
  const refreshUsers = async () => {
    'use server'
    revalidatePath('/')
  }

  return (
    /* @ts-expect-error */
    <form action={refreshUsers}>
      <ClientButton />
    </form>
  )
}
