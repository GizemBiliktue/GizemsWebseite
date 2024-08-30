<template>
    <select v-model="$i18n.locale" class="language-switcher">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcher'
  }
  </script>
  
  <style scoped>
  .language-switcher {
    background-color: rgb(224, 199, 170);
    color: white;
    border: none;
    font-size: large;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
  }
  
  .language-switcher:hover {
    background-color: rgb(214, 168, 88);
  }
  </style>
  