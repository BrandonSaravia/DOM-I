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



////////////////////////////////////////////////////////////// Nav


let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})

selectedNavLinks.forEach((link,i) => {
  link.style.color = "green";
})


selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("First"));
selectedNavLinks.append(createNewNode("Last"));


////////////////////////////////////////////////////////////// Cta

/////// siteContent reference
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



////////////////////////////////////////////////////////////// Main-Content

/////// siteContent reference
let mainContentChild = siteContent['main-content'];


/////// h4
const allH4s = document.querySelectorAll('h4');
allH4s[0].textContent = mainContentChild['features-h4'];
allH4s[1].textContent = mainContentChild['about-h4'];
allH4s[2].textContent = mainContentChild['services-h4'];
allH4s[3].textContent = mainContentChild['product-h4'];
allH4s[4].textContent = mainContentChild['vision-h4'];

/////// content
const allP = document.querySelectorAll('p');
allP[0].textContent = mainContentChild['features-content'];
allP[1].textContent = mainContentChild['about-content'];
allP[2].textContent = mainContentChild['services-content'];
allP[3].textContent = mainContentChild['product-content'];
allP[4].textContent = mainContentChild['vision-content'];

/////// img
let mainContentImgSrc = document.getElementById("middle-img");
mainContentImgSrc.setAttribute('src', siteContent["main-content"]["middle-img-src"])



////////////////////////////////////////////////////////////// Contact

/////// siteContent reference
let contactChild = siteContent['contact'];


/////// h4
allH4s[5].textContent = contactChild['contact-h4'];

/////// list
allP[5].textContent = contactChild['address'];
allP[6].textContent = contactChild['phone'];
allP[7].textContent = contactChild['email'];



////////////////////////////////////////////////////////////// Footer

/////// siteContent reference
let footerChild = siteContent['footer'];


/////// p
allP[8].textContent = footerChild['copyright'];