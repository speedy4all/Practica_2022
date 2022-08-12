import React from 'react';
import ProductView from '../../components/ProductView';
import { useAppContext } from '../App/context';
import { data } from '../Products/columns';

export default function Product({ productId }) {
    const { setPath } = useAppContext();
    const product = data.find((item) => item.key === productId);

  return (
    <ProductView product={product} onCancel={() => setPath('/products')} />
  );
}
