import gsap from 'gsap'

const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onLeave: (el, done) => {
        const tl = gsap.timeline({
            paused: true,
            onComplete: done,
            defaults: {
                duration: 0.6,
                ease: "power2.out",
            }
        })  
      
        tl
            .set('.page-transition', { 
                display: 'block',
            })
            .set('.page-transition__text', { 
                yPercent: 100,
            })

        tl
            .to('.page-transition__frame', { 
                opacity: 1,
            })
            .to('.page-transition__text', { 
                yPercent: 0,
            })

        tl.restart()
    },
    onBeforeEnter: (el) => {

    },
    onEnter: (el, done) => {
        setTimeout(() => { done()}, 10)
    },
    onAfterEnter: (el, done) => {

        const tl = gsap.timeline({
            paused: true,
            onComplete: done,
            defaults: {
                duration: 0.6,
                ease: "power2.in",
            }
        })  
        
        tl
            .to('.page-transition__text', { 
                yPercent: -100,
            })
            .to('.page-transition__frame', { 
                opacity: 0,
            })
            .to('.page-transition', { 
                display: 'none',
            }, '<')

            
        
        tl.restart()
    }
}

export default pageTransition;
