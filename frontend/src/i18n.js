import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    login: {
      title: 'Login',
      email: 'E-Mail',
      password: 'Password',
      submit: 'Login',
      error: 'Login failed. Please check your credentials.',
      noAccount: 'No account yet? Then',
      register: 'register here!',
    },
    header: {
        home: 'Homepage',
        projects: 'Projects',
        about: 'About me',
    },
    projects: {
        title: 'My Projects'
    },
    register: {
        title: 'Register',
        text: 'Please register to see my website :)',
        error: 'Registration failed',
        success: 'Registration successful! Please log in.',
        email: 'E-Mail',
        password: 'Password',
        submit: 'register',
        login: 'Already have an account? Then '
    },
    home: {
        title: 'Hello, I am Gizem :)',
        position1: 'Frontend-Developer',
        position2: 'UI/UX Designer',
        position3: 'Web- and App-Developer',
        loginMsg1: 'Hi there',
        loginMsg2: '!',
        loginMsg3: 'You are logged in.',
        logoutBtn: 'Logout',   
        skillText: 'I have worked with',
    },
    about: {
        title: 'About me',
        textTitle: 'About me ^^',
        text1: 'I am Gizem, a current student at the University of Applied Sciences for Business and Technology. I am currently an intern at ',
        youcan: 'YouCan!.',
        text2: 'I have been drawing, painting, and designing for as long as I can remember. At the same time, I have a strong interest in technology and creating or designing things.',
        text3: ' As a Frontend Developer, I can combine both passions.',
        text4: 'Everything I have programmed or designed so far can be found under my projects and on my ',
        github: 'Github',
        randomfactsTitle: 'Random Facts',
        randomfactsText1: 'I love eating sweets',
        randomfactsText2: 'I played the piano for three years (I’ve probably forgotten it by now)',
        randomfactsText3: 'Learning languages is addictive',
        randomfactsText4: 'I’m a book junkie and have already read 15 books in 2024 - so far!!',
  },
  },

  de: {
    login: {
      title: 'Anmelden',
      email: 'E-Mail',
      password: 'Passwort',
      submit: 'Anmelden',
      error: 'Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.',
      noAccount: 'Noch kein Konto? Dann',
      register: 'hier registrieren! :)',
    },
    header: {
        home: 'Startseite',
        projects: 'Projekte',
        about: 'Über mich',
    },
    projects: {
        title: 'Meine Projekte'
    },
    register: {
        title: 'Registrieren',
        text: 'Registriere dich bitte hier, um meine Webseite zu sehen :)',
        error: 'Registrierung fehlgeschlagen',
        success: 'Registrierung erfolgreich! Bitte melde dich an.',
        email: 'E-Mail',
        password: 'Passwort',
        submit: 'registrieren',
        login: 'Du hast schon ein Konto? Dann '

    },
    home: {
        title: 'Hallo, Ich bin Gizem :)',
        position: 'Frontend-Developer | UI/UX Designer | Web- and App-Developer',
        loginMsg1: 'Hallihallo ',
        loginMsg2: '!',
        loginMsg3: 'Du bist angemeldet.',
        logoutBtn: 'Abmelden',   
        skillText: 'Ich habe gearbeitet mit',
    },
    about: {
      title: 'Über mich',
      textTitle: 'Über mich ^^',
      text1: 'Ich bin Gizem, eine aktuelle Studentin an der Hochschule für Wirtschaft und Technik. Gerade bin ich Praktikantin an dem ',
      youcan: 'YouCan!',
      text2: 'Ich zeichne, male und gesalte seit ich denken kann. Gleichzeitig habe ich großes Interesse an Technologie und daran etwas zu entwerfen oder zu kreieren.',
      text3: 'Mit der Tätigkeit als Frontend-Developer ist mir beides möglich. ',
      text4: ' Alles was ich bis jetzt so programmiert oder gestaltet habe, findet ihr unter meinen Projekten und in meinem ',
      github: 'Github',
      randomfactsTitle: 'Random Facts',
      randomfactsText1: 'Ich esse gerne Süßes',
      randomfactsText2: 'Habe drei Jahre Klavier gespielt (Habe es mittlerweile bestimmt verlernt)',
      randomfactsText3: 'Sprachen lernen macht süchtig',
      randomfactsText4: 'Bin ein Bookjunkie und habe allein in 2024 15 Bücher gelesen - noch!!',
  },
  }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', 
    fallbackLocale: 'en',
    messages,
})

export default i18n
