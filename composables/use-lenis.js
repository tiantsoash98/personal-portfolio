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
    }

    const destroyLenis = () => {
        if(lenis.value){
            lenis.value.destroy()
        }
    }

    return { 
        initLenis,
        destroyLenis
    }
}