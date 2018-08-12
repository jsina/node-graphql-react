import express from "express";
import GraphQL from "express-graphql";

import schema from './schema/schema';

const app = express();

app.use(
  "/graphql",
  GraphQL({
    graphiql: true,
    schema
  })
);
app.listen(3000, () => console.log("Listening..."));
