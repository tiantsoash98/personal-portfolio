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
    const titleRevealByWord = (target) => {
        const _target = document.querySelector(target)
        if(!_target.value)
            return

        var words = _target.value.querySelectorAll('.section-reveal__title .split-type--word')

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
    const titleRevealByLine = (target) => {
        const _target = document.querySelector(target)
        if(!_target.value)
            return

        var words = _target.value.querySelectorAll('.section-reveal__title .split-type--line')

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from(words, { 
                yPercent: 100,
                stagger: 0.09,
            })

        return tl
    }

    return { 
        initSectionScrollRevealAnimate,
        destroySectionScrollRevealAnimate,
        titleRevealByWord,
        titleRevealByLine
    }
}