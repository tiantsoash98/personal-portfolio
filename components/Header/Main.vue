<template>
    <header class="header pt-8">
        <div class="container">
            <div class="row">
                <div class="header__logo col-3 col-md-3 col-lg-3">
                    <NuxtLink to="/">Tiantsoa Rabemananjara</NuxtLink>
                </div>
                <div class="header__availability col-3 col-md-3">
                    <div class="header__hide-on-scroll">
                        Available for freelance work
                    </div>
                </div>
                <div class="header__links-wrapper col-full col-md-5 col-lg-4 col-start-0 col-start-md-8 col-start-lg-9">
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/about">About</NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/works">Works</NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/playground">Playground</NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </div>
                </div>
                <div class="header__menu-wrapper">
                    <button class="header__menu">Menu</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const headerHasAnimatedIn = ref(false)
const headerHasAnimatedOut = ref(false)
const headerStartAnimateScrollPosition = useHeaderStartAnimateScrollPosition()
const scrollPosition = useScrollPositionState()
const { gsap } = useGsap()

watch(scrollPosition, (newScrollPosition) => {

    // Check if new scroll position above position where it should start animating (200px)
    if(newScrollPosition > headerStartAnimateScrollPosition.value){
        // Check if header has already been animated in to prevent animation to trigger on each scroll
        // Animate if not
        if(!headerHasAnimatedIn.value){
            animateHeaderScrollIn()
            // Reset animated out if scroll from top
            headerHasAnimatedOut.value = false
            headerHasAnimatedIn.value = true
        }
    }
    // Check if new scroll position below position where it should start animating (200px)
    else {
        // Animate on scroll back
        // Animate only when header has been animated in
        // Prevent animation to trigger on each scroll
        // Animate if not
        if(headerHasAnimatedIn.value && !headerHasAnimatedOut.value){
            animateHeaderScrollOut()
            // Reset animated in if scroll up
            headerHasAnimatedIn.value = false
            headerHasAnimatedOut.value = true
        }
    }
})

// Animate below scroll start animate position
const animateHeaderScrollIn = () => {
    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: () => {
                resolve()
            },
            defaults: {
                duration: 0.5,
                ease: "power2.inOut"
            },
        })
        .to('.header__hide-on-scroll', { 
            opacity: 0, 
            yPercent: -50, 
            stagger: {
                each: 0.08,
                from: "end",
            } 
        })
        .fromTo('.header__menu', { 
            opacity: 0, 
            yPercent: 50 
        }, { 
            opacity: 1, 
            yPercent: 0 
        }, '<+0.3s')  
        
    })
}

// Animate above scroll start animate position
const animateHeaderScrollOut = () => {
    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: () => {
                resolve()
            },
            defaults: {
                duration: 0.5,
                ease: "power2.inOut"
            },
        })
        .to('.header__hide-on-scroll', { 
            opacity: 1,  
            yPercent: 0, 
            stagger: {
                each: 0.08,
                from: "start",
            } 
        })
        .to('.header__menu', { 
            opacity: 0,
            yPercent: 50
        }, '<-0.1s')
    })
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    left: 0;
    right: 0;

    &__links-wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__link-wrapper {
        overflow: hidden;
    }
    &__menu-wrapper {
        position: absolute;
        right: 0;
    }
    &__menu {
        opacity: 0;
    }
}
</style>