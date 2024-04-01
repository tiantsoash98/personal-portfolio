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

    return { 
        initSectionScrollRevealAnimate,
        destroySectionScrollRevealAnimate,
        textRevealByWord,
        textRevealByLine
    }
}