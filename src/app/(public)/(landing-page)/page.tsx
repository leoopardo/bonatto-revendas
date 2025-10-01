'use client';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { COLORS } from '@/theme/colors';
import { TOKENS } from '@/theme/tokens';
import { Col, Layout, Row, Typography } from 'antd';

export default function LandingPage() {
  const { isDesktop, isLargeDesktop } = useBreakpoints();
  return (
    <Layout style={{ width: '100%', height: 'calc(100vh - 12dvh)' }}>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col
          md={12}
          xs={24}
          style={{
            backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)),
      url(https://www.tupperware.com.br/cdn/shop/files/tw-864949_02.jpg?v=1757012720960)
    `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: !isDesktop ? '400px' : '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: '32px',
          }}
        >
          <Row gutter={16}>
            <Col xs={24} md={17}>
              <Typography.Title level={!isLargeDesktop ? 3 : 1} style={{ color: '#fff' }}>
                Pote Tupperware Instantânea Mágica Harry Potter Hogwarts 2,25L
                Preto
              </Typography.Title>
            </Col>
            {isDesktop && <Col
              span={7}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: "column",
                gap: 8
              }}
            >
              <Typography.Title
                style={{
                  color: '#fff',
                  backgroundColor: COLORS.primary,
                  padding: 8,
                  borderRadius: TOKENS.border_radius,
                  margin: 0,
                  width: "fit-content"
                }}
                level={4}
              >
                R$ 89,90
              </Typography.Title>
              <Typography.Title
              level={1}
                style={{
                  color: '#fff',
                  backgroundColor: COLORS.primary,
                  padding: 8,
                  borderRadius: TOKENS.border_radius,
                  margin: 0,
                  width: "fit-content"
                }}
              >
                R$ 89,90
              </Typography.Title>
            </Col>}
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}
