export default () => {
    const scrollDownState = useScrollDownState()
    const scrollPositionState = useScrollPositionState()

    const initScrollDown = () => {
        window.addEventListener("scroll", onScroll)
    }

    const destroyScrollDown = () => {
        window.addEventListener("scroll", onScroll)
    }

    function onScroll() {
        scrollDownState.value = (scrollPositionState.value < window.scrollY)
        scrollPositionState.value = window.scrollY
    }

    return {
        initScrollDown,
        destroyScrollDown
    }
}