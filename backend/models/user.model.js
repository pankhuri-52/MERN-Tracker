const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true, /* white spaces will be trimmed off */
        minlength : 3
    }
}, {
    timestamps : true
});

const User = mongoose.model('User',userSchema);
module.exports = User;