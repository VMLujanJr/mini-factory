const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        replyCount: Int
        replies: [Reply]
    }

    type Reply {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        comments: [Comment]
        friends: [User]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: string
        username: String
       
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comments(username: String): [Comment]
        comment(_id: ID!): Comment
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addReply(replyId: ID!, replyBody: String!): Comment
        addFriend(friendId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;