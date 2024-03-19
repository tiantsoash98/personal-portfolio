export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()
    // Ellipses
    const { initEllipse, destroyEllipse } = useEllipse()

    const init = () => {
        initLocalTime()
        initScrollDown()
        initEllipse()
    }

    const destroy = () => {
        destroyLocalTime()
        destroyScrollDown()
        destroyEllipse()
    }

    return { 
        init,
        destroy 
    }
}