import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
    uri: "/api/graphql",
  });

  
  // Auth for token
const authLink = setContext((_, { headers }) => {
    let token = localStorage.getItem("token");
    console.log("Token set to ", token)
    const header = {
      headers: {
        ...headers,
        authorization: token,
      },
    };
    console.log("Headers set to..." , header)
    return header
  });

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  fetchPolicy: 'network-only'
});


export default client;