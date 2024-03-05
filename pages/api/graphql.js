import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import resolvers from '@api/graphql/resolvers';
const typeDefs = require("@api/graphql/schema");
import { handleAuth } from '@api/helpers/AuthenticationHelpers/handleAuth';


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req) => {
      console.log("Handling Context");
    
      if (!req || !req.headers) {
        return { user: null };
      }
    
      const token = req.headers.authorization;
      console.log("TOKEN IN HEADER:::", token)
      if (typeof token === "string" && token !== "null") {
        console.log("Handling Auth with token")
        console.log(token)
        return await handleAuth(token);
      }
      else{
        console.log("No token return")
        return { user: null };
      }
    }
});

