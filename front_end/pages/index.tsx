import type { NextPage } from 'next';
import Head from 'next/head';
import { Home } from '../components/Home';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My little shop</title>
      </Head>

      <Home />
    </div>
  );
};

export default Index;
