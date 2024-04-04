// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const defaultEase = ref("")
    const slides = ref(null)
    const ellipse = ref(null)
    const title = ref(null)
    const { gsap, CustomEase } = useGsap()

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"
        slides.value = document.querySelectorAll(".page-loader__slide--overflow")
        ellipse.value = document.querySelector(".animate__ellipse-in")
        title.value = document.querySelector(".animate__title-in")

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
        const tl = gsap.timeline()  
        tl.add(timelineSlides())

        if(document.querySelector('.page-loader__frame'))
            tl.add(timelineLoaderFrame(), '-=0.5')

        if(title.value)
            tl.add(timelineTitleIn(), '-=1.1')

        if(ellipse.value)
            tl.add(timelineEllipseIn(), '-=1')

        return tl
    }

    // Slides timeline (Tiantsoa -> Web Designer -> Creative Dev)
    function timelineSlides (){
        let slideAppearDuration = 0.2

        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: CustomEase.create("customEase", defaultEase.value)
            },
        })  
        
        if(document.querySelector('.page-loader__slide--visible')) {
            tl
                .to('.page-loader__slide--visible', { 
                    yPercent: -100,
                    delay: slideAppearDuration
                })
        }
        
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

    // Animate title reveal
    function timelineTitleIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from('.animate__title-in .split-type--word', { 
                yPercent: 100,
                stagger: 0.04,
            })

        return tl
    }

    // Animate Ellipse in
    function timelineEllipseIn (){
        let ellipseInitialScale = ellipse.value.dataset.scale || 1

        const tl = gsap.timeline({
            defaults: {
                duration: 1.5,
                ease: "power2.out"
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