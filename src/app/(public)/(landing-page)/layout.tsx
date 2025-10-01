import { COLORS } from '@/theme/colors';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import type { Metadata } from 'next';
import { SideMenu } from './components/menu';

export const metadata: Metadata = {
  title: 'Bonatto revendas',
};

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
          gap: 4
        }}
      >
        <img
          src="https://i.imgur.com/7FaEC0r.png"
          alt="logo"
          style={{
            height: '250px',
          }}
        />

        <SideMenu />
      </Header>
      <Content style={{ minHeight: '90dvh', backgroundColor: '#e8e4da' }}>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: COLORS.dark,
          color: '#fff',
        }}
      >
        Bonatto revendas ©{new Date().getFullYear()} Created by @leoopardo
      </Footer>
    </Layout>
  );
}
