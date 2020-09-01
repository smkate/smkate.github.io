"use strict";

console.log('Hey! If you see this site throught the console you are a programmer or very inquisitive person. Nice to meet you here :)');


const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-list li');

// OPEN Navbar menu
const navSlide = () => {
    // Toggle Nav
    burger.addEventListener ('click' , (event) => {       
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


for (let link of navLinks) {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
};

navSlide();

// FILTER
const filterWorks = document.querySelectorAll('.work');
const filterElem = document.querySelectorAll('.works__filter li');

document.querySelector('.works__filter').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['filter'];
    

    filterWorks.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});

// Take current filter link
for (let elem of filterElem) {
    elem.addEventListener('click', () => {
        for (let item of filterElem) {
            item.classList.remove('active');
        }
        elem.classList.add('active');
    })
}


// ONMOUSEOVER works
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


//JUST for counting numbers in baners's title
// Animate #banner__title
// const bannerTitle = document.querySelectorAll("#banner__title path");

// console.log(bannerTitle);
// for (let i = 0; i < bannerTitle.length; i++) {
//     console.log(`Letter ${i} is ${bannerTitle[i].getTotalLength()}`);
// }



// Observe the scrolling
const logoBox = document.querySelector(".logo-box");
const sectionOne = document.querySelector(".banner");
// Observe the scrolling blocks
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    rootMargin: "-400px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver (function(
    entries, sectionOneObserver
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            logoBox.classList.add("scrolled");
            document.body.style.backgroundColor = "white";
        } else {
            logoBox.classList.remove("scrolled");
            document.body.style.backgroundColor = "#ccef4a";
        }
    })
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);


// Observe the scrolling blocks
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


// smooth Scrolling
// function smoothScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;
// }

// function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     console.log(startTime);
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0,run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
// }

// function ease (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;



//     requestAnimationFrame(animation);
// }


// var section1 = document.querySelector('.section1');
// var section2 = document.querySelector('.section2');


// section1.addEventListener('click', function(){
//     smoothScroll('.section2', 1000)
// });

// section2.addEventListener('click', function(){
//     smoothScroll('.section1', 1000)
// });



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(eventScroll) {
        eventScroll.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);


        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    })
}