<template>
    <Background :isReversed="true">
        <div class="projects">
            <div class="projects hop-item">
            <h1 class="hop-item" >{{$t('projects.title')}}</h1>
            <hr class="hop-item">
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
</style>