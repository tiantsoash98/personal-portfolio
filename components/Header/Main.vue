<template>
    <header class="header pt-8 blend-difference">
        <div class="container">
            <div class="row">
                <div class="header__logo col-4 col-md-3 col-lg-3">
                    <NuxtLink to="/">Tiantsoa Rabemananjara</NuxtLink>
                </div>
                <HomeNavWeb class="col-md-9 hide-on-below-md"/>
                <HomeNavMobile class="col-2 hide-on-above-md"/>
            </div>
        </div>
    </header>
</template>

<script setup>
    onMounted(() => {
        useHeaderAnimateScroll()
    })
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    left: 0;
    right: 0;
    mix-blend-mode: difference;
}
</style>