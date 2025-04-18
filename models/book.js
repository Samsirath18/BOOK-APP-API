const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{type: String, required:true},
    author: {type:mongoose.Schema.Types.ObjectId,ref:'Author'},
    publishedYear: Number,
    genre: String
});
const Book = mongoose.model('Book',bookSchema);

module.exports = Book;