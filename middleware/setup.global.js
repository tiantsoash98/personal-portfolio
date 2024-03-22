export default defineNuxtRouteMiddleware((to, from) => {
    const pageTransitionState = usePageTransitionState()

    if(to.path != from.path){
        // Trigger page transition
        pageTransitionState.value = true
    } 
})
  