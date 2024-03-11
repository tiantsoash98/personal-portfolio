<template>
    <header class="header pt-10">
        <div class="container">
            <div class="row">
                <div class="header__logo col-3 col-md-3">
                    <NuxtLink to="/">Tiantsoa Rabemananjara</NuxtLink>
                </div>
                <div class="header__availability col-3 col-md-3">Available for freelance work</div>
                <div class="header__links-wrapper col-full col-md-5 col-lg-4 col-start-0 col-start-md-8 col-start-lg-9">
                    <div class="header__link-wrapper">
                        <NuxtLink to="/about">About</NuxtLink>
                    </div>
                    <div class="header__link-wrapper">
                        <NuxtLink to="/works">Works</NuxtLink>
                    </div>
                    <div class="header__link-wrapper">
                        <NuxtLink to="/playground">Playground</NuxtLink>
                    </div>
                    <div class="header__link-wrapper">
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    &__links-wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__link-wrapper {
        overflow: hidden;
    }
}
</style>