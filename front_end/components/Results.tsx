import Image from 'next/image';
import React from 'react';
import { formatMoney } from '../lib/formatMoney';
import { ResultsContent, ItemCard, ItemWrapper } from '../styles/ResultsStyles';

interface Iprops {
  Products: any[];
  HandleClick: (el: any) => void;
  search?: boolean;
}

export const Results: React.FC<Iprops> = ({ Products, HandleClick }) => {
  return (
    <ResultsContent>
      {Products.map((el) => (
        <ItemCard key={el.id}>
          <ItemWrapper>
            <Image src={el.url} alt='Empty Cart' width='80px' height='80px' />
            <div>
              <p>{el.name}</p>
              <p>{formatMoney(el.price)}</p>
            </div>
            <button onClick={() => HandleClick(el)}>+</button>
          </ItemWrapper>
        </ItemCard>
      ))}
    </ResultsContent>
  );
};
