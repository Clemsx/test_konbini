const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./src/graphql/index');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.start().then(() => server.applyMiddleware({ app }) );

app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
);
