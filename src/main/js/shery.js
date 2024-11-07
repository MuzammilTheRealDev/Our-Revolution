Shery.mouseFollower();

Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".text-target", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect(".float", {
    style: 1,
    config:{"a":{"value":0,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666780730713378},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.03,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.02,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true,
});

Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: .2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,

});

gsap.from('.anim1', {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo

});

gsap.from('.anim2', {
    y: 20,
    stagger: .2,
    opacity: 0,
    ease: 'power3.inOut',

});

gsap.from('.anim3', {
    y: 10,
    duration: 1.5,
    stagger: .2,
    opacity: 0,
    delay: .2,
    ease: 'power4.inOut',
    scale:0,
    scrollTrigger:'.anim3'
});

gsap.from('.anim4', {
    x: -20,
    stagger: .2,
    opacity: 0,
    delay: .2,
    ease: 'power3.inOut',
    scrollTrigger:'.anim3'

});


