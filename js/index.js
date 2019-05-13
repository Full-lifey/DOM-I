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
const navItems = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const headLine = document.querySelector('.cta-text h1');
const button = document.querySelector('.cta-text button');
const circleImg = document.querySelector('#cta-img');
const topContentH4 = document.querySelectorAll('.top-content .text-content h4');
const topContentP = document.querySelectorAll('.top-content .text-content p')
const middleImg = document.querySelector('#middle-img');
const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottomContentP = document.querySelectorAll('.bottom-content .text-content p')
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p')
const footerP = document.querySelector('footer p')

// Building nav items
navItems[0].textContent = 'Services'
navItems[1].textContent = 'Product'
navItems[2].textContent = 'Vision'
navItems[3].textContent = 'Features'
navItems[4].textContent = 'About'
navItems[5].textContent = 'Contact'

// Build CTA Content
const headLine1 = document.createElement('p');
const headLine2 = document.createElement('p');
const headLine3 = document.createElement('p');
headLine1.textContent = 'DOM';
headLine2.textContent = 'IS';
headLine3.textContent = 'AWESOME';
headLine.appendChild(headLine1);
headLine.appendChild(headLine2);
headLine.appendChild(headLine3);
button.textContent = 'Get Started';
circleImg.src = 'img/header-img.png';

// Build Top Content
topContentH4[0].textContent = 'FEATURES';
topContentH4[1].textContent = 'ABOUT';
topContentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Middle Image
middleImg.src = 'img/mid-page-accent.jpg';

// Build Bottom Content
bottomContentH4[0].textContent = 'SERVICES';
bottomContentH4[1].textContent = 'PRODUCT';
bottomContentH4[2].textContent = 'VISION';
bottomContentP[0].textContent = 'Service content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Build Contact
contactH4.textContent = 'CONTACT';
contactP[0].textContent = '123 Way 456 Street';
contactP[1].textContent = 'Somewhere, USA';
contactP[2].textContent = '1 (888) 888-8888'
const contactEmail = document.createElement('p');
contactEmail.textContent = 'sales@greatidea.io';
contactP[2].append(contactEmail)

// Build Footer
footerP.textContent = 'Copyright Great Idea! 2018'
// console.log(contactP)