require('dotenv').config(); // Load .env first

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// ✅ Debugging .env variables
console.log('📧 Email user:', process.env.EMAIL_USER);
console.log('🔐 Email pass present:', !!process.env.EMAIL_PASS);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://kisienyamishael:Tiffanie@primebet.dh63h8p.mongodb.net/?retryWrites=true&w=majority&appName=Primebet',
  {}
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
