export const runtime = 'edge'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
