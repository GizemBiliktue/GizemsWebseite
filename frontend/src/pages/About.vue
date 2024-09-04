<template>
    <Background :isReversed="false">
        <div class="about">
            <h1 class="hop-item">{{$t('about.title')}}</h1>
            <div class="introduction hop-item">
                <img src="/gizem.png" alt="aboutbild" class="about-bild"/>
                <div class="text-section hop-item">
                    <h3>{{$t('about.textTitle')}}</h3>
                    <hr class="linie"/>
                    <p>{{$t('about.text1')}} <a class="youcan-link" href='https://youcan-app.de' target="_blank">{{$t('about.youcan')}}</a></p>
                    <hr/>
                    <p>{{$t('about.text2')}}</p>
                    <p>{{$t('about.text3')}}</p>
                    <hr/>
                    <p>{{$t('about.text4')}}<a class="github-link" href="https://github.com/GizemBiliktue" target="_blank">{{$t('about.github')}}</a></p>
                </div>
            </div>

            <div class="little-Facts hop-item">
                <div class="facts">
                    <h3>{{$t('about.hobbyTitle')}}</h3>
                    <hr class="facts-linie">
                    <p><i class="fas fa-book-open-reader"></i>{{$t('about.hobbyText1')}}</p>
                    <p><i class="fas fa-palette"></i>{{$t('about.hobbyText2')}}</p>
                    <p><i class="fas fa-bicycle"></i>{{$t('about.hobbyText3')}}</p>
                    <p><i class="fas fa-bread-slice"></i>{{$t('about.hobbyText4')}}</p>
                    <p><i class="fas fa-heart"></i>{{$t('about.hobbyText5')}}</p>
                </div>
                <div class="bio-facts hop-item">
                    <h3>{{$t('about.bioTitle')}}</h3>
                    <hr class="facts-linie">
                    <p>{{$t('about.bioText1')}}</p>
                    <p>{{$t('about.bioText2')}}</p>
                    <p>{{$t('about.bioText3')}}</p>
                    <p>{{$t('about.bioText4')}}</p>
                </div>
                <div class="facts hop-item">
                    <h3>{{$t('about.randomfactsTitle')}}</h3>
                    <hr class="facts-linie">
                    <p><i class="fas fa-candy-cane"></i>{{$t('about.randomfactsText1')}}</p>
                    <p><i class="fas fa-music"></i>{{$t('about.randomfactsText2')}}</p>
                    <p><i class="fas fa-language"></i>{{$t('about.randomfactsText3')}}</p>
                    <p><i class="fas fa-book"></i>{{$t('about.randomfactsText4')}}</p>
                </div>
            </div>

            <div class="image-gallery-container hop-item">
                <div class="vertical-gallery hop-item">
                <div class="slideshow-container">
                    <div class="slides-vertical fade" v-for="(image, index) in verticalImages" :key="index">
                    <img :src="image.src" :alt="image.alt" class="vertical-image" />
                    <div class="caption">{{ $t(`about.captions.vertical.${index}`) }}</div>
                    </div>
                    <a class="prev" @click="changeSlide(-1, 'vertical')">&#10094;</a>
                    <a class="next" @click="changeSlide(1, 'vertical')">&#10095;</a>
                </div>
                </div>

                <div class="horizontal-gallery hop-item">
                <div class="slideshow-container">
                    <div class="slides-horizontal fade" v-for="(image, index) in horizontalImages" :key="index">
                    <img :src="image.src" :alt="image.alt" class="horizontal-image" />
                    <div class="caption">{{ $t(`about.captions.horizontal.${index}`) }}</div>
                    </div>
                    <a class="prev" @click="changeSlide(-1, 'horizontal')">&#10094;</a>
                    <a class="next" @click="changeSlide(1, 'horizontal')">&#10095;</a>
                </div>
                </div>
            </div>
        </div>
    </Background>
</template>

<script setup>
import Background from '../components/Background.vue';
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { ref, onMounted } from 'vue';
import { useHopAnimation } from '../utils/useHopAnimation.js';

const verticalImages = ref([
    { src: '/landscape/antik.png', alt: 'Antik'},
    { src: '/landscape/dunkelblau.png', alt: 'Dunkelblau'},
    { src: '/landscape/burgWasser.png', alt: 'Burgwasser'},
    { src: '/landscape/giresun.png', alt: 'Giresun'},
    { src: '/landscape/landschaft.png', alt: 'Landschaft'},
    { src: '/landscape/marienburg.png', alt: 'Marienburg'},
    { src: '/landscape/pinkerSchloss.png', alt: 'PinkerSchloss'},
    { src: '/landscape/weisesGebaude.png', alt: 'WeisesGebaude'},
    { src: '/landscape/meer.png', alt: 'Meer'}

]);

