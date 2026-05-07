const translations = {
    es: {
        navHome: "Inicio",
        navAbout: "Sobre mi",
        navServices: "Servicios",
        navPortfolio: "Portfolio",
        navContact: "Contacto",
        langToggle: "EN 🇬🇧",
        
        heroSub: "Hola, Soy",
        heroDesc: "Diseñador Multimedia y Desarrollador Web - UI/UX",
        heroBtn: "Ver Mi Trabajo",
        
        aboutTitle: "Sobre Mi",
        aboutSubtitle: "Te invito a que me conozcas.",
        aboutDesc: "Soy Licenciado en Diseño Multimedial egrese de la Universidad Nacional de La Plata en el año 2021.<br>Tengo más de 5 años de experiencia diseñando todo tipo de piezas multimediales.<br> Me especializo en el desarrollo de sitios webs de todo tipo: desde e-commerce hasta paginas personalizadas para cualquier tipo de cliente y tambien diseño de interfaces (UI/UX).<br> <br>",
        aboutProf: "Profesión:",
        aboutProfVal: "Diseñador",
        aboutLoc: "Ubicación:",
        
        servTitle: "Mis Servicios",
        servSubtitle: "Estoy capacitado para cubrir cualquiera de tus necesidades, ya que tengo experiencia en resolver problemas en las diferentes áreas del diseño.",
        serv1Title: "Desarrollo Web",
        serv1Desc: "Desarrollo todo tipo de sitios webs: e-commerce, sitios institucionales, sitios personales o cualquier proyecto que tengas en mente.",
        serv2Title: "Diseño Gráfico",
        serv2Desc: "Cualquier tipo de pieza gráfica para tu negocio o evento: <br>flyers, tarjetas de presentación, diseño de revistas, etc.",
        serv3Title: "Retoque Digital",
        serv3Desc: "Edición de imagen para productos, diseño creativo para campañas de publicidad, restauración fotográfica, fotomontajes, concept art.",
        serv4Title: "Desarrollo de Marca",
        serv4Desc: "¿Estas empezando tu negocio y necesitas impulsar tu marca? Yo puedo ayudarte a darle una identidad a tu marca y potenciar tus objetivos.",
        serv5Title: "Edición de Video",
        serv5Desc: "Si necesitas ayuda con la creación de videos para: tu emprendimiento, para tus redes sociales o necesitas un editor de contenido no dudes en consultarme.",
        serv6Title: "UI/UX",
        serv6Desc: "¿Estas buscando un experto en diseñar interfaces de usuario y/o experiencia de usuario? contame acerca de tu proyecto y te ofrezco la mejor solución.",
        
        ctaTitle: "¿Tenes algún proyecto en mente?",
        ctaSubtitle: "Si pensas en llevar a cabo un proyecto personal, o llevar tu empresa al proximo nivel, no dudes en consultarme.",
        ctaBtn1: "Descargar CV",
        ctaBtn2: "CONSULTAME",
        
        portTitle: "Galería de Imágenes",
        portFilter1: "Todos",
        portFilter4: "Informativo",
        portPrev: "Anterior",
        portNext: "Siguiente",
        
        contactTitle: "Consultame",
        contactSubtitle: "Comunicate por cualquiera de los siguientes medios así puedo ayudarte a resolver tus necesidades.",
        contactBtn: "Enviar Consulta",
        
        footerDesc: "Te invito a seguir mi trabajo en las diferentes redes sociales, si tenes alguna consulta podés enviarme un mensaje cuando lo desees."
    },
    en: {
        navHome: "Home",
        navAbout: "About me",
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        langToggle: "ES 🇪🇸",
        
        heroSub: "Hello, I am",
        heroDesc: "Multimedia Designer & Web Developer - UI/UX",
        heroBtn: "View My Work",
        
        aboutTitle: "About Me",
        aboutSubtitle: "I invite you to get to know me.",
        aboutDesc: "I have a Bachelor's Degree in Multimedia Design, graduated from the National University of La Plata in 2021.<br>I have over 5 years of experience designing all kinds of multimedia pieces.<br> I specialize in developing all types of websites: from e-commerce to custom pages for any kind of client, as well as user interface design (UI/UX).<br> <br>",
        aboutProf: "Profession:",
        aboutProfVal: "Designer",
        aboutLoc: "Location:",
        
        servTitle: "My Services",
        servSubtitle: "I am equipped to meet any of your needs, as I have experience solving problems in different areas of design.",
        serv1Title: "Web Development",
        serv1Desc: "I develop all kinds of websites: e-commerce, institutional sites, personal sites, or any project you have in mind.",
        serv2Title: "Graphic Design",
        serv2Desc: "Any type of graphic piece for your business or event: <br>flyers, business cards, magazine design, etc.",
        serv3Title: "Digital Retouching",
        serv3Desc: "Image editing for products, creative design for advertising campaigns, photo restoration, photomontages, concept art.",
        serv4Title: "Brand Development",
        serv4Desc: "Are you starting your business and need to boost your brand? I can help you give identity to your brand and enhance your goals.",
        serv5Title: "Video Editing",
        serv5Desc: "If you need help creating videos for: your entrepreneurship, your social networks, or you need a content editor, do not hesitate to contact me.",
        serv6Title: "UI/UX",
        serv6Desc: "Are you looking for an expert in user interface and/or user experience design? Tell me about your project and I will offer you the best solution.",
        
        ctaTitle: "Do you have a project in mind?",
        ctaSubtitle: "If you are thinking of carrying out a personal project, or taking your company to the next level, do not hesitate to contact me.",
        ctaBtn1: "Download CV",
        ctaBtn2: "CONTACT ME",
        
        portTitle: "Image Gallery",
        portFilter1: "All",
        portFilter4: "Informative",
        portPrev: "Previous",
        portNext: "Next",
        
        contactTitle: "Contact Me",
        contactSubtitle: "Communicate through any of the following means so I can help you solve your needs.",
        contactBtn: "Send Message",
        
        footerDesc: "I invite you to follow my work on different social networks, if you have any questions you can send me a message whenever you want."
    }
};

const placeholders = {
    es: {
        contactName: "Nombre",
        contactMessage: "Mensaje"
    },
    en: {
        contactName: "Name",
        contactMessage: "Message"
    }
};

let currentLang = 'es';

function setLanguage(lang, event) {
    if(event) event.preventDefault();
    currentLang = lang;
    
    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (placeholders[currentLang][key]) {
            element.setAttribute('placeholder', placeholders[currentLang][key]);
        }
    });

    // Update active language styling
    const esLink = document.getElementById('lang-es');
    const enLink = document.getElementById('lang-en');
    
    if (esLink && enLink) {
        esLink.classList.remove('active-lang');
        enLink.classList.remove('active-lang');
        document.getElementById('lang-' + currentLang).classList.add('active-lang');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('es');
});
