<template>
    <Background :isReversed="false">
        <div class="about">
            <h1>{{$t('about.title')}}</h1>
            <hr>
            <div class="introduction">
                <div class="text-section">
                    <h3>{{$t('about.textTitle')}}</h3>
                    <hr class="linie"/>
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
                <hr class="randomfacts-linie">
                <p><i class="fas fa-candy-cane"></i>{{$t('about.randomfactsText1')}}</p>
                <p><i class="fas fa-music"></i>{{$t('about.randomfactsText2')}}</p>
                <p><i class="fas fa-language"></i>{{$t('about.randomfactsText3')}}</p>
                <p><i class="fas fa-book"></i>{{$t('about.randomfactsText4')}}</p>
            </div>
            <div class="slideshow-container">
                <div class="slides fade">
                    <img src="/landscape/tempelhof.jpg" style="width:100%">
                    <div class="caption">{{$t('about.imgTempelhof')}}</div>
                </div>
                <div class="slides fade">
                    <img src="/landscape/britzergarten.png" style="width:100%">
                    <div class="caption">{{$t('about.imgBritzergarten')}}.</div>
                </div>
                <div class="slides fade">
                    <img src="/landscape/see.png" style="width:100%">
                    <div class="caption">{{$t('about.imgSee')}}</div>
                </div>

                <a class="prev" @click="plusSlides(-1)">&#10094;</a>
                <a class="next" @click="plusSlides(1)">&#10095;</a>
            </div>
        </div>
    </Background>
</template>

<script setup>
import Background from '../components/Background.vue';
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { ref, onMounted } from 'vue';

let slideIndex = ref(1);

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex.value = 1}
    if (n < 1) {slideIndex.value = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex.value-1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex.value += n);
}

onMounted(() => {
    showSlides(slideIndex.value);
});
</script>

<style scoped>

.linie {
    background-color: rgb(196, 187, 171);
    border: none;
    width: 15em;
    height: 2.5px;
    margin: 20px 0; 
    opacity: 0.7; 
    margin-bottom: 30px;
}

.randomfacts-linie {
    background-color: rgb(255, 255, 255);
    border: none;
    height: 2.5px;
    opacity: 0.4; 
    margin-bottom: 35px;
    align-self: center;
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
    background-color: transparent;
    align-items: center;
    margin-left: 30px;
    margin-top: 50px;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 3px 3px 10px rgb(44, 44, 44);
    padding-bottom: 30px;
    margin-bottom: 30px;
    max-width: 700px;
}

.randomfacts h3{
    color: white;
    font-size: 3em;
}

.randomfacts p{
    color: white;
    font-size: 1.5em;
    text-align: left; 
    max-width: 550px; 
    margin: 30px; 
    margin-left: 90px;
    align-items: center;
}

.randomfacts p i {
    margin-right: 10px; 
    color: white; 
    font-size: 1.2em; 
}

.slideshow-container {
    position: relative;
    max-width: 85%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

.slideshow-container img {
    max-height: 65em;
    border-radius: 40px;
}

.slides {
    display: none;

}

.fade {
    animation-name: fade;
    animation-duration: 2.5s;

}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: rgba(255, 255, 255, 0.681);
    font-weight: bold;
    font-size: 38px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    transform: translateY(-50%); 
    opacity: 0.9; 
}

.prev {
    left: 10px; 
}

.next {
    right: 10px; 
}

.prev:hover, .next:hover {
    transform: translateY(-45%) scale(1.5);
}

.caption {
    position: absolute;
    bottom: 7px; 
    background-color: rgba(255, 255, 255, 0.731); 
    width: 354px;
    color: rgb(13, 62, 66);
    padding: 10px 20px;
    text-align: center;
    font-size: 1.2em;
    border-radius: 10px; 
    opacity: 0.9; 
    border-top-right-radius: 30px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 40px;

}

</style>