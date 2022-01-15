const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        default : "Not Given",
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default: () => Date.now(),
         immutable:true
    },
},
{ timestamps: true })

module.exports = mongoose.model('User',userSchema )