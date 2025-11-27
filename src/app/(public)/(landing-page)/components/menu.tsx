'use client';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import useSearchStore from '@/store/searchStore';
import { COLORS } from '@/theme/colors';
import { TOKENS } from '@/theme/tokens';
import {
  CloseOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { AutoComplete, Button, Drawer, Input, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: (
      <Link href="/boticario" rel="noopener noreferrer">
        O Boticário
      </Link>
    ),
    key: 'boticario',
  },
  {
    label: (
      <Link href="/tupperware" rel="noopener noreferrer">
        Tupperware
      </Link>
    ),
    key: 'tupperware',
  },
  {
    label: (
      <Link href="/demillus" rel="noopener noreferrer">
        Demillus
      </Link>
    ),
    key: 'demillus',
  },
  {
    label: (
      <Link href="/jequiti" rel="noopener noreferrer">
        Jequiti
      </Link>
    ),
    key: 'jequiti',
  },
];

export const SideMenu = () => {
  
  return (
   <></>
  );
};
