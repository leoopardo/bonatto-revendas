import React from 'react'

export default function BrandPage ({ params }: { params: { brand: string } }) {
  return (
    <div>{params.brand}</div>
  )
}
