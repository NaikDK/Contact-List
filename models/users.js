const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    token:{
        type: String,
        require: true
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;