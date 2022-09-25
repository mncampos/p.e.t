const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    userType:{
        type: String,
        default: "Cliente",
    },
    address:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    }
});

const user = mongoose.model("User", userSchema);
module.exports = user;