const faker = require('faker');
const db = require('../config/connection.js');
const { User, Comment, Product } = require('../models');

db.once('open', async () => {
    await Comment.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    // holds user data
    const userData = [];

    // creates 50 users w/ random usernames, emails, and passwords.
    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    // assigns newly created user data to User model.
    const createdUsers = await User.collection.insertMany(userData);

    // holds product data
    const productData = [];

    // size categories
    const sizeCategories = [
        'small',
        'medium',
        'large'
    ]
    // creates 50 products w/ random names, sizecategories, and prices
    for (let i = 0; i < 50; i += 1) {
        const productName = faker.commerce.productName();
        const sizeCategory = sizeCategories[Math.random() * sizeCategories.length + 1];
        const price = faker.commerce.price(dec = 2);
        console.log(price);

        productData.push({ productName, sizeCategory, price });
    }

    // assigns newly created product data to Product model
    const createdProducts = await Product.collection.insertMany(productData);

    // create friends
    for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let friendId = userId;

        while (friendId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            friendId = createdUsers.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } } );
    }

    // create comments
    let createdComments = [];

    for (let i = 0; i < 100; i += 1) {
        const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];
        const createdComment = await Comment.create({ commentText, username });
        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { comments: createdComment._id } }
        );
        createdComments.push(createdComment);
    }

    // create replies
    for (let i = 0; i < 100; i += 1) {
        const replyBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username } = createdUsers.ops[randomUserIndex];
        const randomReplyIndex = Math.floor(Math.random() * createdComments.length);
        const { _id: replyId } = createdComments[randomReplyIndex];
        
        await Comment.updateOne(
            { _id: replyId },
            { $push: { replies: { replyBody, username } } },
            { runValidators: true }
        );
    }

    console.log('this app is seeded!');
    process.exit(0);
});