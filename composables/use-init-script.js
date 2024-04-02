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
        initLenis()
        initScrollDown()
        initEllipse()
        initSplitType()
        initSectionScrollRevealAnimate()
        initLocalTime()  
        initImgLoaded()
        // Play Page loader out when everything ready if first load
        initPageLoader()
    }

    const destroy = () => {
        destroyLenis()
        destroyScrollDown()
        destroyEllipse()
        destroySplitType()
        destroySectionScrollRevealAnimate()
        destroyLocalTime()
        destroyPageLoader()
        destroyImgLoaded()
    }

    return { 
        init,
        destroy 
    }
}