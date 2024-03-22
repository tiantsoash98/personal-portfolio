// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const slides = ref(null)
    const defaultEase = ref("")
    let delay = 0

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        const { gsap } = useGsap()

        slides.value = document.querySelectorAll(".page-loader__slide--overflow")
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"

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

        const tl = gsap.timeline()  
        tl.add(timelineSlides())
        tl.add(timelineFrame(), '-=0.5')

        return tl
    }

    // Slides timeline (Tiantsoa -> Web Designer -> Creative Dev)
    function timelineSlides (){
        const { gsap, CustomEase } = useGsap()
        let slideAppearDuration = 0.3

        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: CustomEase.create("customEase", defaultEase.value)
            },
        })  
        
        tl
            .to('.page-loader__slide--visible', { 
                yPercent: -100,
                delay: slideAppearDuration
            })

        // Animations
        slides.value.forEach(slide => {
            tl
                .fromTo(slide, { 
                    yPercent: 0,
                }, {
                    yPercent: -100,
                }, '<')
                .to(slide, { 
                    yPercent: -200,
                    delay: slideAppearDuration
                })
        })

        return tl;
    }

    // Animate Page loader frame out
    function timelineFrame (){
        const { gsap, CustomEase } = useGsap()

        const tl = gsap.timeline({
            defaults: {
                duration: 0.9,
                ease: CustomEase.create("customEase", defaultEase.value)
            },
        })  

        tl
            .fromTo('.page-loader__frame', { 
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                
            }, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' 
            })

        return tl
    }


    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}