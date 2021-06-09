'use strict';

const { graphql, buildSchema } = require('graphql');

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

// exec query hello defined
graphql(
  schema,
  `
    {
      greeting
    }
  `,
  resolvers
).then((data) => console.log(data));
