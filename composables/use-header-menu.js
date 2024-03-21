export default () => {
    const menu = ref(null)
    const tooglers = ref(null)
    const { playOpenAnimation } = useHeaderMenuAnimate()

    // Init Header behavior 
    const initHeaderMenu = () => {
        menu.value = document.querySelector(".menu")
        tooglers.value = document.querySelectorAll(".menu-toogler")
        tooglers.value.forEach(toogler => {
            toogler.addEventListener("click", toogleMenu)
        })
    }

    const toogleMenu = (event) => {
        console.log(event)
    }

    return {
        initHeaderMenu,
    }
}