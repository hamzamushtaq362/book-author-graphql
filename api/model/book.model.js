var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = new Schema({
    name:{
        type:String,
        require: true
    },
    genre:{
        type:String,
        require:true
    },
    authorId:{
        type:String,
        require:true,
    }
});
var Model = mongoose.model('Book', Book);
module.exports = Model;