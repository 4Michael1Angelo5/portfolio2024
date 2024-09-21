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


// -------------Cedarcreek Forestry Pictures---------
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

import p1_m_aboutPage from './images/Porfolio1/Mobile/p1_m_aboutPage.jpg';
import p1_m_landingPage from './images/Porfolio1/Mobile/p1_m_landingPage.jpg'; 
import p1_m_projectDetail from './images/Porfolio1/Mobile/p1_m_projectDetail.jpg';
import p1_m_slideMenu from './images/Porfolio1/Mobile/p1_m_slideMenu.jpg' ;



export const portfolioInfo = [
    {
    title: "Cedarcreek Forestry",
    image:   cc_homePage ,
    projectOverview: [
        {title:"Home Page", image: cc_homePage} ,
        {title:"About Page", image:cc_aboutPage} , 
        {title:"Gallery Page", image: cc_galleryPage} , 
        {title:"Store Page", image: cc_storePage} , 
        {title:"Store Page Catalog", image: cc_storeCatalog_1} ,
        {title:"Store Page Catalog", image: cc_storeCatalog_2} ,
        {title:"Store Page", image: cc_storeCatalog_3} ,
        {title:"Custom Order Page", image: cc_storeCustomOrderPage_1} , 
        {title:"Custom Order Page", image: cc_storeCustomOrderPage_2} ,
        {title:"Custom Order Page", image: cc_storeCustomOrderPage_3} ,
        {title:"Checkout Page", image: cc_checkoutPage},
        ],
    projectOverviewMobile : [
        {title:"Home Page", image: cc_mobile_landingPage} ,
        {title:"About Page", image:cc_mobile_aboutPage} , 
        {title:"Gallery Page", image: cc_mobile_galleryPage} , 
        {title:"Store Catalog Page", image: cc_mobile_catalogPage} , 
        {title:"Store Custom Order Page", image: cc_mobile_customOrderPage} ,
        {title:"Checkout Page", image: cc_mobile_checkoutPage} 
    ],
    technologies:[
        {title : "React", image: react},
        {title: "WordPress", image: wordpress},
        {title: "Bootstrap", image: bootstrap} ,
        {title: "React-Bootstrap", image: reactbootstrap},
        {title: "GraphQ:" , image : graphql},
        {title : "Apollo Client",  image : apollo},
        {title: "Node.js" , image: node},
        {title: "Stripe.js", image: stripe},
        {title: "WooCommerce API", image: woo},
        {title: "React Router", image: react_router}
    ],
    shortDescription:"Cedarcreek Forestry LLC is a furniture company that specializes in custom live edge furniture."
    ,
    description: "This is the most complex website I have built. \
    It was designed to be a single-page application. Components are \
    conditionally rendered based on user interaction within the app.  \
    It is a headless WordPress site with a React front-end. It \
    leverages WordPress exclusively as a CMS to manage product orders\
     and inventory in WooCommerece and has a custom checkout flow managed \
     by stripe.js API. It utilizes GraphQL and Appolo Client to handle \
     server requests to WordPress on the backend. This website required a \
     comprehensive understanding of both front-end and back-end features.  ",
    link:"https://4michael1angelo5.github.io/furn-future/"
    
    },
    {

    title: "Paul Sparks Construction",
    image: PS_home ,
    projectOverview: [
        {title:"Home Page", image: PS_home} ,
        {title:"About Page", image: ps_aboutPage} , 
        {title:"Service Page", image: ps_servicesPage} , 
        {title: "Contact Page" , image: ps_contactPage},
        {title:"Testimonials Page", image: ps_testimonialsPage} , 
        {title:"Projects Page", image: ps_projectsPage} ,
        {title:"Projects Page", image: ps_projectsPage_1}     
        ],
    projectOverviewMobile: [
        {title:"Home Page", image: ps_m_landingPage} ,
        {title:"About Page", image: ps_m_aboutPage} , 
        {title:"Service Page", image: ps_m_servicePage} , 
        {title: "Contact Page" , image: ps_m_contactPage},
        {title:"Testimonials Page", image: ps_m_testimonialsPage} , 
        {title:"Projects Page", image: ps_m_projectsPage} ,
        {title:"Projects Page", image: ps_m_projectsPage1}    
    ],
    technologies:[
        {title: "Wix" , image: wix}
    ],
    shortDescription:"Paul Sparks Construction is a general contracting company based in Tacoma, WA."
    ,
    description: "The purpose of the site was to create an online presence \
    for the small business owner for him to grow his business. The client \
    wanted a basic, simple, and clean design layout. The website was made \
    with Wix and I was retained under his employment to manage customer bid \
    requests and compensated 10% on successful bids.   ",
    link:"https://4michael1angelo5.wixsite.com/paulsparksconstructi"
    
    },
    {

    title: "First Portfolio",
    image: portfolio1 ,
    projectOverview: [
        {title:"Home Page", image: portfolio1} ,
        {title:"Project Detail", image: portfolio1_projectDetailPage} , 
        {title:"About Page", image: portfolio1_aboutPage} ,
        {title:"Menu" , image: portfolio1_menu }        
        ],
    projectOverviewMobile: [ 
        {title:"Home Page", image: p1_m_landingPage} ,
        {title:"Project Detail", image: p1_m_projectDetail} , 
        {title:"About Page", image: p1_m_aboutPage} ,
        {title:"Menu" , image: p1_m_slideMenu }  

    ],
    technologies:[
        {title: "React", image: react},
        {title: "React-Bootstrap", image: reactbootstrap},
        {title: "Bootstrap", image: bootstrap} ,
        {title: "Java Script", image: javascript},
        {title: "Node.js", image : node}
    ],
    shortDescription:"This was my first portfolio website"
    ,
    description: "This was my first portfolio website. The design \
    concept is based on a 3-dimensional Instagram page where each\
     photo is the front face of a cube, whose perspective changes as\
      the user scrolls. Design inspiration came from Marvel’s Ironman \
      Jarvis UI and my affinity for cyber-punk aesthetics. This website \
      showcases fairly complicated javascript that leverages mathematics \
      to render a 3-dimensional perspective of each cube. It was very \
      fun to make and I especially enjoyed the math element to the design. ",
    link:"https://4michael1angelo5.github.io/portfolio/"
    
    }
        
    
];

