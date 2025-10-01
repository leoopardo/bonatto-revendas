'use client';

import { COLORS } from '@/theme/colors';
import { TOKENS } from '@/theme/tokens';
import { Col, Row, Typography } from 'antd';
import { useState } from 'react';

type Product = {
  title: string;
  price: string;
  promotionalPrice?: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  height?: string | number;
}

export function ProductCard({
  product,
  isDesktop,
  isLargeDesktop,
  height = '400px',
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Col
      span={24}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: isDesktop ? height : '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: '32px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)),
            url(${product.image})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.8s ease-in-out',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />

      <Row
        gutter={16}
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
      >
        <Col xs={24} xl={17}>
          <Typography.Title
            level={!isLargeDesktop ? 3 : 2}
            style={{ color: '#fff' }}
          >
            {product.title}
          </Typography.Title>
        </Col>
        {isDesktop && (
          <Col
            span={7}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {product.promotionalPrice && (
              <Typography.Title
                level={5}
                style={{
                  color: '#fff',
                  backgroundColor: COLORS.primary,
                  padding: 8,
                  borderRadius: TOKENS.border_radius,
                  margin: 0,
                  width: 'fit-content',
                }}
              >
                {product.price}
              </Typography.Title>
            )}
            <Typography.Title
              level={4}
              style={{
                color: '#fff',
                backgroundColor: COLORS.primary,
                padding: 8,
                borderRadius: TOKENS.border_radius,
                margin: 0,
                width: 'fit-content',
              }}
            >
              {product.promotionalPrice || product.price}
            </Typography.Title>
          </Col>
        )}
      </Row>
    </Col>
  );
}
