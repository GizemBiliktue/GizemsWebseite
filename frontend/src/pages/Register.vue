<template>
  <Background :isReversed="false">
      <div class="register">
        <LanguageSwitcher/>
        <h2>{{$t('register.title')}}</h2>
        <p>{{$t('register.text')}}</p>
        <form @submit.prevent="register" >
          <div>
            <input v-model="email" id="email" type="email" :placeholder="$t('register.email')" required>
          </div>
          <div>
            <input v-model="password" id="password" type="password" :placeholder="$t('register.password')" required>
          </div>
          <button type="submit">{{$t('register.submit')}}</button>
        </form>
        <p v-if="error">{{$t('register.error')}}</p>
        <p v-if="success">{{$t('register.success')}}</p>
        <p>{{$t('register.login')}}<router-link class="login-link" to="/login">login</router-link> :)</p>
      </div>
    </Background>
  </template>
  
<script setup>
import { getCSRFToken } from '../store/auth'
import Background from '../components/Background.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'


const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const router = useRouter()

const register = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken()
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      success.value = 'Registration successful! Please log in.'
      setTimeout(() => {
        router.push('/login')
      }, 1000)
    } else {
      error.value = data.error || 'Registration failed'
    }
  } catch (err) {
    error.value = 'An error occurred during registration: ' + err
  }
}
</script>
  

<style scoped>
.register {
    background-color: rgb(210, 184, 151);
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

.register p {
  font-size: 1.5em;
  margin-bottom: 50px;
  text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);

}

.login-link{
  color: rgb(113, 113, 113);
  cursor: pointer;
  background-color: rgb(239, 223, 202);
  padding: 5px;
  border-radius: 10px;
}

.login-link:hover{
  color: rgb(162, 162, 162);
}
</style>