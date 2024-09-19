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
          /* Natalie project */
          "project1": "Website Development for Natalie",
          "project overview": "Project overview",
          "challenge": "Challenge",
          "solution": "Solution",
          "result": "Result",
          "Natalie overview": "Natalie is an English-Italian translator who needed help integrating a language selector into her existing website.",
          "Natlaie challenge": "The site needed to allow users to switch seamlessly between English and Italian, enhancing accessibility and user experience.",
          "Natalie solution": "Implemented a dynamic language selector using JavaScript that updates text elements on the page.",
          "Natalie result": "The new feature has improved user engagement and broadened the site’s audience. Natali reported increased satisfaction from her international clients.",
          "Natalie button": "Need help with your website? Let’s talk!",
          /* AT Digital Consultancy project */
          "project2": "Building an Agency",
          "AT overview": "Co-Founded a digital transformation and web development agency to fill a market gap for comprehensive digital services.",
          "AT challenge": "To create a robust, scalable website that showcases our services and attracts potential clients.",
          "AT solution": "Developed the site using HTML, CSS, JavaScript, integrated advanced SEO techniques, and ensured responsive design across all devices.",
          "AT result": "The site effectively represents our brand identity and has begun to generate leads.",
          "AT reflection": "Building this site was not only about showcasing services but also about embodying the core values and capabilities of our agency.",
          "reflection": "Reflection",
          "AT button": "Interested in making affordable website? Get in touch!",
          // Contact page
          "full name": "Full Name",
          "email address": "Email address",
          "subject": "Subject",
          "subject placeholder": "Create a portfolio website",
          "message": "Message",
          "submit button": "Submit",
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
          /* Natalie project */
          "project1": "Weboldal fejlesztés Natalie-nak",
          "project overview": "Projekt áttekintés",
          "challenge": "Kihivás",
          "solution": "Megoldás",
          "result": "Eredmény",
          "Natalie overview": "Natalie egy angol-olasz fordító, aki segítséget kért egy nyelvválasztó integrálásában a már meglévő weboldalába.",
          "Natlaie challenge": "A weboldalnak lehetővé kellett tennie a felhasználók számára, hogy zökkenőmentesen váltsanak angol és olasz nyelv között, javítva az elérhetőséget és a felhasználói élményt.",
          "Natalie solution": "Dinamikus nyelvválasztót valósítottam meg JavaScript segítségével, amely valós időben frissíti az oldal szövegeit.",
          "Natalie result": "Az új funkció javította a felhasználói elkötelezettséget és szélesítette a weboldal közönségét. Natalie megnövekedett elégedettségről számolt be nemzetközi ügyfelei részéről.",
          "Natalie button": "Segítség kell a weboldaladdal? Lépjünk kapcsolatba!",
          /* AT project */
          "project2": "Egy ügynökség létrehozása",
          "AT overview": "Társalapítója vagyok egy digitális transzformációs és webfejlesztő ügynökségnek. Célunk hogy betöltsük az átfogó digitális szolgáltatások iránti piaci rést.",
          "AT challenge": "Egy erős, skálázható weboldal létrehozása, amely bemutatja szolgáltatásainkat és vonzza a potenciális ügyfeleket.",
          "AT solution": "A webhelyet HTML, CSS, JavaScript használatával fejlesztettem, fejlett SEO technikákat integráltam, és biztosítottam a reszponzív dizájnt minden eszközön.",
          "AT result": "A webhely hatékonyan képviseli márkaidentitásunkat és elkezdett érdeklődőket generálni.",
          "AT reflection": "Ennek a webhelynek a felépítése nemcsak a szolgáltatások bemutatásáról szólt, hanem arról is, hogy megtestesítsük ügynökségünk alapvető értékeit és képességeit.",    
          "reflection": "Reflektálás",
          "AT button": "Szeretnél egy megfizethető weboldalt? Lépjünk kapcsolatba!",
          // Contact page
          "full name": "Teljes Név",
          "email address": "Email cím",
          "subject": "Tárgy",
          "subject placeholder": "Egy portfólió weboldal készítése",
          "message": "Üzenet",
          "submit button": "Küldés",
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
