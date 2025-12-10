import {PersonalAsset} from "./PersonalAssests";

// --------------Technologies----------------------
import react from "./images/Technologies/react.png";
import wordpress from "./images/Technologies/wordpress.png"
import bootstrap from "./images/Technologies/bootstrap.png";
import reactbootstrap from './images/Technologies/reactbootstrap.png'
import javascript from './images/Technologies/javascript.png';
import stripe from './images/Technologies/stripe.png';
import node from './images/Technologies/node.png';
import graphql from './images/Technologies/graphql.png';
import apollo from './images/Technologies/apollo.png';
import woo from './images/Technologies/woo.png';
import react_router from './images/Technologies/react_router.png';
import wix from './images/Technologies/wix.png';
import d3 from './images/Technologies/d3.png';
import framerMotion from "./images/Technologies/framerMotion.png"

//----------------------Magic Cypher----------------------
import cover from "./images/MagicCypherApp/cover.jpg";
import cover_mobile from "./images/MagicCypherApp/cover_mobile.PNG";
import skeleton from "./images/MagicCypherApp/skeleton.PNG";
import image from "./images/MagicCypherApp/image.PNG";
import encrytped from "./images/MagicCypherApp/encrypted.PNG";
import oauth from "./images/MagicCypherApp/oauth.png";
import oauth_m from "./images/MagicCypherApp/oauth_m.PNG"
//--------------------------------------------------------

//-----------------------Voices---------------------
import voices_landing from "./images/Voices/voices_landing.png"
import voices_authors from "./images/Voices/voices_authors.png"
import voices_ancestors from "./images/Voices/voices_ancestors.png"
import voices_family from "./images/Voices/voices_family.png"
import voices_chapters from "./images/Voices/voices_chapters.png";
import voices_history from "./images/Voices/voices_history.png";

//----------------------Voices mobile----------------------
import voices_mobile_landing from "./images/Voices/voices_mobile_landing.PNG"
import voices_mobile_authors from "./images/Voices/voices_mobile_authors.PNG"
import voices_mobile_family from "./images/Voices/voices_mobile_family.PNG"
import voices_mobile_ancestors from "./images/Voices/voices_mobile_ancestors.PNG"
import voices_mobile_chapters from "./images/Voices/voices_mobile_chapters.PNG"
//@TODO need to optimize these to webp


// -------------Cedar creek Forestry Pictures---------
import cc_homePage from "./images/CedarCreek/optomized_desktop/cc_homePage.webp";
import cc_aboutPage from "./images/CedarCreek/optomized_desktop/cc_aboutPage.webp";
import cc_galleryPage from "./images/CedarCreek/optomized_desktop/cc_galleryPage.webp";
import cc_storePage from "./images/CedarCreek/optomized_desktop/cc_storePage.webp";
import cc_storeCatalog_1 from "./images/CedarCreek/optomized_desktop/cc_storeCatalogPage_1.webp";
import cc_storeCatalog_2 from "./images/CedarCreek/optomized_desktop/cc_storeCatalogPage_2.webp";
import cc_storeCatalog_3 from "./images/CedarCreek/optomized_desktop/cc_storeCatalogPage_3.webp";
import cc_storeCustomOrderPage_1 from "./images/CedarCreek/optomized_desktop/cc_storeCustomOrderPage_1.webp" ;
import cc_storeCustomOrderPage_2 from "./images/CedarCreek/optomized_desktop/cc_storeCustomOrderPage_2.webp";
import cc_storeCustomOrderPage_3 from "./images/CedarCreek/optomized_desktop/cc_storeCustomOrderPage_3.webp"
import cc_checkoutPage from "./images/CedarCreek/optomized_desktop/cc_checkoutPage.webp";

