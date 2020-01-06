"use strict";
import express from "express";
// graphql
//import graphqlHTTP from "express-graphql";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
/*
app.get("/", (req, res) => {
  res.send("Todo Listo");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // que schema va utilizar
    schema,
    // el resolver se pasa como rootValue
    //rootValue: resolvers,
    // utilizar graphql
    graphiql: true
  })
);
*/
app.listen({ port: 4000 }, () =>
  console.log(`El servidor esta funcionando ${server.graphqlPath}`)
);
