<script setup>
import { useRouter } from 'vue-router'
import Background from '../components/Background.vue'
import {onMounted} from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { useHopAnimation } from '../utils/useHopAnimation.js';
import Chatbot from '../components/Chatbot.vue';


  const router = useRouter()


  useHopAnimation();

</script>

<template>
  <Background :isReversed="false">
    <div class="home">
      <h1 class="hop-item">{{ $t('home.title') }}</h1>
      <h4 class="hop-item">{{ $t('home.position1') }}<span class="divider">|</span>{{ $t('home.position2') }}<span class="divider">|</span>{{ $t('home.position3') }}</h4>
      <hr class="hop-item">
      <div class="skills hop-item">
        <h2>{{ $t('home.skillText') }}</h2>
        <ul>
          <li>
            <img src="../assets/ikons/html.svg" alt="html" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/css.svg" alt="css" class="programming-icon" />
          </li><li>
            <img src="../assets/ikons/java.svg" alt="java" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/javascript.svg" alt="javascript" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/react.svg" alt="react" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/vue.svg" alt="vue" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/python.svg" alt="python" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/figma.svg" alt="figma" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/swift.svg" alt="swift" class="programming-icon" />
          </li>
          <li>
            <img src="../assets/ikons/xcode.svg" alt="xcode" class="programming-icon" />
          </li>
        </ul>
      </div>

      <Chatbot/>
    </div>
  </Background>
</template>

<style scoped>
body, html {
  overflow-x: hidden;
}

.divider {
  padding: 15px;
}
.home {
  box-sizing: border-box;
  width: 100%;
}

.skills h2 {
  color: rgb(157, 157, 157);
  font-size: 35px;
  margin: 0 auto;
  letter-spacing: 2px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding-bottom: 30px;
  text-shadow: 0px 5px 7px rgba(145, 145, 145, 0.2);

}

h4 {
  font-size: 2em;
  color: white;
  text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);

}

hr {
  width: 100%;
  margin-bottom: 30px;
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
  max-width: 100%;
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

.login-logout {
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.342);
  border-radius: 30px;
  max-width: 35%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 40px
}

.home p {
  font-size: 1.5em;
}

</style>
