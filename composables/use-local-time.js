export default () => {
    const optionsTime = {
        timeZone: 'Europe/Moscow',
        timeZoneName: 'short',
        hour: '2-digit',
        hour12: 'true',
        minute: 'numeric',
    }

    const localTimeState = useLocalTimeState()
    var interval = null
    const formatter = new Intl.DateTimeFormat([], optionsTime)
    
    function updateTime() {
        localTimeState.value = formatter.format(new Date())
    }

    const initLocalTime = () => {
        updateTime()
        interval = setInterval(updateTime, 1000)
    }

    const destroyLocalTime = () => {
        if(interval)
            clearInterval(interval)
    }

    return {
        initLocalTime,
        destroyLocalTime
    }
}