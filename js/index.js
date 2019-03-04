const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

///////////////////////////////////////////////////////// Nav
let navItems = siteContent['nav'];
const allHrefs = document.querySelectorAll('a');
allHrefs[0].textContent = navItems['nav-item-1'];
allHrefs[1].textContent = navItems['nav-item-2'];
allHrefs[2].textContent = navItems['nav-item-3'];
allHrefs[3].textContent = navItems['nav-item-4'];
allHrefs[4].textContent = navItems['nav-item-5'];
allHrefs[5].textContent = navItems['nav-item-6'];

////////////////////////////////////////////////////////// Cta
let ctaChild = siteContent['cta'];

/////// h1
let ctaH1 = document.getElementsByTagName('h1');
ctaH1[0].textContent = ctaChild['h1'];

/////// button
let ctaButton = document.getElementsByTagName('button');
ctaButton[0].textContent = ctaChild['button'];

/////// img
let ctaImgSrc = document.getElementById("cta-img");
ctaImgSrc.setAttribute('src', siteContent["cta"]["img-src"])

///////////////////////////////////////////////////////////// Main-Content
let mainContentChild = siteContent['main-content'];

/////// h4
const mainContentH4s = document.querySelectorAll('h4');
mainContentH4s[0].textContent = mainContentChild['features-h4'];
mainContentH4s[1].textContent = mainContentChild['about-h4'];
mainContentH4s[2].textContent = mainContentChild['services-h4'];
mainContentH4s[3].textContent = mainContentChild['product-h4'];
mainContentH4s[4].textContent = mainContentChild['vision-h4'];

/////// content
const mainContentP = document.querySelectorAll('p');
mainContentP[0].textContent = mainContentChild['features-content'];
mainContentP[1].textContent = mainContentChild['about-content'];
mainContentP[2].textContent = mainContentChild['services-content'];
mainContentP[3].textContent = mainContentChild['product-content'];
mainContentP[4].textContent = mainContentChild['vision-content'];

/////// img
let mainContentImgSrc = document.getElementById("middle-img");
mainContentImgSrc.setAttribute('src', siteContent["main-content"]["middle-img-src"])

////////////////////////////////////////////////////////////// Contact
