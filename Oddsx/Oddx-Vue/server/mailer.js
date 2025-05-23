const nodemailer = require('nodemailer');

// Debug logs to check environment variables
console.log("📧 Email user:", process.env.EMAIL_USER);
console.log("🔐 Email pass present:", !!process.env.EMAIL_PASS); // true = present, false = missing

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendResetEmail(to, link) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: 'Password Reset Request',
      html: `<p>You requested a password reset. Click <a href="${link}">here</a> to reset your password.</p>`
    });

    console.log(`✅ Reset email sent to: ${to}`);
  } catch (err) {
    console.error("❌ Error sending reset email:", err);
    throw err; // Re-throw so your API can return 500 properly
  }
}

module.exports = sendResetEmail;
