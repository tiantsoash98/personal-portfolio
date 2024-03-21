export default () => {
    const menu = ref(null)
    const tooglers = ref(null)
    const headerMenuState = useHeaderMenuState()
    const { initHeaderMenuAnimate, playOpenAnimation, playCloseAnimation } = useHeaderMenuAnimate()

    // Init Header behavior 
    const initHeaderMenu = () => {
        // Init header menu animate on mounted
        initHeaderMenuAnimate()

        menu.value = document.querySelector(".menu")
        tooglers.value = document.querySelectorAll(".menu-toogler")
        tooglers.value.forEach(toogler => {
            toogler.addEventListener("click", toogleMenu)
        })
    }

    const toogleMenu = (event) => {
        if(headerMenuState.value == "close"){
            headerMenuState.value = "animating-open"
            playOpenAnimation().then(() => {
                headerMenuState.value = "open"
                menu.value.setAttribute("aria-expanded", "true")
            })
        }
        else if(headerMenuState.value == "open"){
            headerMenuState.value = "animating-close"
            playCloseAnimation().then(() => {
                headerMenuState.value = "close"
                menu.value.setAttribute("aria-expanded", "false")
            })
        }
    }

    return {
        initHeaderMenu,
    }
}