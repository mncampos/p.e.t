const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    specie:{
        type: String,
        required: true,
    },
    weight:{
        type: Number,
        required: true,
    },
    owner:{
        type: String,
        required: true,
    }
});

const pet = mongoose.model("Pet", petSchema);
module.exports = pet;