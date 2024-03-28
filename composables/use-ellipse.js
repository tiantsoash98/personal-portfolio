export default () => {
    const ellipses = ref(null)
    const wrapper = ref(null)
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
        ellipses.value = document.querySelectorAll('.ellipse__field')

        let breakPoint = 991
        let mm = gsap.matchMedia()

        mm.add(
        {
            isDesktop: `(min-width: ${breakPoint + 1}px)`,
            isMobile: `(max-width: ${breakPoint}px)`,
        },
        (context) => {
            let { isDesktop, isMobile } = context.conditions;

            ellipses.value = document.querySelectorAll('.ellipse__field')
            ellipses.value.forEach((ellipse) => {
                // Init values from attribute
                initValues(ellipse)
                ellipse.style.zIndex = zIndex.value
                ellipse.style.top = isDesktop ? fieldY.value + '%' : fieldMobileY.value + '%'
                ellipse.style.zIndex = zIndex.value

                wrapper.value = ellipse.querySelector('.ellipse__wrapper')
                wrapper.value.style.top = isDesktop ? positionY.value + '%' : positionMobileY.value + '%'
                wrapper.value.style.left = isDesktop ? positionX.value + '%' : positionMobileX.value + '%'
                wrapper.value.style.transform = 'scale(' + scale.value + ')'  
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
        ellipses.value = null
        wrapper.value = null
        window.removeEventListener("resize", gsap.matchMediaRefresh)
    }

    return { 
        initEllipse,
        destroyEllipse
    }
}