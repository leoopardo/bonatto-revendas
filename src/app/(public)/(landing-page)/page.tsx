'use client';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { COLORS } from '@/theme/colors';
import { Box, Card, Flex, Inset, Strong, Text } from '@radix-ui/themes';
import Link from 'next/link';
import RotatingText from '../../../../components/RotatingText/RotatingText';
import { useListProducts } from '../../../../services/products/listProducts';
import { formatCurrency } from '../../../../utils/formater';

export default function LandingPage() {
  const { isDesktop } = useBreakpoints();
  const { products } = useListProducts();

  return (
    <Flex
      style={{
        width: '100%',
        height: 'calc(100vh - 20dvh)',
        backgroundColor: '#fff',
        padding: '16px',
      }}
      direction="column"
      gap="8"
    >
      <Flex
        direction={isDesktop ? 'row' : 'column'}
        justify={isDesktop ? 'center' : 'start'}
        align={isDesktop ? 'start' : 'center'}
        mt="8"
      >
        <Text size={isDesktop ? '9' : '9'} style={{ padding: 18 }}>
          Compre
        </Text>
        <Text
          size={isDesktop ? '9' : '9'}
          style={{
            backgroundColor: COLORS.secondary,
            padding: 18,
            borderRadius: 8,
            overflow: 'hidden',
            height: 'max-content',
          }}
        >
          <RotatingText
            texts={['O Boticário', 'Demillus', 'Tupperware', 'Jequiti']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={'last'}
            initial={{ y: '-120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '120%', opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </Text>
      </Flex>
      <Flex style={{ width: '100%' }} justify="center">
        {products.map((product) => (
          <Box maxWidth="300px" key={product.id}>
            <Link href={`/produtos/${product.id}`}>
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={product.images[0]}
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'var(--gray-5)',
                    }}
                  />
                </Inset>
                <Flex direction="column" gap="4">
                  <Text as="p" size="4">
                    <Strong>{product.name}</Strong>
                  </Text>
                  <Text
                    size="4"
                    style={{
                      backgroundColor: COLORS.secondary,
                      width: 'max-content',
                      padding: '4px',
                      borderRadius: '4px',
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {formatCurrency(product.original_value)}
                  </Text>
                </Flex>
              </Card>
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
