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
        text1: 'I am Gizem, a current student at the University of Applied Sciences for Business and Technology located in Berlin, Germany. I am currently an intern at ',
        youcan: 'YouCan!.',
        text2: 'I have been drawing, painting, and designing for as long as I can remember. At the same time, I have a strong interest in technology and creating or designing things.',
        text3: ' As a Frontend Developer, I can combine both passions.',
        text4: 'Everything I have programmed or designed so far can be found under my projects and on my ',
        github: 'Github',
        randomfactsTitle: 'Random Facts',
        randomfactsText1: 'I love eating sweets (especially chocolate)',
        randomfactsText2: 'I played the piano for three years (I’ve probably forgotten it by now)',
        randomfactsText3: 'Learning languages is addictive',
        randomfactsText4: 'I’m a book junkie and have already read 15 books in 2024 - yet!!',
        hobbyTitle: 'Hobbies',
        hobbyText1: 'I love reading',
        hobbyText2: 'drawing and painting',
        hobbyText3: 'Riding the bicycle gives me a feeling of freedom',
        hobbyText4: 'Baking banana bread (or others)',
        hobbyText5: 'Spending time with family and friends',
        bioTitle: 'Biographie',
        bioText1: 'I was born, raised and went to school in Berlin (Germany)',
        bioText2: 'My parents are both from Türkiye',
        bioText3: 'My surname comes from Kyrgyzstan and means: intelligent',
        bioText4: 'I am studying Applied Computing for my Bachelors',

        captions: {
          vertical: [
            "Antike Landschaft",
            "Dunkelblaues Thema",
            "Burg am Wasser",
            "Blick auf Giresun",
            "Schöne Landschaft",
            "Marienburg Schloss",
            "Rosa Schloss",
            "Weißes Gebäude",
            "Meeresblick",
          ],
          horizontal: [
            "Britzer Garten, Berlin: just one out of many seas there",
            "Duisburg, Nordrhein-Westfalen",
            "Flughafen Tempelhof, Berlin: famous for its grilling",
            "Mariendorf Landschaft",
            "Zwei Gebäude",
          ],
        }
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
      text1: 'Ich bin Gizem, eine aktuelle Studentin an der Hochschule für Wirtschaft und Technik Berlin, Deutschland. Gerade bin ich Praktikantin an dem ',
      youcan: 'YouCan!',
      text2: 'Ich zeichne, male und gesalte seit ich denken kann. Gleichzeitig habe ich großes Interesse an Technologie und daran etwas zu entwerfen oder zu kreieren.',
      text3: 'Mit der Tätigkeit als Frontend-Developer ist mir beides möglich. ',
      text4: ' Alles was ich bis jetzt so programmiert oder gestaltet habe, findet ihr unter meinen Projekten und in meinem ',
      github: 'Github',
      randomfactsTitle: 'Random Fakten',
      randomfactsText1: 'Ich esse gerne Süßes (insbesondere Schokolade)',
      randomfactsText2: 'Habe drei Jahre Klavier gespielt (Habe es mittlerweile bestimmt verlernt)',
      randomfactsText3: 'Sprachen lernen macht süchtig',
      randomfactsText4: 'Bin ein Bookjunkie und habe allein in 2024, 15 Bücher gelesen - noch!!',
      hobbyTitle: 'Hobbies',
      hobbyText1: 'Ich liebe es zu lesen',
      hobbyText2: 'Zeichnen und Malen',
      hobbyText3: 'Fahrradfahren gibt mir ein Gefühl von Freiheit',
      hobbyText4: 'Bananenbrot (oder auch anderes) backen',
      hobbyText5: 'Zeit mit Familie und Freunde verbringen',
      bioTitle: 'Biographie',
      bioText1: 'Ich bin in Berlin (Deutschland) geboren, aufgewachsen und in die Schule gegangen',
      bioText2: 'Meine Eltern kommen beide aus der Türkei',
      bioText3: 'Mein Nachname kommt aus Kirgistan und bedeutet: intelligent',
      bioText4: 'Ich studiere Angewandte Informatik im Bachelor',

      captions: {
        vertical: [
          "Antike Landschaft",
          "Dunkelblaues Thema",
          "Burg am Wasser",
          "Blick auf Giresun",
          "Schöne Landschaft",
          "Marienburg Schloss",
          "Rosa Schloss",
          "Weißes Gebäude",
          "Meeresblick",
        ],
        horizontal: [
          "Britzer Garten, Berlin: nur einer von vielen Seen dort",
          "Duisburg, Nordrhein-Westfalen",
          "Flughafen Tempelhof, Berlin: Beliebt fürs Grillen",
          "Mariendorf Landschaft",
          "Zwei Gebäude",
        ],
      }
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
