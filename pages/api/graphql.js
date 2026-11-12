import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import resolvers from '../../api/graphql/resolvers/index';
const typeDefs = require("../../api/graphql/schema");
import { handleAuth } from '../../api/helpers/AuthenticationHelpers/handleAuth';


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // Lets tools download the full schema; only while developing, so the live site doesn't hand it out
  introspection: process.env.NODE_ENV !== "production",
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req) => {
    
      if (!req || !req.headers) {
        return { user: null };
      }
    
      const token = req.headers.authorization;
      if (typeof token === "string" && token !== "null") {
        return await handleAuth(token);
      }
      else{
        return { user: null };
      }
    }
});

