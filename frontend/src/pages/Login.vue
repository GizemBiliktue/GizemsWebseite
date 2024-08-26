<template>
    <div class="login">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="login">
        <div>
          <input v-model="email" id="email" type="text" placeholder="Email" required
                @input="resetError">
        </div>
        <div>
          <input v-model="password" id="password" type="password" placeholder="Password" required
                @input="resetError">
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
<script>
import { useAuthStore } from '../store/auth'
  
  export default {
    setup() {
      const authStore = useAuthStore()
      return {
        authStore
      }
    },
    data() {
      return {
        email: "",
        password: "",
        error: ""
      }
    },
    methods: {
      async login(){
        await this.authStore.login(this.email, this.password, this.$router)
        if (!this.authStore.isAuthenticated){
          this.error = 'Login failed. Please check your credentials.'
        }
      },
      resetError(){
        this.error = ""
      }
    }
  }
</script>

<style>
  .login {
    background-color: rgb(239, 223, 202);
    padding: 60px;
    padding-left: 110px;
    padding-right: 110px;
    border-radius: 30px;
  }

  .login-title {
    font-size: 5em;
    margin-bottom: 80px;
    color: white;
    text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);

  }

  label {
    font-size: x-large;
  }

  input {
    border-radius: 15px;
    padding: 14px;
    margin: 10px;
    width: 280px;
    font-size: x-large;
    border-color: rgba(226, 226, 226, 0);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  }

  button {
    font-size: x-large;
    margin: 20px;
    margin-top: 40px;
    color: white;
    background-color: rgb(170, 142, 105);
    border-radius: 20px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border-color: rgb(170, 142, 105);
  }

  button:hover {
    background-color: rgb(142, 114, 79);
    box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.1);
    border-color: rgb(170, 142, 105);
  }


</style>
  