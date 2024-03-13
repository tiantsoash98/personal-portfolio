export default defineNuxtRouteMiddleware((to, from) => {
    const transition = usePageTransition()

    if(to.fullPath != from.fullPath){
        transition.value = true
    } 
})
  