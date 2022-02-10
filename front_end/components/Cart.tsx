import Image from 'next/image';
import React, { LegacyRef, useEffect, useState } from 'react';
import icon from '../assets/images/Icon.png';
import { formatMoney } from '../lib/formatMoney';

import {
  CartActions,
  CartDetails,
  CartItem,
  CartItemWrapper,
  CartSpace,
  CartWrapper,
  EmptyCart,
} from '../styles/CartStyles';
import { AddItem } from './AddItem';

interface Iprops {
  setProducts: any;
  products: any[];
  cart: any[];
}

export const Cart: React.FC<Iprops> = ({ products, setProducts, cart }) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [itemUpdate, setItemUpdate] = useState<any>();

  const HandleClick = (el: any) => {
    setUpdate(!update);
    setItemUpdate({ el });
  };

  const HandleDelete = (el: any) => {
    const newCart = cart;
    let index: number = 0;

    cart.forEach((item: any, i: number) => {
      if (item.id === el.id) {
        index = i;
      }
    });
    newCart.splice(index, 1);
    console.log(newCart);

    setProducts([...newCart]);
  };

  return (
    <>
      <CartSpace>
        {products.length === 0 ? (
          <EmptyCart>
            <Image src={icon} alt='Empty Cart' width='55px' height='45px' />
            <h1>Your cart is empty</h1>
            <p>Seems like you haven’t chosen what to buy...</p>
          </EmptyCart>
        ) : (
          <CartWrapper>
            {products.map((el) => (
              <CartItem key={el.id}>
                <CartItemWrapper>
                  <Image
                    src={el.url}
                    alt='Empty Cart'
                    width='80px'
                    height='80px'
                  />
                  <CartDetails>
                    <p>{el.name}</p>
                    <p>{formatMoney(el.price * el.cantidad)}</p>
                  </CartDetails>
                  <CartActions>
                    <button onClick={() => HandleClick(el)}>
                      {el.cantidad}
                    </button>
                    <p onClick={() => HandleDelete(el)}>delete</p>
                  </CartActions>
                </CartItemWrapper>
                {update && <AddItem setUpdate={setUpdate} />}
              </CartItem>
            ))}
          </CartWrapper>
        )}
      </CartSpace>
    </>
  );
};
