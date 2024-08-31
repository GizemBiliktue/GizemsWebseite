<template>
    <div class="language-switcher">
        <img 
        src="../assets/england.svg" 
        alt="English" 
        v-if="$i18n.locale === 'en'" 
        @click="changeLanguage('de')" 
        class="flag-icon"
        />
        <img 
        src="../assets/germany.svg" 
        alt="Deutsch" 
        v-if="$i18n.locale === 'de'" 
        @click="changeLanguage('en')" 
        class="flag-icon"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcher',
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
    }
  }
  }
  </script>
  
  <style scoped>
  .language-switcher {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 50px;
}
  
  .flag-icon {
    width: 35px; 
    height: 35px;
    margin-left: 10px;
    transition: transform 0.3s;

}

.flag-icon:hover {
    transform: scale(1.1); 
}

</style>
  