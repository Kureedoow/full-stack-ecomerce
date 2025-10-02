const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    username:String,
   email: {
type:String,
require:true,

    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('userdata', userSchema);
