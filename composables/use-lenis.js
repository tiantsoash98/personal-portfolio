import Lenis from '@studio-freight/lenis'

export default () => {
    const lenisOptions = {
        duration: 1.3,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
        direction: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    }

    const initLenis = () => {
        const lenis = new Lenis(lenisOptions)
        window.lenis = lenis
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)

        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                const id = el.getAttribute('href')?.slice(1)
                if (!id) return
                
                const target = document.getElementById(id)
                if (target) {
                    // target.scrollIntoView({ behavior: 'smooth' })
                    lenis.scrollTo(el.getAttribute('href'), { 
                        offset: -70, 
                        duration: 1.5
                    })
                }
            })
        })
    }

    const destroyLenis = () => {

    }
    
    // const initAnchorScroll = (lenis) => {
    //     document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {
    //         anchor.addEventListener('click', (e) => {
    //             e.preventDefault()

    //             let id = anchor.getAttribute('href')?.slice(1)
    //             if (!id) return

    //             console.log(id)

    //             lenis.scrollTo(id)

    //             // const target = document.getElementById(id)
    //             // if (target) {
                    
    //             //     lenis.value.scrollTo(target.value, { 
    //             //         offset: -100, 
    //             //         duration: 3,
    //             //     })
    //             // }
                
    //         })
    //     })
    // }

    return {
        initLenis,
        destroyLenis
    }
}