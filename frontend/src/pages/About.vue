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
                <div class="little-Facts">
                    <div class="facts">
                        <h3>{{$t('about.bioTitle')}}</h3>
                        <hr class="facts-linie">
                        <p>{{$t('about.bioText1')}}</p>
                        <p>{{$t('about.bioText2')}}</p>
                        <p>{{$t('about.bioText3')}}</p>
                        <p>{{$t('about.bioText4')}}</p>
                    </div>
                    <div class="facts">
                        <h3>{{$t('about.hobbyTitle')}}</h3>
                        <hr class="facts-linie">
                        <p><i class="fas fa-book-open-reader"></i>{{$t('about.hobbyText1')}}</p>
                        <p><i class="fas fa-palette"></i>{{$t('about.hobbyText2')}}</p>
                        <p><i class="fas fa-bicycle"></i>{{$t('about.hobbyText3')}}</p>
                        <p><i class="fas fa-bread-slice"></i>{{$t('about.hobbyText4')}}</p>
                    </div>
                    <div class="facts">
                        <h3>{{$t('about.randomfactsTitle')}}</h3>
                        <hr class="facts-linie">
                        <p><i class="fas fa-candy-cane"></i>{{$t('about.randomfactsText1')}}</p>
                        <p><i class="fas fa-music"></i>{{$t('about.randomfactsText2')}}</p>
                        <p><i class="fas fa-language"></i>{{$t('about.randomfactsText3')}}</p>
                        <p><i class="fas fa-book"></i>{{$t('about.randomfactsText4')}}</p>
                    </div>
                </div>
            <div class="bildergalerie">
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
    background-color: transparent;
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

.bildergalerie {
    background-color: rgba(216, 208, 193, 0.73);
    padding: 5em;
    padding-right: 1em;
    padding-left: 1em;
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
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.fade {
    animation-name: fade;
    animation-duration: 2.0s;

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
    bottom: 6.7px; 
    background-color: rgba(255, 255, 255, 0.731); 
    width: 500px;
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