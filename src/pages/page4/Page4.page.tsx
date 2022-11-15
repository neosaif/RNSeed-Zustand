import React from 'react';
import { ScrollView } from "react-native";
import { CartRow } from './Page4.component';
import {selectProductsInCart } from '../../zustand/CartSlice/CartSlice';
import { useBoundStore } from '../../zustand/store';

const Page4 = () => {
    const { removeFromCart } = useBoundStore();
    const productsInCart = useBoundStore(selectProductsInCart);
    return (
        <ScrollView>
            {productsInCart.map((product) => (
                <CartRow
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                onRemove={removeFromCart}
                />
            ))}
        </ScrollView>
  );
};

export default Page4;