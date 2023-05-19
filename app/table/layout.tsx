export const runtime = 'edge'
export const revalidate = 0

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
