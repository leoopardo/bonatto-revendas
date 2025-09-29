import { COLORS } from '@/theme/colors';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Auth Template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          backgroundColor: COLORS.base,
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          padding: 0,
          margin: 0,
        }}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
