let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#opening-page",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=400px",
    }
});

tl.to(".images-container>.image-card>img", {
    scale: 1
}, 0);

tl.to(".images-container", {
    scale: 2,
    rotate: 0
}, 0);


tl.to(".text-layer", {
    height: "100%"
}, 0.3);

tl.to(".text-layer h1", {
    scale: 1
}, 0.8);

tl.to(".images-container", {
    scale: 0.8,
    opacity: 0.2
}, 0.7);

document.addEventListener('DOMContentLoaded',() => {
    // Functionality for scroll button
    document.getElementById('scrollButton').addEventListener('click', () => {
        gsap.to(window, {
            duration: 1, // Adjust the duration as needed
            scrollTo: 700,
        });
    });
});