//------------Cedar Creek Mobile--------
import cc_mobile_landingPage from "./images/CedarCreek/optomized_mobile/cc_mobile_landingPage.webp";
import cc_mobile_aboutPage from "./images/CedarCreek/optomized_mobile/cc_mobile_aboutPage.webp";
import cc_mobile_galleryPage from "./images/CedarCreek/optomized_mobile/cc_mobile_galleryPage.webp";
import cc_mobile_catalogPage from "./images/CedarCreek/optomized_mobile/cc_mobile_catalogPage.webp";
import cc_mobile_checkoutPage from"./images/CedarCreek/optomized_mobile/cc_mobile_checkoutPage.webp" ;
import cc_mobile_customOrderPage from "./images/CedarCreek/optomized_mobile/cc_mobile_customOrderPage.webp";

//------------Paul SparksConstruction Pictures--------
import PS_home from "./images/PaulSparks/PS_home.png";
import ps_aboutPage from "./images/PaulSparks/ps_aboutPage.png";
import ps_servicesPage from "./images/PaulSparks/ps_servicesPage.png";
import ps_contactPage from "./images/PaulSparks/ps_contactPage.png";
import ps_projectsPage from "./images/PaulSparks/ps_projectsPage.png";
import ps_projectsPage_1 from "./images/PaulSparks/ps_projectsPage_1.png";
import ps_testimonialsPage from "./images/PaulSparks/ps_testimonialsPage.png";

// -----------Paul Sparks Mobile ------------------------
import ps_m_landingPage from './images/PaulSparks/Mobile/ps_m_landingPage.jpg';
import ps_m_aboutPage from './images/PaulSparks/Mobile/ps_m_aboutPage.jpg';
import ps_m_servicePage from './images/PaulSparks/Mobile/ps_m_servicePage.jpg';
import ps_m_contactPage from './images/PaulSparks/Mobile/ps_m_contactPage.jpg';
import ps_m_testimonialsPage from './images/PaulSparks/Mobile/ps_m_testimonialsPage.jpg';
import ps_m_projectsPage from './images/PaulSparks/Mobile/ps_m_projectsPage.jpg';
import ps_m_projectsPage1 from './images/PaulSparks/Mobile/ps_m_projectsPage1.jpg';

//------------Portfolio 1 Pictures -------------------
import portfolio1 from'./images/Porfolio1/portfolio1.png';
import portfolio1_aboutPage from './images/Porfolio1/portfolio1_aboutPage.png';
import portfolio1_projectDetailPage from './images/Porfolio1/portfolio1_projectDetailPage.png';
import portfolio1_menu from './images/Porfolio1/portfolio1_menu.png' ;

// -----------Portfolio 1 Mobile------------------------
import p1_m_aboutPage from "./images/Porfolio1/Mobile/p1_m_aboutPage.jpg";
import p1_m_landingPage from './images/Porfolio1/Mobile/p1_m_landingPage.jpg';
import p1_m_projectDetail from './images/Porfolio1/Mobile/p1_m_projectDetail.jpg';
import p1_m_slideMenu from './images/Porfolio1/Mobile/p1_m_slideMenu.jpg' ;


