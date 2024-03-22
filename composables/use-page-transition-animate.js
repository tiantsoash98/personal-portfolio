// Header Menu open & close animations
export default () => {
    let timelineTransitionIn = null
    let timelineTransitionOut = null

    // Init header menu animate on mounted
    const initPageTransitionAnimate = () => {
        const { gsap } = useGsap()

        // Init transition in timeline
        timelineTransitionIn = gsap.timeline()
        timelineTransitionIn.add(timelineTransitionInAnimations())
        timelineTransitionIn.pause()

        // Init transition out timeline
        timelineTransitionOut = gsap.timeline()
        timelineTransitionOut.add(timelineTransitionOutAnimations())
        timelineTransitionOut.pause()
    }

    const destroyPageTransitionAnimate = () => {
        // Destroy 
    }
        
    // Menu open animation
    const playPageTransitionInAnimation = () => {
        if(timelineTransitionIn)
            return timelineTransitionIn.restart()  
    }

    // Menu close animation
    const playPageTransitionOutAnimation = () => {
        if(timelineTransitionOut)
            return timelineTransitionOut.restart() 
    }


    function timelineTransitionInAnimations () {
        const { gsap } = useGsap()

        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.inOut"
            },
        })

        // Animations
        tl
            .to('.page-transition', { 
                display: 'block', 
            })
            .to('.page-transition__frame', { 
                opacity: 1
            }, 0)

        return tl
    }

    function timelineTransitionOutAnimations () {
        const { gsap } = useGsap()
        const tl = gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: "power1.inOut"
            },
        })

        // Animations
        tl
            .to('.page-transition__frame', { 
                opacity: 0
            })
            .to('.page-transition', { 
                display: 'none', 
            })
            

        return tl
    }

    return { 
        initPageTransitionAnimate,
        destroyPageTransitionAnimate,
        playPageTransitionInAnimation,
        playPageTransitionOutAnimation,
    }
}