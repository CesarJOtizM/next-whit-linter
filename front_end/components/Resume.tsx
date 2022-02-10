import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import truck from '../assets/images/truck.png';
import { calcDeliveryDate } from '../lib/calcDeliveryDate';
import { formatMoney } from '../lib/formatMoney';

interface Iprops {
  products: any[];
}
interface styleProps {
  active: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 480px;
`;

const ResumeStyles = styled.div`
  grid-row-start: 2;
`;

const DeliveryDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 16px 0;

  span {
    margin: 0 0 0 10px;
  }
`;

const DeliveryShipping = styled.div`
  padding: 16px;
  background: var(--withe);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 8px 0;
    &:nth-child(2) {
      background: var(--yellow);
    }
    &:last-child {
      margin: 8px 0 0 0;
      p {
        font-weight: 600;
        &:last-child {
          color: red;
        }
      }
    }

    p {
      margin: 0;
      line-height: 24px;
    }
  }
`;
const CompleteBotton = styled.button`
  margin: 16px 0 0 0;
  width: 100%;
  line-height: 24px;
  padding: 13px;
  border-radius: 4px;
  background: ${(p: styleProps) => (p.active ? 'var(--orange)' : 'none')};
  color: ${(p: styleProps) => (p.active ? 'var(--withe)' : 'var(--darkGray)')};
  font-weight: 600;
  border: solid 1px
    ${(p: styleProps) => (p.active ? 'var(--orange)' : 'var(--lightGray)')};
  &:hover {
    transform: ${(p: styleProps) => (p.active ? 'scale(1.05)' : 'none')};
    transition: all 0.5s;
  }
`;

export const Resume: React.FC<Iprops> = ({ products }) => {
  const [price, setPrice] = useState<{
    price: number;
    taxes: number;
    shipping: number;
    total: number;
  }>({
    price: 0,
    taxes: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    let totalPrice: number = 0;
    products.forEach((el) => (totalPrice += el.cantidad * el.price));
    setPrice({
      price: totalPrice,
      shipping: totalPrice * 0.1,
      taxes: totalPrice * 0.18,
      total: totalPrice + totalPrice * 0.1 + totalPrice * 0.18,
    });
  }, [products]);

  const HandleClick = () => {};

  return (
    <Wrapper>
      <ResumeStyles>
        <DeliveryDate>
          <Image src={truck} width='17px' height='17px' alt='Car' />
          <span>
            Su entrega sera{' '}
            {`${calcDeliveryDate(new Date(), 1).toLocaleDateString()}`}
          </span>
        </DeliveryDate>
        <DeliveryShipping>
          <div>
            <p>Products</p>
            <p>{formatMoney(price?.price)}</p>
          </div>
          <div>
            <p>Shipping Cost</p>
            <p>{formatMoney(price?.shipping)}</p>
          </div>
          <div>
            <p>Taxes</p>
            <p>{formatMoney(price?.taxes)}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{formatMoney(price?.total)}</p>
          </div>
        </DeliveryShipping>

        <CompleteBotton
          disabled={price?.total > 50 ? true : false}
          active={price?.total > 50 ? true : false}>
          COMPLETE ORDER
        </CompleteBotton>
      </ResumeStyles>
    </Wrapper>
  );
};
