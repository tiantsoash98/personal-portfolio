export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()
    // Ellipses
    const { initEllipse, destroyEllipse } = useEllipse()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()
    // Page transition
    const { initPageTransition, destroyPageTransition } = usePageTransition()

    const init = () => {
        initScrollDown()
        initEllipse()
        initSplitType()
        initLocalTime()

        // Play Page loader out when everything ready if once
        initPageLoader()
        // Or play page transition
        initPageTransition()
    }

    const destroy = () => {
        destroyScrollDown()
        destroyEllipse()
        destroySplitType()
        destroyLocalTime()
        destroyPageLoader()
        destroyPageTransition()
    }

    return { 
        init,
        destroy 
    }
}