import styled from 'styled-components';

export const CartSpace = styled.div`
  width: 360px;
  background: var(--withe);
  height: 480px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;

  h1 {
    margin: 16px 0 8px;
    font-size: 21px;
    line-height: 32px;
  }
  p {
    margin: 0;
    text-align: center;
  }
`;
export const CartProducts = styled.div`
  height: 480px;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CartWrapper = styled.div`
  width: 360px;
  background: white;
  border-radius: 4px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CartItem = styled.div`
  padding: 16px;
  border-bottom: solid 1px var(--lightGray);
  position: relative;
`;

export const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto 65px;
  justify-items: center;
  align-items: center;
`;

export const CartDetails = styled.div`
  margin: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 16px);
  height: 100%;

  p {
    margin: 0;
    &:first-child {
      font-size: 16px;
      line-height: 24px;
    }
    &:last-child {
      font-weight: 600;
      font-size: 21px;
      line-height: 32px;
      color: var(--red);
    }
  }
`;

export const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: var(--orange);
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: none;
    font-size: 24px;
    font-weight: 100;
    color: var(--withe);
  }

  p {
    font-size: 12px;
    margin: 10px 0 0 0;
    cursor: pointer;
  }
`;
