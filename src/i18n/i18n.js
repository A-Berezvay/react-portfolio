import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          //Header
          "about": "About",
          "projects": "Projects",
          "contact": "Contact",
          //Home Page
          "title": "Welcome to my Portfolio",
          "introduction": "Aspiring Web Developer. To have a look at my work navigate to the \"Projects\" tab and browse. I always welcome constructive feedback so please get in touch if you have some.🤗",
          //About Page
          "my-journey": "My Journey",
          "my-journey-description": "Born and raised in Budapest, my journey began with an interest in hospitality, a field that I studied in secondary school. After graduation I tried my luck and moved to London to gain experience, meet new people and see other cultures. This experience proved to be transformative, leading to a realisation that my passion lies in digital web development. Motivated by this newfound interest I pursued a degree in Multimedia Design & Communication at IBA in Kolding, Denmark. As soon as I’ve was introduced to the world of coding, I’ve been building not only smaller pages, but a bigger dream of getting a Job in IT in the near future.",
          //Projects Page
          "project1": "Website Development for Natalie",
          "project overview": "Project overview",
          "challange": "Challange",
          "solution": "Solution",
          "result": "Result",
          "reflection": "Reflection",
        }
      },
      hu: {
        translation: {
          //Header
          "about": "Rólam",
          "projects": "Projektek",
          "contact": "Kapcsolat",
          // Home Page 
          "title": "üdv a portfóliomon",
          "introduction": "Törekvő webfejlesztő. Ha meg szeretnéd nézni a munkáimat, navigálj a \"Projektek\" fülre és böngéssz. Mindig szívesen fogadom az építő jellegű visszajelzéseket, szóval kérlek, vedd fel velem a kapcsolatot, ha van valami. 🤗",
          //About page
          "my-journey": "Történetem",
          "my-journey-description": "Budapesten születtem és nőttem fel, az utam pedig a vendéglátás iránti érdeklődéssel kezdődött, amelyet középiskolában tanultam. Az érettségi megszerzése után kipróbáltam a szerencsémet, és Londonba költöztem, hogy tapasztalatot szerezzek, új emberekkel találkozzak és más kultúrákat ismerjek meg. Ez az élmény sorsfordítónak bizonyult, mivel rájöttem, hogy a szenvedélyem a digitális webfejlesztésben rejlik. Az új érdeklődésem ösztönzött, hogy a dániai Koldingban, az IBA-n szereztem diplomát Multimédia tervezés és kommunikáció szakon. Amint megismerkedtem a programozás világával, nemcsak kisebb oldalakat kezdtem építeni, hanem egy nagyobb álmot is, hogy a közeljövőben munkát szerezzek az IT területén.",
          //Projects Page
          "project1": "Weboldal fejlesztés Natalie-nak",
          "project overview": "Projekt áttekintés",
          "challange": "Kihivás",
          "solution": "Megoldás",
          "result": "Eredmény",
          "reflection": "Reflektálás",
        }
      }
    },
    lng: "en", // language to use
    fallbackLng: "en", // use en if detected lng is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
