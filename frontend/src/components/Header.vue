<template>
    <header>
        <div class="left-section">
            <router-link to="/about">
                <img src="/gizem.png" alt="headerbild" class="header-bild"/>
            </router-link>
            <h5><router-link to="/">Gizem Biliktü</router-link></h5>
        </div>
        <div class="header-container">
            <nav>
                <ul>
                    <div class="li-text">
                        <li><router-link to="/">{{$t('header.home')}}</router-link></li>
                        <li><router-link to="/projects">{{$t('header.projects')}}</router-link></li>
                        <li><router-link to="/about">{{$t('header.about')}}</router-link></li>
                    </div>
                    <li>
                        <a href="https://github.com/GizemBiliktue" target="_blank">
                        <img src="../assets/github.svg" alt="GitHub" class="social-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gizem-biliktü-48073b262/" target="_blank">
                            <img src="../assets/linkedin.svg" alt="LinkedIn"  class="social-icon"/>
                        </a>
                    </li>
                    <li>
                        <LanguageSwitcher/>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow-y: hidden;

}

header {
    font-family: 'Times New Roman', Times, serif;
    position:fixed;
    background-color: rgb(224, 199, 170);
    color: white;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-shadow: inset;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.left-section {
  display: flex;
  align-items: center;
  margin-left: 3em;
}



img {
    height: 75px; 
    width: auto;    
    margin-right: 30px;
    object-fit: cover;
}

img:hover {
    filter: brightness(0.8);
    transition: filter 0.4s ease;
}

.left-section h5 a {
    letter-spacing: 1px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: white;
    text-decoration: none;
    font-size: 2.2em;
    font-weight: 200;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;

}

.li-text{
    text-align: center;
    display: inline-block;
    background-color: rgb(224, 199, 170);
    padding: 0;
    display: flex;
}

main {
  padding-top: 4rem; 
}

.li-text a {
    letter-spacing: 2px;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    padding: 32px;
    font-size: x-large;
    box-sizing: border-box;
}

.li-text a:hover{
    background-color: white;
    color: rgb(214, 168, 88);
    transition: background-color 1.0s ease;
}


.social-icon {
    width: 27px;
    height: 27px;
    transition: opacity 1.0s ease, filter 1.0s ease;
    cursor: pointer;
    margin-left: 2em;
    margin-right: 3em;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    flex-wrap: wrap;
}

.social-icon:hover {
    filter: invert(72%) sepia(68%) saturate(553%) hue-rotate(357deg) brightness(97%) contrast(92%);
    opacity: 0.7;
}

.language-switcher {
    margin-left: 2em;
    color: white;
    border: none;
    font-size: large;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
}
</style>