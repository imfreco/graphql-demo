'use strict';

require('dotenv').config();

const { readFileSync } = require('fs');
const { join } = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const resolvers = require('./lib/resolvers');

const app = express();
const port = process.env.PORT || 3030;

// define schemas
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}/graphql`);
});
