export default () => {
    let timelineOpen = null

    // Init header menu animate on mounted
    const initHeaderMenuAnimate = () => {
        const { gsap } = useGsap()

        // Init open timeline
        timelineOpen = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power2.inOut"
            },
        })
        timelineOpen.pause()

        // Menu open animation
        timelineOpen.to('.menu', { display: 'block' })
    }

    const playOpenAnimation = () => {
        if(timelineOpen)
            return timelineOpen.play()
    }

    const playCloseAnimation = () => {
        if(timelineOpen)
            return timelineOpen.reverse()
    }

    return { 
        initHeaderMenuAnimate,
        playOpenAnimation,
        playCloseAnimation
    }
}