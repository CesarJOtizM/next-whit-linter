import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { ItemCard, ItemWrapper, ResultsContent } from '../styles/ResultsStyles';
import { formatMoney } from '../lib/formatMoney';
import Image from 'next/image';

interface Iprops {
  setProducts: any;
  Products: any[];
}

const SEARCH_PRODUCTS_QUERY = gql`
  query Product($filter: String) {
    Product(filter: $filter) {
      name
      price
      url
      id
    }
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 360px;
    margin: 0 0 16px;
    padding: 10px;
    border: 0;
    outline: none;
    border: 1px solid var(--lightGray);
    box-sizing: border-box;
    border-radius: 4px;
    /* font-size: 2rem; */
  }
`;

export const SearchBar: React.FC<Iprops> = ({ Products, setProducts }) => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<any[]>([]);

  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const findItemsButChill = debounce(findItems, 350);

  const HandleChange = (e: any) => {
    const { target } = e;
    setValue(target.value);

    if (target.value) {
      findItemsButChill({
        variables: {
          filter: target.value,
        },
      });
      setResult(data?.Product || []);
    } else {
      setResult([]);
    }
  };

  const HandleClick = (el: any) => {
    console.log(el);
    setProducts([...Products, el]);
  };

  return (
    <>
      <SearchStyles>
        <input
          value={value}
          type='text'
          onChange={HandleChange}
          placeholder='Search Products'
        />
      </SearchStyles>
      {result.length > 0 && <div>Hellow</div>}
    </>
  );
};
