const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth.js');
const resolvers = {
    Query: {
        // queries
    },
    Mutation: {
        // mutations
    }
};

module.exports = resolvers;