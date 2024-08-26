<script>
import { useAuthStore } from '../store/auth.js'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    return {
      authStore, router
    }
  },
  methods: {
    async logout() {
      try {
        await this.authStore.logout(this.$router)
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted() {
    await this.authStore.fetchUser()
  }
}
</script>

<template>
  <div class="home">
    <h1>Hello, I am Gizem! :)</h1>
    <h4>Frontend-Developer | UI/UX Designer | Web- and App-Developer</h4>
    <div v-if="authStore.isAuthenticated">
      <p>Hi there {{ authStore.user?.username }}!</p>
      <p>You are logged in.</p>
      <button @click="logout">Logout</button>
    </div>
    <hr/>
    <div class="skills">
      <h2>I've worked with</h2>
      <ul>
        <li>
          <img src="../assets/html.svg" alt="html" class="programming-icon" />
        </li>
        <li>
          <img src="../assets/css.svg" alt="css" class="programming-icon" />
        </li><li>
          <img src="../assets/java.svg" alt="java" class="programming-icon" />
        </li>
        <li>
          <img src="../assets/javascript.svg" alt="javascript" class="programming-icon" />
        </li>
        <li>
          <img src="../assets/react.svg" alt="react" class="programming-icon" />
        </li>
        <li>
          <img src="../assets/vue.svg" alt="vue" class="programming-icon" />
        </li>
        <li>
          <img src="../assets/python.svg" alt="python" class="programming-icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
body, html {
  overflow-x: hidden;
}

.home {
  box-sizing: border-box;
  width: 100%;
}

h1 {
  font-size: 8em;
  text-shadow: 2px 2px 4px 7px black;
}

h2 {
  color: rgb(125, 125, 125);
  font-size: 35px;
  margin: 0 auto;
  letter-spacing: 4px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding-bottom: 30px;
}

h4 {
  font-size: 2em;
  color: white;
}

hr {
  width: 100%
}

ul {
  display:flex;
  text-decoration: none;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
} 

.skills {
  display: block;
  background-color: white;
  padding: 70px;
  align-items: center;
  border-radius: 40px;
  max-width: 98%;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid rgb(201, 201, 201);
  box-sizing: border-box;
}

.programming-icon {
  width: 110px;
  height: auto;
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;

}
</style>
