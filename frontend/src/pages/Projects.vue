<template>
    <Background :isReversed="true">
        <div class="projects">
            <h1 class="hop-item" >{{$t('projects.title')}}</h1>
            <hr class="hop-item">
            <div class="projects hop-item">
            <div class="project-img-text">
                <img src="/plantoji/bild1.png" alt="plantojibild" class="plantoji-bild"/>
                <diV class="project-text">
                    <h2 class="projects-title">Plantoji Projekt</h2>
                    <hr class="linie"/>
                    <p>Das war ein Projekt, den ich im Sommer 2024 mit einer Partnerin durchegführt habe, wo es darum geht, dass Pflanzen physische als auch psychische Bedürfnisse haben.</p>
                    <p>blablab</p>
                    <p>blablab</p>
                    <p>blablab</p>
                </diV>
            </div>
        </div>
        <Chatbot/>
        </div>
    </Background>
</template>

<script setup>
import Background from '../components/Background.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import {useHopAnimation} from '../utils/useHopAnimation.js'
import Chatbot from '../components/Chatbot.vue';

useHopAnimation()

</script>

<style scoped>

.project-img-text {
    background-color: white;
    height: 900px;
    display: flex;
}

.projects-title, p {
    color: rgb(42, 139, 139);
    text-shadow: none;
    text-align: left;
    padding-left: 70px;
}

p {
    font-size: 1.5em;
    padding-right: 70px;
    max-width: 900px;
}

.plantoji-bild {
    height: 900px;
    padding-left: 80px;
}

.linie {
    background-color: rgb(42, 139, 139);
    border: none;
    width: 15em;
    height: 2.5px;
    margin: 0 70px; 
    opacity: 0.7; 
    margin-bottom: 30px;
}
</style>