import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

dotenv.config();

// setup graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {};
  },
});

// run graphql server
server
  .listen(process.env.PORT)
  .then(({ url }) => {
    console.log(`server running at ${url}`);
  })
  .catch((err: any) => {
    console.log(console.error());
  });
