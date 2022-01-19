const { gql } = require('apollo-server-express');
const datas = require('../../../datas.json');

const typeDef = gql`
  type Author {
    id: ID!,
    name: String,
    Country: String
    Books: [Book!]
  }
`;

const resolver = {
  Query: {
    author: (parent, args) => {
      return datas['Author'].find((author) => author.id === args.id);
    },
    authors: () => {
      return datas['Author'];
    },
  },
  Author: {
    Books: (parent) => {
      return datas['Books'].filter((book) => book.authorId === parent.id);
    }
  }
};

module.exports = {
  Author: typeDef,
  AuthorResolver: resolver 
};