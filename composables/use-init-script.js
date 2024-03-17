export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()

    const init = () => {
        initLocalTime()
        initScrollDown()
    }

    const destroy = () => {
        destroyLocalTime()
        destroyScrollDown()
    }

    return { 
        init,
        destroy 
    }
}