// Ini adalah server component
// export default async function BlogDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   return <div>Blog {id}</div>
// }

'use client'
import { useParams, useSearchParams } from 'next/navigation'
export default function BlogDetailPage() {
  const params = useParams()
  const search = useSearchParams()
  const query = Object.fromEntries(search.entries())

  return (
    <div>
      Blog {params.id} dipanggil {query.user} umur {query.umur}
    </div>
  )
}
