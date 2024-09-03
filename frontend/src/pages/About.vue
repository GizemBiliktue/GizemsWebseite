<template>
    <Background :isReversed="false">
        <div class="about">
            <h1>{{$t('about.title')}}</h1>
            <hr/>
            <div class="introduction">
                <div class="text-section">
                    <h3>{{$t('about.textTitle')}}</h3>
                    <p>{{$t('about.text1')}} <router-link class="youcan-link" to='https://youcan-app.de'>{{$t('about.youcan')}}</router-link></p>
                    <hr/>
                    <p>{{$t('about.text2')}}</p>
                    <p>{{$t('about.text3')}}</p>
                    <hr/>
                    <p>{{$t('about.text4')}}<router-link class="github-link" to="https://github.com/GizemBiliktue">{{$t('about.github')}}</router-link></p>
                </div>
                <img src="/gizem.png" alt="aboutbild" class="about-bild"/>
            </div>
            <div class="randomfacts">
                <h3>{{$t('about.randomfactsTitle')}}</h3>
                <p>{{$t('about.randomfactsText1')}}</p>
                <p>{{$t('about.randomfactsText2')}}</p>
                <p>{{$t('about.randomfactsText3')}}</p>
                <p>{{$t('about.randomfactsText4')}}</p>
            </div>
        </div>
    </Background>
</template>

<script setup>
import Background from '../components/Background.vue';
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

</script>

<style scoped>

body, html {
}

.youcan-link {
    color: rgb(131, 123, 108);
}

.youcan-link:hover {
    color: rgb(65, 116, 129);
}

.github-link {
    color: rgb(131, 123, 108);
}

.github-link:hover {
    color: rgb(66, 63, 63);
}

.introduction {
    background-color: white;
    padding: 100px;
    overflow: hidden;
    display: flex;
    align-items:center;
}

.introduction p {
    display: contents;
    color: rgb(131, 123, 108);
    font-size: 1.5em;
}

.about-bild {
    flex-basis: 25%;
    width: 10em;
    float: right;
    margin-right: 30px;
    object-fit: cover;
}

.text-section {
    flex: 1;
    margin-right: 100px;
    margin-left: 4em;
    text-align: left;
}

.text-section h3{
    font-size: 2.5em;
    color: rgb(131, 123, 108);
    flex-basis: 70%;
}

.randomfacts {
    background-color: rgb(56, 141, 150);
    width: 60em;
    margin-left: 30px;
    margin-top: 20px;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 3px 3px 10px rgb(44, 44, 44);
    padding-bottom: 30px;
    margin-bottom: 30px;
}

.randomfacts h3{
    color: white;
    font-size: 3em;
}

.randomfacts p{
    color: white;
    font-size: 1.5em;
}
</style>