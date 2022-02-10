import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Home } from '../components/Home';

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
`;

const HomePage: NextPage = () => {
  return (
    <HomeStyles>
      <Head>
        <title>My little shop</title>
      </Head>

      <Home />
    </HomeStyles>
  );
};

export default HomePage;
