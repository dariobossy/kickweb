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
      end: "+=700",
      //markers:true,
      pin:true,
      scrub: true
}})


//driving
gsap.set(".section-3 .text-transformed div", {x: "0", y: "200"}),
gsap.to(".section-3 .text-transformed div", {x: "0", y: "-200", scrollTrigger: {
      trigger: ".section-3",
      start: "0",
      end: "+=1000",
      //markers:true,
      pin:true,
      scrub: true
}})


// hes telling me
gsap.set(".section-4 .text-large", {x: "0", y: "-200", opacity: 0.4, scale: 0.8}),
gsap.to(".section-4 .text-large", {x: "0", y: "200", opacity: 1, scale: 1, scrollTrigger: {
      trigger: ".section-4",
      //start: "0",
      //end: "+=1000",
      //markers:true,
      //pin:true,
      scrub: true
}})


// and more
gsap.set(".section-5 .text-large", {rotate: "-30", y: 0}),
gsap.to(".section-5 .text-large", {rotate: "5", scrollTrigger: {
      trigger: ".section-5",
      start: "0",
      end: "+=700",
      //markers:true,
      pin:true,
      scrub: true
}})


// fire my imagination text
gsap.set(".section-7 .text-large", {opacity: "1", y: 0}),
gsap.to(".section-7 .text-large", {opacity: "1", scrollTrigger: {
      trigger: ".section-7",
      start: "0",
      end: "+=1200",
      //markers:true,
      pin:true,
      scrub: true
}})

// fire my imagination bg
gsap.set(".section-7 .background", {scale: "1", y: 0}),
gsap.to(".section-7 .background", {scale: "0.75", scrollTrigger: {
      trigger: ".section-7",
      start: "0",
      end: "+=1200",
      //markers:true,
      pin:true,
      scrub: true
}})

// no, no, hey
gsap.set(".section-9 .text-large", {rotate: "-30", y: 0}),
gsap.to(".section-9 .text-large", {rotate: "5", scrollTrigger: {
      trigger: ".section-9",
      start: "0",
      end: "+=700",
      //markers:true,
      pin:true,
      scrub: true
}})