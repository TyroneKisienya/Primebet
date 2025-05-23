<template>
  <section class="forgot-password-section py-20">
    <div class="container">
      <h2 class="text-center mb-6">Forgot Your Password?</h2>
      <p class="text-center mb-8">Enter your email address and we’ll send you a link to reset your password.</p>
      <div class="max-w-md mx-auto">
        <form @submit.prevent="submitEmail">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
            class="w-full p-3 rounded border mb-4"
          />
          <button type="submit" class="cmn--btn w-full">Send Reset Link</button>
        </form>
        <p v-if="message" class="mt-4 text-center text-green-600">{{ message }}</p>
        <p v-if="error" class="mt-4 text-center text-red-600">{{ error }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      message: '',
      error: ''
    }
  },
  methods: {
    async submitEmail() {
      this.message = ''
      this.error = ''
      try {
        await axios.post('/api/forgot-password', { email: this.email })
        this.message = 'Reset link sent! Please check your email.'
      } catch (err) {
        this.error = err.response?.data?.message || 'Something went wrong.'
      }
    },
  },
}
</script>
