import gsap from 'gsap'

const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onBeforeLeave: (el, done) => {
        console.log('On Leave start')
        const tl = gsap.timeline({
            paused: true,
            onComplete: done,
            defaults: {
                duration: 0.4,
                ease: "power2.inOut",
            }
        })  
      
        tl
            .to(el, { 
                opacity: 0,
            })

        tl.restart()
    },
    onEnter: (el, done) => {
        console.log('On Enter')
        setTimeout(() => { done( )}, 10)
    },
    onAfterEnter: (el, done) => {
        console.log('After enter')

        const tl = gsap.timeline({
            paused: true,
            onComplete: done,
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            }
        })  
        
        tl
            .from(el, { 
                opacity: 0,
            })

        let delay = 0

        el.querySelectorAll('.animate__title-in .split-type--word')
            .forEach(function(word){
                tl.from(word, { 
                    yPercent: 100,
                    delay: delay,
                })
                delay += 0.04
            })
            
        
        tl.restart()
    }
}

export default pageTransition;
