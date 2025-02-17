<template>
    <Background :isReversed="true">
      <div class="projects">
        <h1 class="hop-item">{{$t('projects.title')}}</h1>
        <hr class="hop-item">
        
        <!-- Dynamische Projektsliste mit v-for -->
        <div class="projects-list hop-item">
          <div v-for="(project, index) in projects" :key="index" class="project-container">
            <img :src="project.image" :alt="project.title" class="plantoji-bild" />
            <div class="project-text">
              <h2 class="plantoji-title">{{ project.title }}</h2>
              <hr class="linie" />
              <p>{{ project.description }}</p>
              <p v-for="(para, pIndex) in project.paragraphs" :key="pIndex">{{ para }}</p>
            </div>
          </div>
        </div>
  
        <Chatbot />
      </div>
    </Background>
  </template>
  
  <script setup>
  import Background from '../components/Background.vue'
  import Chatbot from '../components/Chatbot.vue'
  import { useHopAnimation } from '../utils/useHopAnimation.js'
  
  useHopAnimation()
  
  // Array von Projekten
  const projects = [
    {
      title: 'Plantoji Projekt',
      image: '/plantoji/bild1.png',
      description: 'Das war ein Projekt, den ich im Sommer 2024 mit einer Partnerin durchgeführt habe, wo es darum geht, dass Pflanzen physische als auch psychische Bedürfnisse haben.',
      paragraphs: ['blablab', 'blablab', 'blablab']
    },
    {
      title: 'Kiezkumpan',
      image: '/kiezkumpan/bild1.png',
      description: 'Beschreibung eines weiteren Projekts, das interessante Herausforderungen und Lösungen bietet.',
      paragraphs: ['Details hier', 'Mehr Details hier', 'Abschluss']
    },
  ]
  </script>
  
  <style scoped>
  .projects-list {
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 55px;
  }
  
  .project-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 20px;
    border: 1px solid #ececec;
    border-radius: 8px;
    background-color: #fafafa;
  }
  
  .plantoji-title {
    font-size: 2.5em;
    margin: 0;
    color: rgb(42, 139, 139);
  }
  
  .project-text {
    flex-basis: 30%;
    color: rgb(42, 139, 139);
    font-size: 1.5em;
    flex-grow: 1;
    max-width: 600px; 
  }
  
  .p {
    font-size: 1.5em;
    padding-right: 70px;
    max-width: 900px;
    margin: 0;

  }
  
  .plantoji-bild {
    width: 25%;
    height: auto;
    object-fit: cover;
    padding-left: 30px;
  }
  
  .linie {
    background-color: rgb(42, 139, 139);
    border: none;
    width: 15em;
    height: 2.5px;
    margin: 0 220px;
    opacity: 0.7;
    margin-bottom: 30px;
  }
  </style>
  