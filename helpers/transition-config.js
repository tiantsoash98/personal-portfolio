import gsap from 'gsap'
const title = ref(null)

const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onLeave: (el, done) => {
        const tl = gsap.timeline({
            paused: true,
            onComplete: done
        })  
        tl.add(timelineFrameIn())
        
        tl.restart()
    },
    onBeforeEnter: (el) => {
        // Before Enter
    },
    onEnter: (el, done) => {
        setTimeout(() => { done()}, 10)
    },
    onAfterEnter: (el, done) => {
        title.value = el.querySelector('.animate__title-in')

        const tl = gsap.timeline({
            paused: true,
            onComplete: done
        })  
        tl.add(timelineFrameOut())

        if(title.value)
            tl.add(timelineTitleIn(), '-=1.1')
        
        tl.restart()
    }
}

function timelineFrameIn (el){
    const tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut",
        }
    })  
    
    tl
        .set('.page-transition', { 
            display: 'block',
        })

    tl
        .to('.page-transition__frame', { 
            opacity: 1,
        }, '<')

    return tl
}

function timelineFrameOut (el){
    const tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut",
        }
    })  
    
    tl
        .to('.page-transition__frame', { 
            opacity: 0,
        }, '<')
        .to('.page-transition', { 
            display: 'none',
        })

    return tl
}

function timelineTitleIn (el){
    var words = title.value.querySelectorAll('.split-type--word')

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

export default pageTransition;
