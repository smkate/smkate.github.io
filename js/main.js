"use strict";

console.log('Hey! If you see this site throught the console you are a programmer or very inquisitive person. Nice to meet you here :)');

// OPEN Navbar menu
const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list li');

    // Toggle Nav
    burger.addEventListener ('click' , () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// FILTER
const filterWorks = document.querySelectorAll('.work');
const filterElem = document.querySelectorAll('.works__filter li');

console.log(filterElem);

document.querySelector('.works__filter').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['filter'];
    

    filterWorks.forEach(elem => {
        elem.classList.remove('hide');
        event.target.classList.add('active');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});


// ONMOUSEOVER works
// ячейка <td> под курсором в данный момент (если есть)
let currentElem = null;
const works = document.querySelector('.works__list'),
      currentWork = document.querySelectorAll('.work__description');

works.onmouseover = function(event) {
  if (currentElem) return;

  let target = event.target.closest('.work');

  if (!target) return;
  if (!works.contains(target)) return;

  // here we on a new element
  if (currentElem = target) {
  target.classList.toggle('active');
}
};


works.onmouseout = function(event) {
  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  // we leave last element
  currentElem.classList.toggle('active');
  currentElem = null;
};


// Animate #banner__title
// const bannerTitle = document.querySelectorAll("#banner__title path");

// console.log(bannerTitle);
// for (let i = 0; i < bannerTitle.length; i++) {
//     console.log(`Letter ${i} is ${bannerTitle[i].getTotalLength()}`);
// }



// Observe the scrolling
// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const sectionOneOptions = {
//     rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver (function(entries, sectionOneObserver)) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.add("nav-scrolled");
//         } else {
//             header.classList.remove("nav-scrolled");
//         }
//     });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);