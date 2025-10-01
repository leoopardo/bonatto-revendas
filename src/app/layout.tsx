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
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: COLORS.primary,
                borderRadius: 24,
                size: 24,
              },
              components: {
                Menu: {
                  colorText: '#fff',
                  colorPrimary: COLORS.base,
                  fontSize: 20,
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
