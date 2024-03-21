export default () => {
    const { gsap } = useGsap()

    const timelineOpen = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "power2.inOut"
        },
    })
    timelineOpen.pause()
    

    const playOpenAnimation = () => {
        return timelineOpen.play()
    }

    const playCloseAnimation = () => {
        //return timelineOpen.play()
    }

    return { 
        playOpenAnimation,
        playCloseAnimation
    }
}