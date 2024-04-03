
// https://gsap.com/community/forums/topic/27739-change-marquee-direction-on-scroll/
// Marquee class : .marquee 
export default () => {
    
    const scrollDown = useScrollDownState()
    const marqueeTween = ref(null)

    const initMarquee = () => {
        const { gsap } = useGsap()
        var marquees = document.querySelectorAll('.marquee')
        
        if(marquees){
            marqueeTween.value = gsap.to(".marquee", {
                xPercent: -100, 
                repeat: -1, 
                duration: 20, 
                ease: "linear"
            }).totalProgress(0.5)
    
            toogleMarqueeDirectionOnScroll()
        }
    }

    const toogleMarqueeDirectionOnScroll = () => {
        const { gsap } = useGsap()
        
        watch(scrollDown, (newScrollDirection) => {
            if(marqueeTween.value){
                gsap.to(marqueeTween.value, {
                    timeScale: newScrollDirection? 1 : -1 // -1 will reverse the animation
                })
            }
        })
    }

    const destroyMarquee = () => {
        marqueeTween.value = null
    }


    return {
        initMarquee,
        destroyMarquee
    }
}