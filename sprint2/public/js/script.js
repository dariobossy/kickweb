gsap.registerPlugin(ScrollTrigger);

gsap.set(".section-1 .img-heart", {xPercent: 0, yPercent: 0}),
gsap.to(".section-1 .img-heart", {scale: 0, x: "0%", scrollTrigger: {
      trigger: ".section-1 .img-heart",
      start: "center center",
      end: "+=1000",
      //markers:true,
      pin:true,
      scrub: true
}})


/*gsap.set(".section-1 .inner-middle-left", {x: "0%", yPercent: 0}),
gsap.to(".section-1 .inner-middle-left", {x: "-150%", scrollTrigger: {
      trigger: ".section-1 .inner-middle-left",
      start: "left center",
      end: "+=1000",
      markers:true,
      pin:true,
      scrub: true
}})*/

gsap.set(".section-1 .inner-middle-left", {opacity: "1", y: 0}),
gsap.to(".section-1 .inner-middle-left", {opacity: "0", y: -200, scrollTrigger: {
      trigger: ".section-1 .inner-middle-left",
      start: "0%",
      end: "+=300",
      //markers:true,
      //pin:true,
      scrub: true
}})

gsap.set(".section-1 .inner-middle-right", {opacity: "1", y: 0}),
gsap.to(".section-1 .inner-middle-right", {opacity: "0", y: -200, scrollTrigger: {
      trigger: ".section-1 .inner-middle-right",
      start: "0%",
      end: "+=300",
      //markers:true,
      //pin:true,
      scrub: true
}})

gsap.set(".section-2 .inner-middle .first-try", {opacity: "0", y: 0}),
gsap.to(".section-2 .inner-middle  .first-try", {opacity: "1", scrollTrigger: {
      trigger: ".section-2",
      start: "-150",
      end: "+=500",
      //markers:true,
      pin:true,
      scrub: true
}})

gsap.set(".section-2 .inner-middle .second-try", {opacity: "0", y: 0}),
gsap.to(".section-2 .inner-middle  .second-try", {opacity: "1", scrollTrigger: {
      trigger: ".section-2",
      start: "0",
      end: "+=600",
      //markers:true,
      pin:true,
      scrub: true
}})

gsap.set(".section-2 .inner-middle .third-try", {opacity: "0", y: 0}),
gsap.to(".section-2 .inner-middle  .third-try", {opacity: "1", scrollTrigger: {
      trigger: ".section-2",
      start: "150",
      end: "+=600",
      //markers:true,
      pin:true,
      scrub: true
}})

gsap.from(".section-2 .inner-middle .first-try svg path", {
	scrollTrigger: {
		trigger: ".section-2 .inner-middle .first-try",
		start: "top 75%",
            //start: "0";
            ease: "none",
            drawSVG: "75% 75%"
      }
});

/* SECTION 3 - DRIVING */

gsap.set(".section-3 .text-transformed div", {x: "0", y: "250"}),
gsap.to(".section-3 .text-transformed div", {x: "0", y: "-1420", scrollTrigger: {
      trigger: ".section-3",
      start: "0",
      end: "+=1200",
      //markers:true,
      pin:true,
      scrub: true
}})
/* SECTION 4 */

gsap.set(".section-4 .text-large", {x: "0", y: "-00", opacity: 0.4, scale: 0.8}),
gsap.to(".section-4 .text-large", {x: "0", y: "200", opacity: 1, scale: 1, scrollTrigger: {
      trigger: ".section-4",
      //start: "0",
      //end: "+=1000",
      //markers:true,
      //pin:true,
      scrub: true
}})

/*gsap.set(".section-5 .text-large", {rotate: "-30", y: 0}),
gsap.to(".section-5 .text-large", {rotate: "5", scrollTrigger: {
      trigger: ".section-5",
      start: "0",
      end: "+=700",
      //markers:true,
      pin:true,
      scrub: true
}})*/