
/*===== Show Scroll Top =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById("scroll-top");
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener("scroll", scrollTop);


/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});



/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio(){
    if((linkPortfolio)){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio'); 
    }
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));


/*===== GSAP ANIMATION =====*/
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 0.5, x: 60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: 0.8, y: 25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: 0.2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: 0.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: 0.2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: 0.2})


