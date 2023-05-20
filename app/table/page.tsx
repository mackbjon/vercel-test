// export const preferredRegion = 'iad1'
// export const dynamic = 'force-dynamic'

import Table from '../../components/table'
import { Suspense } from 'react'
import TablePlaceholder from '../../components/table-placeholder'

export default async function TablePage() {
  return (
    <Suspense fallback={<TablePlaceholder />}>
      {/* @ts-ignore */}
      <Table></Table>
    </Suspense>
  )
}
