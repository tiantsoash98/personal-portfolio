// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const slides = ref(null)
    let delay = 0

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        const { gsap } = useGsap()

        slides.value = document.querySelectorAll(".page-loader__slide")

        // Init open timeline
        timelineLoaderOut = gsap.timeline()
        timelineLoaderOut.add(timelineLoaderOutAnimations())
        timelineLoaderOut.pause()
    }

    const destroyPageLoaderAnimate = () => {
        // Dispose here
    }
        
    // Menu open animation
    const playPageLoaderOut = () => {
        if(timelineLoaderOut)
            return timelineLoaderOut.restart()  
    }


    function timelineLoaderOutAnimations () {
        const { gsap } = useGsap()
        let slideAppearDuration = 0.3

        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power3.inOut"
            },
        })    

        // Animations
        slides.value.forEach(slide => {
            tl.fromTo(slide, { 
                yPercent: 100,
            }, {
                yPercent: 0,
            }, '<')
            .to(slide, { 
                yPercent: -100,
                delay: slideAppearDuration
            })
        })

        return tl
    }


    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}