const horizontalImages = ref([
    { src: '/landscape/britzergarten.png', alt: 'Britzergarten'},
    { src: '/landscape/see.png', alt: 'See'},
    { src: '/landscape/tempelhof.jpg', alt: 'Tempelhof'},
    { src: '/landscape/mariendorf.jpg', alt: 'Mariendorf'},
    { src: '/landscape/zweiGebauden.png', alt: 'ZweiGebauden'}

]);

const slideIndexVertical = ref(1);
const slideIndexHorizontal = ref(1);

function showSlides(n, gallery) {
    let slides;
    if (gallery === 'vertical') {
        slides = document.getElementsByClassName("slides-vertical");
        if (n > slides.length) { slideIndexVertical.value = 1; }
        if (n < 1) { slideIndexVertical.value = slides.length; }
    } else {
        slides = document.getElementsByClassName("slides-horizontal");
        if (n > slides.length) { slideIndexHorizontal.value = 1; }
        if (n < 1) { slideIndexHorizontal.value = slides.length; }
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (gallery === 'vertical') {
        slides[slideIndexVertical.value - 1].style.display = "block";
    } else {
        slides[slideIndexHorizontal.value - 1].style.display = "block";
    }
}

function changeSlide(n, gallery) {
    if (gallery === 'vertical') {
        showSlides(slideIndexVertical.value += n, 'vertical');
    } else {
        showSlides(slideIndexHorizontal.value += n, 'horizontal');
    }
}

useHopAnimation();

onMounted(() => {
    showSlides(slideIndexVertical.value, 'vertical');
    showSlides(slideIndexHorizontal.value, 'horizontal');
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

.facts-linie {
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
    flex-wrap: wrap;
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
    margin-right: 11em;
    object-fit: cover;
}

.text-section {
    flex: 1;
    margin-right: 15em;
    margin-left: 15em;
    text-align: left;
}

.text-section h3{
    font-size: 2.5em;
    color: rgb(131, 123, 108);
    flex-basis: 70%;
}

.facts {
    background-color: rgba(180, 163, 141, 0.388);
    align-items: center;
    margin-left: 30px;
    margin-top: 50px;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    padding-bottom: 30px;
    margin-bottom: 30px;
    max-width: 700px;

}

.facts h3{
    color: white;
    font-size: 3em;
}

.facts p{
    color: white;
    font-size: 1.5em;
    text-align: left; 
    max-width: 550px; 
    margin: 30px; 
    margin-left: 90px;
    align-items: center;
}

.facts p i {
    margin-right: 10px; 
    color: white; 
    font-size: 1.2em; 
}

.bio-facts {
    background-color: rgba(255, 255, 255, 0.174);
    align-items: center;
    margin-left: 30px;
    margin-top: 50px;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    padding-bottom: 30px;
    margin-bottom: 30px;
    max-width: 800px;

}
.bio-facts h3{
    color: white;
    font-size: 3em;
}

.bio-facts p{
    color: white;
    font-size: 1.5em;
    text-align: left; 
    max-width: 550px; 
    margin: 30px; 
    margin-left: 90px;
    align-items: center;
}

.bio-facts p i {
    margin-right: 10px; 
    color: white; 
    font-size: 1.2em; 
}

.image-gallery-container {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    margin-top: 50px;
    background-color: rgb(255, 255, 255);
    padding: 11em;
}

.vertical-gallery,
.horizontal-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slideshow-container {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    margin-top: 20px;
}

.slideshow-container img {
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.vertical-image {
    width: 700px;
    height: 850px;
    object-fit: cover;
}

.image-gallery-container img {
    border-radius: 40px;

}

.horizontal-image {
    width: 1150px;
    height: 850px;
    object-fit: cover;

}


.caption {
    position: absolute;
    bottom: 7px; 
    background-color: rgba(255, 255, 255, 0.731); 
    width: auto;
    max-width: 400px;
    color: rgb(13, 62, 66);
    padding: 10px 20px;
    text-align: center;
    font-size: 1.5em;
    border-radius: 10px; 
    opacity: 0.9; 
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 40px;
    word-wrap: break-word; 
    white-space: normal;
}


/* Buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: rgba(255, 255, 255, 0.703);
    font-weight: bold;
    font-size: 45px;
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
    opacity: 1.9;
    transform: translateY(-40%);
    scale: 120%;
    color: rgb(255, 255, 255);

}

.little-Facts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; 
    flex-wrap: wrap; 
    margin-top: 20px;
    margin-bottom: 30px;

}


</style>