import { Box } from '@radix-ui/themes';
import { Layout } from 'antd';
import type { Metadata } from 'next';

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
