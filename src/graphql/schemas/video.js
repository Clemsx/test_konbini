const { gql } = require('apollo-server-express');
const { getVideoData } = require('../../helpers/video'); 

const typeDef = gql`
  type Video {
    id: String!
    title: String
  }
`;

const resolver = {
  Query: {
    video: async (parent, args) => {
      return await getVideoData(args?.id);
    },
  },
};

module.exports = {
  Video: typeDef,
  VideoResolver: resolver,
};
