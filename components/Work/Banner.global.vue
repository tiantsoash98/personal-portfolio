<template>
    <section class="work-banner mb-16 mb-md-30">
        <div class="work-banner__wrapper img-wrapper">
            <nuxt-img
                :src="img"
                class="work-hero__img img img-load" 
                sizes="sm:100vw md:100vw lg:100vw 100vw"
                role="presentation"
                loading="lazy"
            />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    img: String,
})
</script>

<style lang="scss" scoped>
</style>