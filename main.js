let images = document.querySelectorAll('.row>img');
images.forEach(image => {
    image.style.transition = 'transform 0.3s'; // Transition duration of 0.3 seconds
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

gsap.from('.row>img', {
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
    stagger: 0.1,
});

gsap.to('#images-container', {
    transform: 'rotate(0deg)',
    scrollTrigger: {
        trigger: '#images-container',
        scroller: 'body',
        start: 'top 5%',
        end: 'top',
        markers: true,
        scrub: 3,
    },
});

// gsap.to('.other-pages', {
//     display: 'block',
//     backgroundColor: 'rgba(0, 0, 0, 1)',
//     scrollTrigger: {
//         trigger: '.other-pages',
//         scroller: 'body',
//         start: 'top 60%',
//         end: 'top 50%',
//         markers: true,
//         scrub: true,
//     },
// });