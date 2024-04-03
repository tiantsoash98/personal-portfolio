export default () => {
    // Local Time
    const { initLenis, destroyLenis } = useLenis()
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()
    // Ellipses
    const { initEllipse, destroyEllipse } = useEllipse()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Scroll reveal animate
    const { initSectionScrollRevealAnimate, destroySectionScrollRevealAnimate } = useSectionScrollRevealAnimate()
    // Img loaded
    const { initImgLoaded, destroyImgLoaded } = useImgLoaded()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()


    const init = () => {
        initScrollDown()
        initEllipse()
        initSplitType()
        initSectionScrollRevealAnimate()
        initLocalTime()  
        initImgLoaded()
        // Play Page loader out when everything ready if first load
        initPageLoader()
        initLenis()
    }

    const destroy = () => {
        destroyScrollDown()
        destroyEllipse()
        destroySplitType()
        destroySectionScrollRevealAnimate()
        destroyLocalTime()
        destroyPageLoader()
        destroyImgLoaded()
        destroyLenis()
    }

    return { 
        init,
        destroy 
    }
}