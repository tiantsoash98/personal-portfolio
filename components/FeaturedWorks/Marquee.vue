<template>
    <div class="featured-works-marquee title-h2">
        <div :class="['featured-works-marquee__wrapper', { 'featured-works-marquee__wrapper--reverse': !scrollDown }]">
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
        </div>
        <div :class="['featured-works-marquee__wrapper ml-4', { 'featured-works-marquee__wrapper--reverse': !scrollDown }]">
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
        </div>
    </div>
</template>

<script setup>
// https://gsap.com/community/forums/topic/27739-change-marquee-direction-on-scroll/
import gsap  from 'gsap'
const scrollDown = useScrollDownState()
const marqueeTween = ref(null)

watch(scrollDown, (newScrollDirection) => {
    if(marqueeTween.value){
        gsap.to(marqueeTween.value, {
            timeScale: newScrollDirection? 1 : -1 // -1 will reverse the animation
        })
    }
})

onMounted(() => {
    marqueeTween.value = gsap.to(".featured-works-marquee__wrapper", {
        xPercent: -100, 
        repeat: -1, 
        duration: 20, 
        ease: "linear"
    }).totalProgress(0.5)
})

</script>

<style lang="scss" scoped>
.featured-works-marquee {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        gap: var(--spacing-4);
    }
}
</style>