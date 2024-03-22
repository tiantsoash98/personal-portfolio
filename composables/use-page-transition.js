export default () => {
    const { 
        initPageTransitionAnimate,
        destroyPageTransitionAnimate,
        playPageTransitionInAnimation,
        playPageTransitionOutAnimation,
    } = usePageTransitionAnimate()
    const pageTransitionState = usePageTransitionState()

    // Init page loader behavior
    const initPageTransition = () => {
        // Init page transition animate on mounted
        initPageTransitionAnimate()

        // watch(pageTransitionState, (newVal) => {
        //     if(newVal == true){
        //         playPageTransitionInAnimation()
        //     }
        //     else {
        //         playPageTransitionOutAnimation()
        //     }
        // })

        pageTransitionState.value = false
    }

    const destroyPageTransition = () => {
        destroyPageTransitionAnimate()
    }


    return {
        initPageTransition,
        destroyPageTransition
    }
}