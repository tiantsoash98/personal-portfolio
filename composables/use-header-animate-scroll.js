export default () => {
    const { gsap } = useGsap()
    const headerStartAnimateScrollPosition = useHeaderStartAnimateScrollPosition()

    const timeline = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "power2.inOut"
        },
        scrollTrigger: {
            trigger: 'body',
            //trigger element - viewport
            toggleActions: "play none none reverse",
            start: `top -${ headerStartAnimateScrollPosition.value }px`,
        }
    })
    .to('.header-web__hide-on-scroll', { 
        opacity: 0, 
        yPercent: -50, 
        stagger: {
            each: 0.08,
            from: "end",
        },
        pointerEvents: 'none'
    })
    .fromTo('.header-web__show-on-scroll', { 
        opacity: 0, 
        yPercent: 50,
    }, { 
        opacity: 1, 
        yPercent: 0,
    }, '<+0.3s')  
    .to('.header-web__menu-wrapper', { 
        pointerEvents: 'all',
    }, '<')

    return { 
        timeline
    }
}