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
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(window.location.pathname.split("/").join(""));
  const { isDesktop, isLargeDesktop } = useBreakpoints();
  const { search, setSearch } = useSearchStore();

  console.log(window.location.pathname)

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div
      style={{
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: !isDesktop ? 'flex-end' : 'space-between',
        gap: '24px',
      }}
    >
      {isDesktop && (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            minWidth: !isLargeDesktop ? '90%' : '50%',
            backgroundColor: COLORS.primary,
          }}
        />
      )}
      {isLargeDesktop && (
        <AutoComplete
          popupMatchSelectWidth={252}
          style={{ width: '30vw' }}
          options={[]}
          onSelect={() => {}}
          onSearch={() => {}}
          size="large"
          value={search}
          onChange={(value) => {
            setSearch(value);
          }}
          onClear={() => setSearch("")}
          
        >
          <Input.Search
            size="large"
            placeholder="Procurar produto"
            height={30}
            allowClear
          />
        </AutoComplete>
      )}

      <MenuFoldOutlined
        style={{ fontSize: TOKENS.icon_size }}
        onClick={() => setOpen(true)}
      />

      <Drawer
        placement={'right'}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        style={{ backgroundColor: COLORS.base1 }}
        title={
          <>
            <CloseOutlined
              onClick={() => {
                setOpen(false);
              }}
            />
          </>
        }
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
          style={{
            minWidth: !isLargeDesktop ? '90%' : '50%',
            backgroundColor: COLORS.primary,
          }}
        />

        <Button type="primary">Área administrativa</Button>
      </Drawer>
    </div>
  );
};
