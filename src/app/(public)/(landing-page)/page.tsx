'use client';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { Col, Layout, Row, Typography } from 'antd';

export default function LandingPage() {
  const { isDesktop } = useBreakpoints();
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
          }}
        >
          <Typography.Title style={{color: "#fff"}}>
            Pote Tupperware Instantânea Mágica Harry Potter Hogwarts 2,25L Preto
          </Typography.Title>
        </Col>
      </Row>
    </Layout>
  );
}
