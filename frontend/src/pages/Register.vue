<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="register" >
        <div>
          <input v-model="email" id="email" type="email" placeholder="Email" required>
        </div>
        <div>
          <input v-model="password" id="password" type="password" placeholder="Password" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <p v-if="success">{{ success }}</p>
    </div>
  </template>
  
  <script>
  import { getCSRFToken } from '../store/auth'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
        success: ''
      }
    },
    methods: {
      async register() {
        try {
          const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': getCSRFToken()
                  },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            }),
            credentials: 'include'
          })
          const data = await response.json()
          if (response.ok) {
            this.success = 'Registration successful! Please log in.'
            setTimeout(() => {
              this.$router.push('/login')
            }, 1000)
          } else {
            this.error = data.error || 'Registration failed'
          }
        } catch (err) {
          this.error = 'An error occurred during registration: ' + err
        }
      }
    }
  }
  </script>
  

<style scoped>
.register {
    background-color: rgb(210, 184, 151);
    padding: 60px;
    padding-left: 110px;
    padding-right: 110px;
    border-radius: 30px;
  }

h2 {
    font-size: 5em;
    margin-bottom: 80px;
    color: white;
    text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);

  }
</style>