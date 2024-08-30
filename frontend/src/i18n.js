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
    }
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
    }
  }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', 
    fallbackLocale: 'en',
    messages,
})

export default i18n
