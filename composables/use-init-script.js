export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()
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