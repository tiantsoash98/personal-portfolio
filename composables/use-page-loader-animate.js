// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const defaultEase = ref("")
    const slides = ref(null)
    const ellipse = ref(null)

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        const { gsap } = useGsap()

        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"
        slides.value = document.querySelectorAll(".page-loader__slide--overflow")
        ellipse.value = document.querySelector(".animate__ellipse-in")

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
        tl.add(timelineLoaderFrame(), '-=0.2')

        if(ellipse.value)
            tl.add(timelineEllipseIn(), '-=0.9')

        return tl
    }

    // Slides timeline (Tiantsoa -> Web Designer -> Creative Dev)
    function timelineSlides (){
        const { gsap, CustomEase } = useGsap()
        let slideAppearDuration = 0.2

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
    function timelineLoaderFrame (){
        const { gsap } = useGsap()

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power1.inOut"
            },
        })  

        tl
            .to('.page-loader__frame', { opacity: 0 })

        return tl
    }

    // Animate Ellipse in
    function timelineEllipseIn (){
        const { gsap, CustomEase } = useGsap()
        let ellipseInitialScale = ellipse.value.dataset.scale || 1

        const tl = gsap.timeline({
            defaults: {
                duration: 1.3,
                ease: CustomEase.create("customEase", defaultEase.value)
            },
        })  

        tl
            .fromTo('.animate__ellipse-in', { 
                scaleX: ellipseInitialScale,
                scaleY: 0
            }, {
                scaleX: ellipseInitialScale,
                scaleY: ellipseInitialScale
            })

        return tl
    }


    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}