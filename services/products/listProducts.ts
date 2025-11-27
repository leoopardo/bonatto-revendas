'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';

export interface Product {
  brand: number;
  colors: string[];
  created_at: Date;
  description: string
  discount_percent: number;
  id: number;
  images: string[];
  name: string;
  original_value: number;
  pomotion_max_date: Date;
  promotional_value: number;
  quantity: number;
}

export const useListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const supabase = createClient();
    const { data } = (await supabase.from('products').select() as {data: Product[]});

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
