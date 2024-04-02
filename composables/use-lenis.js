import Lenis from '@studio-freight/lenis'

export default () => {
    const lenisOptions = {
        duration: 1.3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    }
    const lenis = ref(null)

    const initLenis = () => { 
        lenis.value = new Lenis(lenisOptions)
    
        function raf(time) {
            lenis.value.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
        initAnchorScroll()
    }

    const destroyLenis = () => {
        if(lenis.value){
            lenis.value.destroy()
        }
    }
    
    const initAnchorScroll = () => {
        document.querySelectorAll('a[href^="/#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()

                let id = el.getAttribute('href')?.slice(2)
                if (!id) return
                
                const target = document.getElementById(id)
                if (target) {
                    lenis.value.scrollTo(target.value, { 
                        offset: -100, 
                        duration: 3,
                    })
                }
            })
        })
    }

    return { 
        lenis,
        initLenis,
        destroyLenis
    }
}