const mongoose = require('mongoose');
const procedureSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    pet:{
        type: String,
        required: true,
    },
    petOwner:{
        type: String,
        required: true,
    },
    petOwnerEmail:{
        type: String,
        required: true,
    },
    procedureManager:{
        type: String,
    },
    procedureWorker:{
        type: String,
    },
    procedureStartDate:{
        type: Date,
    },
    procedureState:{
        type: String,
    },
    procedureEndDate:{
        type: Date,
    }
});

const procedure = mongoose.model("Procedure", procedureSchema);
module.exports = procedure;