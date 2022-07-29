const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        comments: [Comment]
        friends: [User]
    }

    type Product {
        _id: ID
        productName: String
        sizeCategory: String
        price: Float
    }

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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comments(username: String): [Comment]
        comment(_id: ID!): Comment
        products: [Product]
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addReply(replyId: ID!, replyBody: String!): Comment
        addFriend(friendId: ID!): User
    }

`;

module.exports = typeDefs;