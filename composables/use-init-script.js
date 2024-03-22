export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()
    // Ellipses
    const { initEllipse, destroyEllipse } = useEllipse()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()

    const init = () => {
        initScrollDown()
        initEllipse()
        initSplitType()
        initLocalTime()
    }

    const destroy = () => {
        destroyScrollDown()
        destroyEllipse()
        destroySplitType()
        destroyLocalTime()
    }

    return { 
        init,
        destroy 
    }
}