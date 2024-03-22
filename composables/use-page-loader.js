export default () => {
    const { gsap } = useGsap()
    const { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut
    } = usePageLoaderAnimate()
    const pageLoaderState = usePageLoaderState()

    // Init page loader behavior
    const initPageLoader = () => {
        // Init page loader animate on mounted
        initPageLoaderAnimate()
        pageLoaderState.value = "loading"

        // Start page loader out animation
        playPageLoaderOut().then(() => {
            pageLoaderState.value = "loaded"
        })
    }

    const destroyPageLoader = () => {
        destroyPageLoaderAnimate()
    }


    return {
        initPageLoader,
        destroyPageLoader
    }
}