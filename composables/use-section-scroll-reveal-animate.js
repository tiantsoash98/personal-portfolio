// Section reveal class : .section-reveal
export default () => {
    const { gsap } = useGsap()

    const initSectionScrollRevealAnimate = () => { 
        // Init here
    }

    const destroySectionScrollRevealAnimate = () => {
        // Destroy here
    }

    // Animate title reveal by words
    const textRevealByWord = (targetSection) => {
        if(!targetSection || !targetSection.value)
            return null

        var words = targetSection.value.querySelectorAll('.section-reveal__text .split-type--word')

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from(words, { 
                yPercent: 100,
                stagger: 0.04,
            })

        return tl
    }

    // Animate title reveal by line
    const textRevealByLine = (targetSection) => {
        if(!targetSection || !targetSection.value)
            return null

        var lines = targetSection.value.querySelectorAll('.section-reveal__text .split-type--line')

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from(lines, { 
                yPercent: 100,
                stagger: 0.09,
            })

        return tl
    }

    // Animate text block item
    const textBlockReveal = (targetSection) => {
        if(!targetSection || !targetSection.value)
            return null

        var blocks = targetSection.value.querySelectorAll('.section-reveal__block')

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from(blocks, { 
                y: '5vh',
                opacity: 0,
                stagger: 0.1,
            })

        return tl
    }

    // Animate Border item
    const borderReveal = (targetSection) => {
        if(!targetSection || !targetSection.value)
            return null

        var border = targetSection.value.querySelector('.section-reveal__border')

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from(border, { 
                scaleX: 0,
            })

        return tl
    }

    // Animate ellipse
    const ellipseReveal = (targetSection) => {
        if(!targetSection || !targetSection.value)
            return null

        var ellipse = targetSection.value.querySelector('.section-reveal__ellipse')

        const tl = gsap.timeline({
            defaults: {
                duration: 1.5,
                ease: "power1.inOut"
            },
        })  

        tl
            .from(ellipse.querySelector('.ellipse__wrapper'), { 
                scaleX: 0,
                opacity: 0
            })

        return tl
    }

    return { 
        initSectionScrollRevealAnimate,
        destroySectionScrollRevealAnimate,
        borderReveal,
        ellipseReveal,
        textBlockReveal,
        textRevealByWord,
        textRevealByLine,
    }
}