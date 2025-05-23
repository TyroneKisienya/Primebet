const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendResetEmail = require('../mailer');

// ✅ REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, country, currency, password } = req.body;

    // Validate
    if (!name || !email || !phone || !country || !currency || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, phone, country, currency, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ FORGOT PASSWORD
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.tokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${token}`;
    await sendResetEmail(user.email, resetLink);

    res.json({ message: 'Password reset link sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error sending reset link' });
  }
});

// ✅ RESET PASSWORD
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      tokenExpiry: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    user.password = password;
    user.resetToken = undefined;
    user.tokenExpiry = undefined;
    await user.save();

    res.json({ message: 'Password has been reset successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error resetting password' });
  }
});

// ✅ LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1d' });

    // Optionally send user data
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        country: user.country,
        currency: user.currency
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
