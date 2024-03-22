// Section reveal class : .section-reveal
// Title : .section-reveal__title
export default () => {
    const { gsap } = useGsap()
    const sections = ref(null)
    const defaultEase = ref(null)
    const defaultAnimationDuration = ref(null)

    const initSectionRevealScroll = () => { 
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-animation-duration') || 0.7
        defaultAnimationDuration.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"
        sections.value = document.querySelectorAll(".section-reveal")

        sections.value.forEach(section => {
            timelineSectionRevealScrollAnimations(section)
        })
    }

    const destroySectionRevealScroll = () => {
        // Destroy here
    }

    function timelineSectionRevealScrollAnimations (section) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                //trigger element - viewport
                start: "top bottom",
                end: "top center"
            }
        })  
        tl.add(timelineTitleIn(section))

        return tl
    }

    // Animate title reveal
    function timelineTitleIn (section){
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            }
        })  

        section.querySelectorAll('.section-reveal__title')
            .forEach(title => {
                tl
                    .from(title.querySelectorAll('.split-type--line'), { 
                        yPercent: 100,
                        stagger: 0.08
                    })
            })

        return tl
    }

    return { 
        initSectionRevealScroll,
        destroySectionRevealScroll
    }
}