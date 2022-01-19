const { gql } = require('apollo-server-express');
const datas = require('../../../datas.json');
const { getVideoData } = require('../../helpers/video'); 

const typeDef = gql`
  type Book {
    id: Int!
    title: String
    description: String
    date: String
    authorId: Int
    videoId: String
    Author: Author!
    Video: Video
  }
`;

const resolver = {
  Query: {
    book: (parent, args) => {
      return datas['Books'].find(book => book.id === args.id); 
    },
    books: () => {
      return datas['Books'];
    },
  },
  Book: {
    Author: (parent) => {
      return datas['Author'].find(author => author.id === parent.authorId);
    },
    Video: async (parent) => {
      return await getVideoData(parent?.videoId);
    },
  }
};

module.exports = {
  Book: typeDef,
  BookResolver: resolver 
};
