const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth.js');
const resolvers = {
    Query: {
        // queries
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('comments')
                    .populate('friends');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        // mutations
    }
};

module.exports = resolvers;