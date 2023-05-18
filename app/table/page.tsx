import TableComp from '../../components/table'

export const runtime = 'edge'
export const preferredRegion = 'iad1'

export default function Table() {
  // You can add any UI inside Loading, including a Skeleton.

  /* @ts-expect-error Async Server Component */
  return <TableComp />
}
