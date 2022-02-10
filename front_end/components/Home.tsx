import { NextPage } from 'next';
import { SearchBar } from './SearchBar';
import { Cart } from './Cart';
import { useEffect, useState } from 'react';
import { Resume } from './Resume';
import styled from 'styled-components';

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 360px);
  grid-column-gap: 64px;
  margin: 64px 0;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Home: NextPage = () => {
  const [Products, setProducts] = useState<any[]>([
    {
      id: 1,
      name: 'Pear',
      price: 20.0,
      url: 'https://res.cloudinary.com/csarotz/image/upload/v1618953291/sickfits/607f444555125729e65e67a8.jpg',
      cantidad: 2,
    },
    {
      id: 2,
      name: 'Apple',
      price: 50.0,
      url: 'https://res.cloudinary.com/csarotz/image/upload/v1618448021/sickfits/60778e956db8095aafef015a.jpg',
      cantidad: 10,
    },
    {
      id: 3,
      name: 'Yogurt Laive',
      price: 23.0,
      url: 'https://res.cloudinary.com/csarotz/image/upload/v1644432059/sickfits/1849661_yf3x8x.png',
      cantidad: 10,
    },
  ]);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const miCarritoSinDuplicados = Products.reduce(
      (acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(
          (elemento: any) => elemento.id === valorActual.id
        );
        if (elementoYaExiste) {
          return acumulador.map((el: any) => {
            if (el.id === valorActual.id) {
              return {
                ...el,
                cantidad: el.cantidad + valorActual.cantidad,
              };
            }

            return el;
          });
        }

        return [...acumulador, valorActual];
      },
      []
    );

    setResults(miCarritoSinDuplicados);
  }, [Products]);

  return (
    <HomeStyles>
      <CartWrapper>
        <SearchBar Products={Products} setProducts={setProducts} />
        <Cart products={results} setProducts={setProducts} cart={Products} />
      </CartWrapper>
      <Resume products={results} />
    </HomeStyles>
  );
};
