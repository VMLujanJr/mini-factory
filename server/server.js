const express = require("express");
// this imports the Apollo Server
const { ApolloServer } = require("apollo-server-express");
const path = require('path');

// imports typeDefs, resolvers
const { typeDefs, resolvers } = require("./schemas");
//DB locale
const { authMiddleware } = require('./utils/auth');
const db = require("./config/connection");

//This is server location FOR NOW, will see with further deployment
const PORT = process.env.PORT || 3001;
// creates Apollo server and passes schemas
const server = new ApolloServer({
    typeDefs,
    resolvers
    context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(
                `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
            );
        });
    });
};

startApolloServer(typeDefs, resolvers);