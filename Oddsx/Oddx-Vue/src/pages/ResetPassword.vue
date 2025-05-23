<template>
  <section class="reset-password-section py-20">
    <div class="container">
      <h2 class="text-center mb-6">Reset Your Password</h2>
      <div class="max-w-md mx-auto">
        <form @submit.prevent="resetPassword">
          <input
            type="password"
            v-model="password"
            placeholder="Enter new password"
            required
            class="w-full p-3 rounded border mb-4"
          />
          <button type="submit" class="cmn--btn w-full">Reset Password</button>
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
      password: '',
      message: '',
      error: ''
    }
  },
  computed: {
    token() {
      return this.$route.params.token
    }
  },
  methods: {
    async resetPassword() {
      this.message = ''
      this.error = ''
      try {
        await axios.post(`/api/reset-password/${this.token}`, {
          password: this.password
        })
        this.message = 'Password successfully reset. You may now log in.'
      } catch (err) {
        this.error = err.response?.data?.message || 'Reset failed.'
      }
    }
  }
}
</script>
