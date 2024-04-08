import gsap from 'gsap'
const title = ref(null)
const ellipse = ref(null)

const pageTransition = {
    name: 'custom-page-transiton',
    mode: 'out-in',
    onAfterEnter: (el, done) => { // On mounted init has been called
        window.scrollTo(0, 0)
        title.value = el.querySelector(".animate__title-in")
        ellipse.value = el.querySelector(".animate__ellipse-in")

        const tl = gsap.timeline({
            paused: true,
            onComplete: done
        })  
        tl.add(timelineFrameOut())

        if(title.value)
            tl.add(timelineTitleIn(), '-=1.1')

        if(ellipse.value)
            tl.add(timelineEllipseIn(), '-=1')
        

        setTimeout(() => { 
            tl.play(0)
        }, 600)
    }
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

function timelineEllipseIn (el){
    let ellipseInitialScale = ellipse.value.dataset.scale || 1

    const tl = gsap.timeline({
        defaults: {
            duration: 1.5,
            ease: "power2.out"
        },
    })  

    tl
        .fromTo(ellipse.value, { 
            scaleX: ellipseInitialScale,
            scaleY: 0
        }, {
            scaleX: ellipseInitialScale,
            scaleY: ellipseInitialScale
        })

    return tl
}

export default pageTransition;
