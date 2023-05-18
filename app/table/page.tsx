import TableComp from '../../components/table'

export default function Table() {
  // You can add any UI inside Loading, including a Skeleton.

  /* @ts-expect-error Async Server Component */
  return <TableComp />
}
