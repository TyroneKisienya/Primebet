<template>
  <section class="login_section pt-120 p3-bg">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
        <div class="col-6">
          <div class="login_section__thumb d-none d-lg-block">
            <img class="w-100" width="720" height="900" :src="login" alt="Image" />
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="login_section__loginarea">
            <div class="row justify-content-start">
              <div class="col-xxl-10">
                <div class="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
                  <h3 class="mb-6 mb-md-8">Login</h3>
                  <p class="mb-10 mb-md-15">
                    Welcome back! Enter your email and password to continue.
                  </p>
                  <div class="login_section__form">
                    <form @submit.prevent="handleLogin">
                      <div class="mb-5 mb-md-6">
                        <input v-model="email" class="n11-bg" placeholder="Email" type="email" required />
                      </div>
                      <div class="mb-5 mb-md-6">
                        <input v-model="password" class="n11-bg" placeholder="Password" type="password" required />
                      </div>
                      <div class="mb-5">
                        <router-link to="/forgot-password" class="text-primary text-sm">Forgot Password?</router-link>
                      </div>
                      <button type="submit" class="cmn--btn w-100">Login</button>
                    </form>
                    <p class="mt-4">
                      Don't have an account?
                      <router-link to="/create-account">Sign Up</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { auth } from '@/store/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        const res = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        })
        auth.login(res.data.token) // Update state
        this.$router.push('/dashboard')
      } catch (err) {
        alert(err.response?.data?.message || 'Login failed')
      }
    },
  },
}
</script>

<style scoped>
.text-primary {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
