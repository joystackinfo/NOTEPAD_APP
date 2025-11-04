const mongoose = require('mongoose'); // include monogoose
const userSchema = new mongoose.Schema({ // create user schema
 
    username:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true

    },
    password:{
        type:String,
        required:true
    }

}, { 
    timestamps: true 
}); // automatically add createdAt and updatedAt fields


const User = mongoose.model('User', userSchema);


module.exports = User;
