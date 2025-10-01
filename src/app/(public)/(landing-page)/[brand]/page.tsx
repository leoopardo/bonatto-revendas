interface BrandPageProps {
  params: Promise<{
    brand: string
  }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params
  return <div>{brand}</div>
}
