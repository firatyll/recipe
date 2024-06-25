const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
