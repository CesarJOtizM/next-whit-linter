import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export const Home: NextPage = () => {
  return <Title>Hello word</Title>;
};
