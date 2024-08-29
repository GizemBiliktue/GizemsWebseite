<template>
  <Background :isReversed="false">
    <div class="login">
      <h2 class="login-title">Login</h2>
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
      <p>Doch kein Account? Dann <router-link class="register-link" to="/register">registriere dich!</router-link> :)</p>
    </div>
  </Background>
  </template>
  
<script setup>
import { useAuthStore } from '../store/auth'
import Background from '../components/Background.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const authStore = useAuthStore()
const router = useRouter()


const email = ref()
const password = ref()
const error = ref()

const login = async () => {
  await authStore.login(email.value, password.value, router)
  if (!authStore.isAuthenticated){
    error.value = 'Login failed. Please check your credentials.'
  }
}
      
const resetError = () => {
  error.value = ""
}
  
</script>

<style>
  .login {
    background-color: rgb(239, 223, 202);
    padding: 60px;
    padding-left: 110px;
    padding-right: 110px;
    margin-top: 250px;
  }

  h2 {
    font-size: 5em;
    margin-bottom: 80px;
    color: white;
    text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);

  }

  .login p {
  font-size: 1.5em;
  margin-bottom: 50px;
  text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);

}

.register-link{
  color: rgb(235, 235, 235);
  cursor: pointer;
  background-color: rgb(210, 184, 151);
  padding: 5px;
  border-radius: 10px;
}

.register-link:hover{
  color: rgb(255, 255, 255);
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
  