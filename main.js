let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#opening-page",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=500px",
    }
});

tl.to(".images-container>.image-card>img", { scale: 1 }, 0);
tl.to(".images-container", { scale: 2, rotate: 0 }, 0);


tl.to(".text-layer", { height: "100%" }, .2);
tl.to(".text-layer h1", { scale: 1 }, .6);
tl.to(".images-container", { scale: .8, opacity: .2 }, .6);