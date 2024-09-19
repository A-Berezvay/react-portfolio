import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

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
          "introduction": "I am an aspiring Web Developer. To have a look at my work navigate to the \"Projects\" tab and browse. I always welcome constructive feedback so please get in touch if you have some.🤗",
          //About Page
          "my-journey": "My Journey",
          "my-journey-description": "Born and raised in <b>Budapest</b>, my journey began with an interest in <b>hospitality</b>, a field that I studied in secondary school. After graduation I tried my luck and moved to <b>London</b> to gain experience, meet new people and see other cultures. This experience proved to be transformative, leading to a realisation that my passion lies in <b>digital web development</b>. Motivated by this newfound interest I pursued an <b>AP degree</b> in <b>Multimedia Design & Communication</b> at <b>IBA</b> in <b>Kolding, Denmark</b>. As soon as I’ve was introduced to the world of <b>coding</b>, I’ve been building not only smaller pages, but a bigger <b>dream of helping people in the digital world</b>.",
          "what i do": "What I do",
          "web development": "Web Development",
          "web development description": "From Content Management Systems to Hand-coding, I have the ability to build <b>SEO optimised websites</b>, for diverse needs. This Portfolio itself was initially crafted with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> but for scalability reasons I transitioned to <b>React</b>. With sharp eye for details and design I ensure that every website I develop aligns with the <b>envisioned aesthetic.</b>",
          "ui/ux": "UI/UX",
          "ui/ux description": "Imagine a digital space that <b>feels</b> like a <b>cozy</b> coffee shop; <b>welcoming</b> and <b>easy to navigate</b>. That’s what I aim for with my UI/UX design. I listen to your needs and craft experiences that make your visitors feel right at home, ensuring they find what they need with a smile.",
          "web design": "Web Design",
          "web design description": "Your <b>website is</b> the digital <b>face of your brand</b>, and it should be as welcoming and engaging as you are. I blend <b>colors</b>, <b>graphics</b>, and <b>typography</b> to not just catch the eye, but <b>to tell a story</b> and evoke emotions. <b>Let's collaborate</b> to make your website a place where visitors love to linger.",
          "about cta": "Let´s work <b>together</b>",
          "about cta button": "Contact",
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
          "title": "Üdv a portfóliomon",
          "introduction": "Egy törekvő webfejlesztő vagyok. Ha meg szeretnéd nézni a munkáimat, navigálj a \"Projektek\" fülre és böngéssz. Mindig szívesen fogadom az építő jellegű visszajelzéseket, szóval kérlek, vedd fel velem a kapcsolatot, ha van valami. 🤗",
          //About page
          "my-journey": "Történetem",
          "my-journey-description": "<b>Budapesten</b> születtem és nőttem fel, az utam pedig a <b>vendéglátás</b> iránti érdeklődéssel kezdődött, amelyet középiskolában tanultam. Az érettségi megszerzése után kipróbáltam a szerencsémet, és <b>Londonba</b> költöztem, hogy tapasztalatot szerezzek, új emberekkel találkozzak és más kultúrákat ismerjek meg. Ez az élmény sorsfordítónak bizonyult, mivel rájöttem, hogy a szenvedélyem a <b>digitális webfejlesztésben</b> rejlik. Az új érdeklődésem ösztönzött, hogy a <b>dániai Koldingban</b>, az IBA-n szerezzek egy <b>AP</b> diplomát <b>Multimédia Dizájn & Kommunikáció</b> szakon. Amint megismerkedtem a <b>programozás</b> világával, nemcsak kisebb oldalakat kezdtem építeni, hanem egy nagyobb <b>álmot</b> is, hogy <b>embereknek segítsek navigálni a digitális világban</b>.",
          "what i do": "Mit csinálok",
          "web development": "Webfejlesztés",
          "web development description": "A tartalomkezelő rendszerektől a kézi kódolásig, képes vagyok <b>SEO-optimalizált weboldalakat építeni</b> különböző igényekhez. Ez a portfólió eredetileg <b>HTML</b>, <b>CSS</b> és <b>JavaScript</b> segítségével készült, de a skálázhatóság érdekében <b>React</b>-ra váltottam. Jó szemem van a részletekhez és a dizájnhoz, így minden weboldal amit készitek megfelel az <b>elképzelt esztétikának</b>.",
          "ui/ux": "UI/UX",
          "ui/ux description": "Képzelj el egy digitális teret, ami <b>olyan</b>, mint egy <b>kávézó</b>; <b>hívogató</b> és <b>könnyen navigálható</b>. Erre törekszem a UI/UX tervezéssel. Meghallgatom az igényeket, és olyan élményeket alakítok ki, amelyeken a látogatók otthonosan érzhetik magukat, biztosítva, hogy mosollyal találják meg, amit keresnek.",
          "web design": "Web dizájn",
          "web design description": "A <b>weboldal</b> a <b>digitális arca</b> a <b>márkádnak</b>, és éppoly <b>hívogatónak  kell lennie</b>, mint <b>Neked</b>. <b>Színeket</b>, <b>grafikákat</b> és <b>tipográfiát</b> ötvözök, hogy ne csak megragadjam a figyelmet, hanem <b>történetet meséljek</b> el és érzelmeket idézzek elő. <b>Dolgozzunk együtt</b>, hogy a weboldalad olyan hely legyen, ahol a látogatók szeretnek időt tölteni.",
          "about cta": "Dolgozzunk <b>együtt</b>",
          "about cta button": "Lépj kapcsolatba",
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
    lng: savedLanguage, // language to use
    fallbackLng: "en", // use en if detected lng is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
