import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 360px;
  z-index: 2;
  border: 1px solid var(--lightGrey);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGray);
  background: ${(props: any) => (props.highlighted ? '#f7f7f7' : 'white')};
  position: relative;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props: any) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 20px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

export { DropDown, DropDownItem };
