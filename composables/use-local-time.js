export default ( )=> {
    const data = ref("00:00:00 AM GMT+3")

    const optionsTime = {
        timeZone: 'Europe/Moscow',
        timeZoneName: 'short',
        hour: '2-digit',
        hour12: 'true',
        minute: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat([], optionsTime);
    updateTime();
    setInterval(updateTime, 1000);

    function updateTime() {
        data.value = formatter.format(new Date());
    }

    return {
        data
    }
}