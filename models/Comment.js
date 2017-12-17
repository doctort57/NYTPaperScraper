// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Comment Schema
var CommentSchema = new Schema({

  // Author's Name
  author: {
    type: String,
    unique: true,
    required: "Author Name is Required"
  },
  // Comment Content
  content: {
  type: String,
  required: "Comment is Required"
  },
  // `date` must be of type Date. The default value is the current date
  authorCreated: {
    type: Date,
    default: Date.now
  },
  // `lastUpdated` must be of type Date
  lastUpdated: Date
});


// Create the Comment model with Mongoose
var Comment = mongoose.model('Comment', CommentSchema);

// Export the Model
module.exports = Comment;