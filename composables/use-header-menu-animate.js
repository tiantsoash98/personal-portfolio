export default () => {
    let timelineOpen = null
    let timelineClose = null
    let timelineLinksHover = null

    // Init header menu animate on mounted
    const initHeaderMenuAnimate = () => {
        const { gsap } = useGsap()

        // Init open timeline
        timelineOpen = gsap.timeline()
        timelineOpen.add(timelineOpenAnimations())
        timelineOpen.pause()

        // Init close timeline
        timelineClose = gsap.timeline()
        timelineClose.add(timelineCloseAnimations())
        timelineClose.pause()

        // Init links timeline
        timelineLinksHover = gsap.timeline()
        timelineLinksHover.add(timelineLinksHoverAnimations())
        timelineLinksHover.pause()
    }

    const destroyHeaderMenuAnimate = () => {
        // Destroy header menu logic here
    }
        
    // Menu open animation
    const playOpenAnimation = () => {
        if(timelineOpen)
            return timelineOpen.restart()  
    }

    // Menu close animation
    const playCloseAnimation = () => {
        if(timelineClose)
            return timelineClose.restart() 
    }

    // Links hover animation to target ellipse
    const playLinksHoverAnimation = () => {
        if(timelineLinksHover)
            return timelineLinksHover.restart()  
    }

    // Links hover animation to target ellipse
    const playLinksHoverOutAnimation = () => {
        if(timelineLinksHover)
            return timelineLinksHover.reverse()  
    }

    function timelineOpenAnimations () {
        const { gsap } = useGsap()

        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.inOut"
            },
        })

        // Initial state
        tl
            .set('.menu', { 
                display: 'block', 
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' 
            })
            .set('.menu .ellipse__wrapper', { 
                scale: 0
            })
            
        // Animations
        tl
            .to('.menu', { 
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
            })
            .fromTo('.menu-link__title', { 
                opacity: 0,
                yPercent: -10
            }, { 
                opacity: 1,
                yPercent: 0,
                stagger: 0.15
            }, '<+0.1')
            .to('.menu .ellipse__wrapper', { 
                scale: 1,
                duration: 1.3,
                ease: "power1.inOut"
            }, '-=0.7')

        return tl
    }

    function timelineCloseAnimations () {
        const { gsap } = useGsap()
        const tl = gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: "power1.inOut"
            },
        })

        // Animations
        tl
            .to('.menu', { opacity: 0 })
            .to('.menu', { display: 'none' })

        return tl
    }

    function timelineLinksHoverAnimations () {
        const { gsap } = useGsap()
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power1.inOut"
            },
        })

        // Animations
        tl
            .to('.menu .ellipse__wrapper', { 
                scale: 1.2,
            })

        return tl
    }

    return { 
        initHeaderMenuAnimate,
        destroyHeaderMenuAnimate,
        playOpenAnimation,
        playCloseAnimation,
        playLinksHoverAnimation,
        playLinksHoverOutAnimation
    }
}