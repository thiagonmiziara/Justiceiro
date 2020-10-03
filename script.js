const dark = document.querySelector('.btn-dm');
dark.addEventListener('click', () => {

    document.body.classList.toggle('darkMode');

});

const scroll = document.querySelector('.seriado');

scroll.addEventListener('scroll', () => {
    console.log('funciona')
})

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }

    });
}

animeScroll();
if (target.length) {
    window.addEventListener('scroll', () => {
        animeScroll();
    })
}