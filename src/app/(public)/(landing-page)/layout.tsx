import { COLORS } from '@/theme/colors';
import { Breadcrumb, Flex, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bonatto revendas',
};

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.primary,
          height: '12dvh',
          borderBottom: `12px solid ${COLORS.secondary}`,
        }}
      >
        <img
          src="https://i.imgur.com/7FaEC0r.png"
          alt="logo"
          style={{
            height: '300px',
          }}
        />

        
      </Header>
      <Content style={{ minHeight: '90dvh', backgroundColor: '#e8e4da' }}>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        ></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
