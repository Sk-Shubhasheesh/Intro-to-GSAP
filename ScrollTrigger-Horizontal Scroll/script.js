gsap.to("#page2 h1", {
    transform: "translateX(-155%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        scrub: 2,
        start: "top 0",
        end: "top -100%",
        scrub:2,
        pin:true
    }
})