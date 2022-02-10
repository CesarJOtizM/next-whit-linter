import styled from 'styled-components';

// interface Iprops {
//   isSearch: boolean;
// }

export const ResultsContent = styled.div`
  width: 360px;
  /* z-index: 1; */
  position: absolute;
  background: white;
  border-radius: 4px;
  margin: 0 0 0 120px;
  overflow-y: scroll;
  height: 480px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemCard = styled.div`
  padding: 16px;
  border-bottom: solid 1px var(--lightGray);
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto 65px;
  justify-items: center;
  align-items: center;

  div {
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
  }

  button {
    background: var(--orange);
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: none;
    font-size: 36px;
    font-weight: 100;
    color: var(--withe);
    &:hover {
      transform: scale(1.1);
    }
  }
`;
