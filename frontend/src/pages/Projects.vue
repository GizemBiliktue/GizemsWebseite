<template>
    <Background :isReversed="true">
        <div class="projects">
            <h1>{{$t('projects.title')}}</h1>
            <hr/>
        </div>
    </Background>
</template>

<script setup>
import Background from '../components/Background.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'


</script>

<style scoped>
</style>