export default () => {
    // Local Time
    const { initLocalTime, destroyLocalTime } = useLocalTime()

    const init = () => {
        initLocalTime()
    }

    const destroy = () => {
        destroyLocalTime()
    }

    return { 
        init,
        destroy 
    }
}