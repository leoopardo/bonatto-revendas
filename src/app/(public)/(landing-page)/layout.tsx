import { COLORS } from '@/theme/colors';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import type { Metadata } from 'next';
import { SideMenu } from './components/menu';
import { Box, Card } from '@radix-ui/themes';

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
      <Box style={{height: "100px", width: "100%", backgroundColor: "#f5f5f5"}}>

      </Box>
      {children}
    </Layout>
  );
}
