import React, { LegacyRef, useRef } from 'react';
import styled from 'styled-components';
import useOutsideClick from '../hooks/useOutsideClick';

interface Iprops {
  // setProducts: any;
  // products: any[];
  setUpdate: any;
}

const AddStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 60px 20px 0 0;
  position: absolute;
  div {
    padding: 15px;
    background: var(--orange);
    width: 180px;
  }
`;
export const AddItem: React.FC<Iprops> = ({ setUpdate }) => {
  const ref = useRef();

  const onCLose = () => {
    setUpdate(false);
  };

  useOutsideClick(ref, onCLose);

  return (
    <div ref={ref as unknown as LegacyRef<HTMLDivElement> | undefined}>
      <AddStyles>
        <div>Cantidad</div>
      </AddStyles>{' '}
    </div>
  );
};
