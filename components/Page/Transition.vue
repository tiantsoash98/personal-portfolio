<template>
    <div class="page-transition">
        <div class="page-transition__frame overlay"></div>
        <div class="page-transition__wrapper"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
const showPageTransition = usePageTransitionState()

watch(showPageTransition, (newVal) => {
    if(newVal == true){
        animateTransitionIn()
            .play(0)
            .then(() => {
                showPageTransition.value = false
            })
    }
})

const animateTransitionIn = () => {
    const tl = gsap.timeline({
        paused: true,
    })  
    tl.add(timelineFrameIn())
    
    return tl
}

function timelineFrameIn (el){
    const tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut",
        }
    })  
    
    tl
        .set('.page-transition', { 
            display: 'block',
        })

    tl
        .to('.page-transition__frame', { 
            opacity: 1,
        }, '<')

    return tl
}
</script>

<style lang="scss" scoped>
.page-transition {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    z-index: var(--z-index-transition);

    &__frame {
        opacity: 0;
        height: 100dvh;
        width: 100%;
        background-color: var(--color-neutral-950);
    }
    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__line-wrapper {
        overflow: hidden;
        text-align: center;
    }
}
</style>