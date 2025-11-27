import { COLORS } from '@/theme/colors';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Theme } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";


const minhaFonte = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Rounded-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

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
          fontFamily: 'Arial, sans-serif',
          padding: 0,
          margin: 0,
        }}
      >
        <Theme accentColor="violet" radius="large" grayColor='slate'>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: COLORS.primary,
                  borderRadius: 24,
                  size: 24,
                  fontFamily: minhaFonte.style.fontFamily,
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
        </Theme>
      </body>
    </html>
  );
}
