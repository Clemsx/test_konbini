const { merge } = require('lodash');
const { Book, BookResolver } = require('./schemas/book');
const { Author, AuthorResolver } = require('./schemas/author');
const { Video, VideoResolver } = require('./schemas/video');

const Query = `
  type Query {
    
    ### Queries to get book ###
    book(id: Int!): Book,
    books: [Book],

    ### Queries to get author ###
    author(id: Int!): Author,
    authors: [Author]

    ### Queries to get video ###
    video(id: String!): Video
  }
`;

const resolvers = {};

module.exports = {
  typeDefs: [Query, Book, Author, Video],
  resolvers: merge(resolvers, BookResolver, AuthorResolver, VideoResolver),
};
