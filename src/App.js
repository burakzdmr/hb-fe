import React from 'react';
import ContextProvider from './Context'
import ModalHandler from "./ModalHandler";
import SearchPage from "./SearchPage"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <ContextProvider>
          <ModalHandler />
          <SearchPage />
        </ContextProvider>
      </ApolloProvider>

    </div>
  );
}

export default App;
