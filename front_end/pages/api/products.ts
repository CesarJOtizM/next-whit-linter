import { ApolloServer, gql } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';

const typeDefs = gql`
  type Query {
    AllProducts: [Product!]!
    Product(filter: String): [Product!]!
  }

  type Product {
    id: Int
    name: String
    price: Float
    url: String
  }
`;

const Products = [
  // {
  //   id: 1,
  //   name: 'Pear',
  //   price: 20.0,
  //   url: 'https://res.cloudinary.com/csarotz/image/upload/v1618953291/sickfits/607f444555125729e65e67a8.jpg',
  // },
  // {
  //   id: 2,
  //   name: 'Apple',
  //   price: 50.0,
  //   url: 'https://res.cloudinary.com/csarotz/image/upload/v1618448021/sickfits/60778e956db8095aafef015a.jpg',
  // },
  {
    id: 3,
    name: 'Yogurt Laive',
    price: 23.0,
    url: 'https://res.cloudinary.com/csarotz/image/upload/v1644432059/sickfits/1849661_yf3x8x.png',
  },
];

const resolvers = {
  Query: {
    AllProducts(parent: any, args: any, context: any) {
      return Products;
    },
    Product(parent: any, args: any, context: any) {
      const { filter } = args;

      const filtered = Products.filter((el: any) =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/products',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
