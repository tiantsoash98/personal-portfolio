<template>
    <header class="header pt-4 pt-md-8">
        <div class="header__content-wrapper container">
            <div class="row">
                <div class="header__logo col-4 col-md-3 col-lg-3">
                    <NuxtLink to="/">Tiantsoa Rabemananjara</NuxtLink>
                </div>
                <HeaderNavWeb class="col-md-9 hide-on-below-md"/>
                <HeaderNavMobile class="col-2 hide-on-above-md"/>
                <HeaderMenu/>
            </div>
        </div>
        
    </header>
</template>

<script setup>
    const { 
        initHeaderAnimateScroll, 
        destroyHeaderAnimateScroll 
    } = useHeaderAnimateScroll()

    onMounted(() => {
        initHeaderAnimateScroll()
    })

    onUnmounted(() => {
        destroyHeaderAnimateScroll()
    })
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    left: 0;
    right: 0;

    &__content-wrapper {
        mix-blend-mode: difference;
    }
    &__logo{
        z-index: var(--z-index-nav);
    }
}
</style>