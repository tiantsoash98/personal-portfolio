export default () => {
    var ellipses = null
    var wrapper = null
    const fieldY = ref(0)
    const fieldMobileY = ref(0)
    const positionX = ref(0)
    const positionMobileX = ref(0)
    const positionY = ref(0)
    const positionMobileY = ref(0)
    const scale = ref(1)
    const zIndex = ref(-10)

    const initEllipse = () => {
        const { gsap } = useGsap()
        ellipses = document.querySelectorAll('.ellipse__field')

        let breakPoint = 991
        let mm = gsap.matchMedia()

        mm.add(
        {
            isDesktop: `(min-width: ${breakPoint + 1}px)`,
            isMobile: `(max-width: ${breakPoint}px)`,
        },
        (context) => {
            let { isDesktop, isMobile } = context.conditions;

            ellipses.forEach((ellipse) => {
                initValues(ellipse)
                ellipse.style.zIndex = zIndex.value
                ellipse.style.top = isDesktop ? fieldY.value + '%' : fieldMobileY.value + '%'
                ellipse.style.zIndex = zIndex.value

                wrapper = ellipse.querySelector('.ellipse__wrapper')
                wrapper.style.top = isDesktop ? positionY.value + '%' : positionMobileY.value + '%'
                wrapper.style.left = isDesktop ? positionX.value + '%' : positionMobileX.value + '%'
                wrapper.style.transform = 'scale(' + scale.value + ')'  
            })

            return () => {
                
            }
        })

        // https://gsap.com/docs/v3/GSAP/gsap.matchMediaRefresh()
        // force all matchMedia() stuff to revert and re-run
        window.addEventListener("resize", gsap.matchMediaRefresh)
    }

    // Get values from attribute
    const initValues = (ellipse) => {
        fieldY.value = ellipse.dataset.fieldY || 0
        positionX.value = ellipse.dataset.positionX || 0
        positionY.value = ellipse.dataset.positionY || 0
        fieldMobileY.value = ellipse.dataset.fieldMobileY || fieldY.value
        positionMobileX.value = ellipse.dataset.positionMobileX || positionX.value
        positionMobileY.value = ellipse.dataset.positionMobileY || positionY.value
        scale.value = ellipse.dataset.scale || 1
        zIndex.value = ellipse.dataset.zIndex || -10
    }

    const destroyEllipse = () => {
        const { gsap } = useGsap()
        ellipses = null
        window.removeEventListener("resize", gsap.matchMediaRefresh)
    }

    return { 
        initEllipse,
        destroyEllipse
    }
}