export const PORTFOLIO:PersonalAsset[] = [
    // --- MAGIC CYPHER (Already present, refactored for concatenation) ---
    {
        title: "Magic Cypher",
        coverImage: cover,
        link: "https://magic-cypher-app.vercel.app/",
        technologies:[
            {title : "React", src: react},
            {title: "D3.js", src: d3},
            {title: "Bootstrap", src: bootstrap} ,
            {title: "Framer Motion",src:framerMotion}
        ],
        description:
            "Magic Cypher is a passion project born of a long-standing love for math and cyberpunk aesthetics. " +
            "The app encrypts images and text, lets users save and share their ciphers, and presents a unique " +
            "and visually expressive take on personal data privacy.",
        shortDescription:
            "Magic Cypher is an indie cyberpunk encryption web app. It utilizes a custom encryption algorithm " +
            "based on magic squares to encrypt images and text messages.",
        assetDetails: [
            {
                title: "Math-Driven Encryption",
                media: {type:"image" , src: cover},
                description:
                    "The core of Magic Cypher is a scalable TypeScript encryption engine that supports three " +
                    "different magic-square algorithms. The app automatically chooses the correct method based on " +
                    "the user’s input — for example, a 49-character message uses a 7×7 square. For images, a " +
                    "deterministic color-hash system selects the algorithm while keeping the image’s appearance " +
                    "unchanged."
            },
            {
                title: "New Takes on Old Techniques",
                media : {type: "image", src: cover},
                description:
                    "I borrowed techniques from 2D video game map rendering to encrypt images. Games often use a " +
                    "“sprite atlas,” where a single image contains many smaller tiles, and the engine assembles a " +
                    "world by sampling different tile locations. Magic Cypher uses a similar idea: I built a lookup " +
                    "table that tells WebGL which parts of the user’s image to pull from and how to scramble them. " +
                    "Instead of making a game map, I use the same concept to visually rearrange the image during " +
                    "encryption."
            },
            {
                title: "GPU-Powered Encryption Animation",
                media: {type:"image" ,src: cover},
                description:
                    "One of the coolest features of the app is real-time visualization of the image " +
                    "encryption process. I used WebGL to unlock GPU-accelerated animations. Users watch their images" +
                    " scramble and reassemble with smooth GPU-accelerated motion, turning encryption into an " +
                    "interactive experience."
            },
            {
                title: "Full-Stack Features",
                media:{type: "image" , src: oauth},
                description:
                    "Encryption runs securely on the server, and users can sign in with GitHub or Google to save " +
                    "and revisit their ciphers. The app uses Prisma ORM with a Neon PostgresSQL backend to manage " +
                    "user data and encrypted outputs."
            }
        ],
        mobileAssets: [
            {
                title:"Home Page", media: {type: "image", src: cover_mobile}
            },
            {
                title:"Skeleton Loader", media: {type: "image", src: skeleton}
            },
            {
                title:"Image Cipher", media: {type: "image" , src: image}
            },
            {
                title: "Encrypted Image", media: {type: "image" , src: encrytped}
            },
            {
                title: "OAuth", media: {type: "image" , src: oauth_m}
            }
        ]
    },
    // --- VOICES ---
    {
        title:"Voices",
        coverImage: voices_landing,
        link: "https://4michael1angelo5.github.io/voices/",
        technologies:[
            {title : "React", src: react},
            {title: "D3.js", src: d3},
            {title: "Bootstrap", src: bootstrap} ,
            {title: "Framer Motion",src:framerMotion}
        ],
        description:
            "This website was so fun to make! I got the chance to collaborate with San Franciscan Historian " +
            "Sue Lee to design a website for her book, “Voices From the Railroad”. What drew me to this " +
            "project was the opportunity to empower Chinese American communities by making their stories " +
            "more accessible. It used modern design trends such as parallax effects, scroll-driven " +
            "animations, and natural shape borders between sections. There is an interactive family tree " +
            "that maps the descendants of Chinese railroad workers, using D3.js ",
        shortDescription:'Voices is a website dedicated to the book, "Voices From the Railroad" ',
        assetDetails:[
            {
                title:"Landing Page",
                media: {type: "image", src: voices_landing},
                description:"The landing page featured a completely interactive flip book, where the user " +
                    "could flip through actual pages of the book"
            },
            {
                title:"About the Authors",
                media: {type: "image", src: voices_authors},
                description:"Each page's header features a different linear gradient transition between pages, " +
                    "representing transistions between different times of the day like morning, day, dusk, " +
                    "night, and dawn."
            },
            {
                title:"Ancestor's Page:",
                media: {type: "image", src: voices_ancestors},
                description:"The author wanted to include information about specific railroad workers and " +
                    "their descendants"
            },
            {
                title:"Family Tree Page:",
                media: {type: "image", src: voices_family},
                description:"This part of the project was very challenging. I used d3.js to make a family tree " +
                    "of the ancestors and their descendants. The graph is completely interactive and clicking on " +
                    "a descendant node triggers seperate animations and displays information about that descendant."
            },
            {
                title:"Chapters Page:",
                media: {type: "image", src: voices_chapters},
                description:"The chapters page was also very fun to design. I used framer motion to trigger " +
                    "scroll linked animations on each dialogue box. An image of a railroad tie also animates as " +
                    "the user scrolls. I leveraged custom debounce and throttle functions with requestAnimationFrame() " +
                    "to sync the browsers repaint cycle with state updates to ensure smooth scrolling animations."
            },
            {
                title:"History Page",
                media: {type: "image", src: voices_history},
                description: ""
            }
        ],
        mobileAssets:[
            {title:"Landing Page", media: {type: "image", src: voices_mobile_landing}},
            {title:"About the Authors",media: {type: "image", src: voices_mobile_authors}},
            {title:"Ancestor's Page:",media: {type: "image", src: voices_mobile_ancestors}},
            {title:"Family Tree Page:", media: {type: "image", src: voices_mobile_family}},
            {title:"Chapters Page:", media: {type: "image", src: voices_mobile_chapters}}
        ]
    },
    // --- CEDAR CREEK FORESTRY ---
    {
        title: "Cedarcreek Forestry",
        coverImage: cc_homePage ,
        link: "https://4michael1angelo5.github.io/furn-future/",
        technologies:[
            {title : "React", src: react},
            {title: "WordPress", src: wordpress},
            {title: "Bootstrap", src: bootstrap} ,
            {title: "React-Bootstrap", src: reactbootstrap},
            {title: "GraphQ:" , src : graphql},
            {title : "Apollo Client",  src : apollo},
            {title: "Node.js" , src: node},
            {title: "Stripe.js", src: stripe},
            {title: "WooCommerce API", src: woo},
            {title: "React Router", src: react_router}
        ],
        description:
            "This is the most complex website I have built. It was designed to be a single-page " +
            "application. Components are conditionally rendered based on user interaction within the app. " +
            "It is a headless WordPress site with a React front-end. It leverages WordPress exclusively as " +
            "a CMS to manage product orders and inventory in WooCommerece and has a custom checkout flow " +
            "managed by stripe.js API. It utilizes GraphQL and Appolo Client to handle server requests to " +
            "WordPress on the backend. This website required a comprehensive understanding of both front-end " +
            "and back-end features.  ",
        shortDescription:"Cedarcreek Forestry LLC is a furniture company that specializes in custom " +
            "live edge furniture." ,
        assetDetails: [
            {title:"Home Page", media: {type: "image", src: cc_homePage}, description: ""} ,
            {title:"About Page", media: {type: "image", src: cc_aboutPage}, description: ""} ,
            {title:"Gallery Page", media: {type: "image", src: cc_galleryPage}, description: ""} ,
            {title:"Store Page", media: {type: "image", src: cc_storePage}, description: ""} ,
            {title:"Store Page Catalog", media: {type: "image", src: cc_storeCatalog_1}, description: ""} ,
            {title:"Store Page Catalog", media: {type: "image", src: cc_storeCatalog_2}, description: ""} ,
            {title:"Store Page", media: {type: "image", src: cc_storeCatalog_3}, description: ""} ,
            {title:"Custom Order Page", media: {type: "image", src: cc_storeCustomOrderPage_1}, description: ""} ,
            {title:"Custom Order Page", media: {type: "image", src: cc_storeCustomOrderPage_2}, description: ""} ,
            {title:"Custom Order Page", media: {type: "image", src: cc_storeCustomOrderPage_3}, description: ""} ,
            {title:"Checkout Page", media: {type: "image", src: cc_checkoutPage}, description: ""},
        ],
        mobileAssets : [
            {title:"Home Page", media: {type: "image", src: cc_mobile_landingPage}} ,
            {title:"About Page", media: {type: "image", src: cc_mobile_aboutPage}} ,
            {title:"Gallery Page", media: {type: "image", src: cc_mobile_galleryPage}} ,
            {title:"Store Catalog Page", media: {type: "image", src: cc_mobile_catalogPage}} ,
            {title:"Store Custom Order Page", media: {type: "image", src: cc_mobile_customOrderPage}} ,
            {title:"Checkout Page", media: {type: "image", src: cc_mobile_checkoutPage}}
        ]
    },
    // --- PAUL SPARKS CONSTRUCTION ---
    {
        title: "Paul Sparks Construction",
        coverImage: PS_home ,
        link: "https://4michael1angelo5.wixsite.com/paulsparksconstructi",
        technologies:[
            {title: "Wix" , src: wix}
        ],
        description:
            "The purpose of the site was to create an online presence for the small business " +
            "owner for him to grow his business. The client wanted a basic, simple, and clean design " +
            "layout. I managed the content media, layout, and design. Through effective SEO strategies " +
            "and ad campaigns, I grew demand for his services.",
        shortDescription:"Paul Sparks Construction is a general contracting company based in Tacoma, WA.",
        assetDetails: [
            {title:"Home Page", media: {type: "image", src: PS_home}, description: ""} ,
            {title:"About Page", media: {type: "image", src: ps_aboutPage}, description: ""} ,
            {title:"Service Page", media: {type: "image", src: ps_servicesPage}, description: ""} ,
            {title: "Contact Page" , media: {type: "image", src: ps_contactPage}, description: ""},
            {title:"Testimonials Page", media: {type: "image", src: ps_testimonialsPage}, description: ""} ,
            {title:"Projects Page", media: {type: "image", src: ps_projectsPage}, description: ""} ,
            {title:"Projects Page", media: {type: "image", src: ps_projectsPage_1}, description: ""}
        ],
        mobileAssets: [
            {title:"Home Page", media: {type: "image", src: ps_m_landingPage}} ,
            {title:"About Page", media: {type: "image", src: ps_m_aboutPage}} ,
            {title:"Service Page", media: {type: "image", src: ps_m_servicePage}} ,
            {title: "Contact Page" , media: {type: "image", src: ps_m_contactPage}},
            {title:"Testimonials Page", media: {type: "image", src: ps_m_testimonialsPage}} ,
            {title:"Projects Page", media: {type: "image", src: ps_m_projectsPage}} ,
            {title:"Projects Page", media: {type: "image", src: ps_m_projectsPage1}}
        ]
    },
    // --- FIRST PORTFOLIO ---
    {
        title: "First Portfolio",
        coverImage: portfolio1 ,
        link: "https://4michael1angelo5.github.io/portfolio/",
        technologies:[
            {title: "React", src: react},
            {title: "React-Bootstrap", src: reactbootstrap},
            {title: "Bootstrap", src: bootstrap} ,
            {title: "Java Script", src: javascript},
            {title: "Node.js", src : node}
        ],
        description:
            "This was my first portfolio website. The design concept is based on a 3-dimensional " +
            "Instagram page where each photo is the front face of a cube, whose perspective changes " +
            "as the user scrolls. Design inspiration came from Marvel’s Ironman Jarvis UI and my " +
            "affinity for cyber-punk aesthetics. This website showcases fairly complicated javascript " +
            "that leverages mathematics to render a 3-dimensional perspective of each cube. It was very " +
            "fun to make and I especially enjoyed the math element to the design. ",
        shortDescription:"This was my first portfolio website",
        assetDetails: [
            {title:"Home Page", media: {type: "image", src: portfolio1}, description: ""} ,
            {title:"Project Detail", media: {type: "image", src: portfolio1_projectDetailPage}, description: ""} ,
            {title:"About Page", media: {type: "image", src: portfolio1_aboutPage}, description: ""} ,
            {title:"Menu" , media: {type: "image", src: portfolio1_menu }, description: "" }
        ],
        mobileAssets: [
            {title:"Home Page", media: {type: "image", src: p1_m_landingPage}} ,
            {title:"Project Detail", media: {type: "image", src: p1_m_projectDetail}} ,
            {title:"About Page", media: {type: "image", src: p1_m_aboutPage}} ,
            {title:"Menu" , media: {type: "image", src: p1_m_slideMenu }}
        ]
    }
];