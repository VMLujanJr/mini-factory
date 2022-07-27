const { Schema } = require('mongoose');
const dateFormata = require('../utils/dateFormat');

const replySchema = new Schema(
    {
        replyBody: {
            type: String,
            required: true,
            mexlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormata(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = replySchema;
