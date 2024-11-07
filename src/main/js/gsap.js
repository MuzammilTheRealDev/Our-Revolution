var tl = gsap.timeline();

tl.from(".info",{
    y:-30,
    duration:.5,
    delay:.5,
    opacity:0
});

tl.from(".logo",{
    y:-30,
    duration:.5,
    opacity:0
});

tl.from(".toggle-btn",{
    y:-30,
    duration:.5,
    opacity:0
});

tl.from(".line-one",{
    x:-30,
    duration:.5,
    opacity:0
},"-=.7");

tl.from(".line-two",{
    x:-30,
    duration:.5,
    opacity:0
},"-=.5");

tl.from(".line-three",{
    x:-30,
    duration:.5,
    opacity:0
},"-=.3");

