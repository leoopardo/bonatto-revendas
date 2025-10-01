'use client';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { Layout, Row, Col } from 'antd';
import { ProductCard } from './components/productCard';

export default function LandingPage() {
  const { isDesktop, isLargeDesktop } = useBreakpoints();

  const products = [
    {
      title: 'Harry Potter Hogwarts 2,25L Preto',
      price: 'R$ 119,90',
      promotionalPrice: 'R$ 89,90',
      image:
        'https://www.tupperware.com.br/cdn/shop/files/tw-864126-01.jpg?v=1755106499960',
    },
    {
      title: 'Harry Potter 1,3L Colorido',
      price: 'R$ 69,90',
      promotionalPrice: 'R$ 74,90',
      image:
        'https://www.tupperware.com.br/cdn/shop/files/tw-864952_01.jpg?v=1757012853960',
    },
    {
      title: 'Pote Tupperware Marvel Avengers 2,25L',
      price: 'R$ 79,90',
      image:
        'https://www.tupperware.com.br/cdn/shop/files/tw-864950_01_0fb949b4-07f7-48e9-b4e9-a92a5e5e7deb.jpg?v=1757012769960',
    },
  ];

  return (
    <Layout style={{ width: '100%', height: 'calc(100vh - 12dvh)' }}>
      <Row style={{ height: '100%', width: '100%' }}>
        {products.map((product, index) => (
          <Col
            key={index}
            xs={24}
            md={8}
            style={{ height: isDesktop ? '100%' : 'fit-content' }}
          >
            <ProductCard
              product={product}
              isDesktop={isDesktop}
              isLargeDesktop={isLargeDesktop}
              height="100%"
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
