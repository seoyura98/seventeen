$(function () {

    /*header*/
    Splitting();

/*con01*/
gsap.timeline({
    scrollTrigger: {
        trigger: ".con01",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 2,
        markers: true,
    }
})
    .fromTo(
        ".con01 video", { "clip-path": "inset(60% 60% 60% 60% round 30%)" }, { "clip-path": "inset(0% 0% 0% 0% round 0%)", ease: "none", duration: 10 }
    )

    /*con02 */
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con02",
            start: "0% 100%",
            end: "0% 30%",
            scrub: 2,
        }
    })
        .fromTo(
            ".con02 .seventeen", { x: "-100%" }, { x: "0%", ease: "none", duration: 5 }
        )
        .fromTo(
            ".con02 .member", { x: "100%" }, { x: "0%", ease: "none", duration: 5 }
        )

    gsap.timeline({
        scrollTrigger: {
            trigger: ".list",
            start: "0% 100%",
            end: "0% 100%",
            scrub: 2,

        }
    })
        .to("body", { backgroundColor: "#f7cac9", color: "#222", ease: "none", duration: 5 }, 0)
        .to(".con02 .title", { position: "fixed", left: 0, top: 0, width: "100%", ease: "none", duration: 5 }, 0)
    
    gsap.timeline({
        scrollTrigger: {
            trigger: ".list",
            start: "100% 50%",
            end: "100% 0%",
            scrub: 2,
        }
    })
        .to(
            ".con02 .seventeen", { x: "-100%", ease: "none", duration: 5 }
        )
        .to(
            ".con02 .member", { x: "100%", ease: "none", duration: 5 }
    )
    
    /*con03*/

    gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger: ".con03",
                start: "0% 50%",
                end: "30% 0%",
                scrub: 2,
            },
        })
            .fromTo(".circle",
                { width: 0, height: 0, duration: 10, top: "15%" },
                {
                    width: "100%", height: "100%", duration: 10, top: "40%"
                })
                .fromTo(".txt",
                    { top: "50%", opacity: 0, duration: 5 },
                    { top: "20%", opacity: 1, duration: 5 })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".con03 .txt",
                start: "0% 80%",
                end: "100% 50%",
                scrub: 2,
                markers: true,
            },
        })

})
