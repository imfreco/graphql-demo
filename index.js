'use strict';

const { buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3030;

// define schemas
const schema = buildSchema(`
    type Query {
        hello: String,
        greeting: String
    }
`);

// define resolvers
const resolvers = {
  hello: () => {
    return 'Hello World!';
  },
  greeting: () => {
    return 'Hello everybody';
  },
};

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
