function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            scrub: 2,
            pin: true,
            end: "bottom -250%"
        }
    })
    
    tl
        
        .to("#centerimg",{
            left: "50%",
            duration: 5,
            ease: Power1
        })
    
        .to("#circle #btm img", {
            scale: ".7", 
            rotate: "-180deg",
            duration: 3,
            stagger: .3,
            ease: Power1
        }, "hello1")
    
        .to("#circle #top img", {
            scale: ".7",
            duration: 3,
            stagger: .3,
            ease: Power1
        }, "hello1")
    
        .to("#cimage img", {
            scale: "0",
            duration: 8,
            scrub:1,
            stagger: .1,
            ease: Power1
        }, "hello1")
    
        .to("#centerimg h5", {
            opacity: "0",
            stagger: .1,
            ease: Power1
        }, "hello1")
    
        .to("#circle", {
            scale: ".6",
            duration: 5,
            ease: Power1
        }, "hello1")
    
        .to("#overlay>h1#gallery", {
            bottom: "-60%",
            duration: 4,
            ease: Power1
        }, "hello1")
    
        .to("#gola", {
            top: "50%",
            scale: 2,
            ease: Power1
        }, "hello1")
    
        .to("#gola", {
            opacity: "0",
            scale: 0,
            ease: Power1
        }, "hello2")
    
        .to("#smcircle", {
            scale: "0",
            duration: 5,
            ease: Power1
        }, "hello2")
    
        .to("#circle", {
            scale: "0",
            duration: 5,
            ease: Power1
        }, "hello2")
    
        .to("#overlay>h1#pf", {
            bottom: "10%",
            rotate: "0",
            duration: 3,
            ease: Power1
        }, "hello2")
    
        .to("#pinkpart",{
            top: "0%",
            duration: 8,
            ease: Power1
        }, "hello2")
        
        .to("#pinkpart",{
            top: "-30%",
            delay:3,
            duration: 2,
            ease: Power1
        })
}

timelineOne();


function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            duration: 5,
            scrub: 2,
            start: "top top",
            end: "bottom -150%",
            pin: true
        }
    })

    tl2
        .to("#stop .circle",{
            top:"50%",
            ease: Power1,
            duration:5,
            stagger: .1
        })

        .to("#stop .circle",{
            left:"50%",
            duration:5,
            ease: Power1,
            stagger: .1
        })

        .to(".pi",{
            scale:"10",
            duration:5,
            ease: Power1,
            stagger: .1
        })

        .to(".pi",{
            background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
            duration: 3,
            ease: Power1,
        })

        .to("#stop h1",{
            left: "-350%",
            duration: 5,
            scrub: 3,
            ease: Power1
        })

        .to("#sbtm #one",{
            opacity: 0,
            duration: 3,
            ease: Power1
        })

        .to("#sbtm #two",{
            opacity: 1,
            delay: 1,
            duration: 3,
            ease: Power1
        })
}

timelineTwo();