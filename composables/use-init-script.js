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

    const init = () => {
        console.log('Init start')
        initScrollDown()
        initEllipse()
        initSplitType()
        initLocalTime()
        
        // Play Page loader out when everything ready if once
        initPageLoader()
        console.log('Init finished')
    }

    const destroy = () => {
        destroyScrollDown()
        destroyEllipse()
        destroySplitType()
        destroyLocalTime()
        destroyPageLoader()
    }

    return { 
        init,
        destroy 
    }
}