const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  currency: {
    type: String,
    required: [true, 'Currency is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  resetToken: String,
  tokenExpiry: Date
});

// ✅ Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', UserSchema);
