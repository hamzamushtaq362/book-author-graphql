var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author = new Schema({
    name:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require:true,
    }
});
var Model = mongoose.model('Author', Author);
module.exports = Model;