import gsap from 'gsap'

const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onLeave: (el, done) => {

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
    onBeforeEnter: (el) => {
        el.style.opacity = 0
        // el.querySelectorAll('.split-type--word')
        //     .forEach(function(word){
        //         word.style.transform = 'translate(0%, 100%)'
        //     })
    },
    onEnter: (el, done) => {
        setTimeout(() => { done()}, 10)
    },
    onAfterEnter: (el, done) => {

        const tl = gsap.timeline({
            paused: true,
            onComplete: done,
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            }
        })  
        
        tl
            .to(el, { 
                opacity: 1,
            })

        // let delay = 0

        // el.querySelectorAll('.split-type--word')
        //     .forEach(function(word){
        //         console.log('Word')
        //         tl.to(word, { 
        //             yPercent: 0,
        //             delay: delay
        //         }, 0)

        //         delay += 0.04
        //     })
            
        
        tl.restart()
    }
}

export default pageTransition;
