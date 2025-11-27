interface BrandPageProps {
  params: Promise<{
    product: string
  }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function ProductPage({ params }: BrandPageProps) {
  const { product } = await params
  return <div>{product}</div>
}
