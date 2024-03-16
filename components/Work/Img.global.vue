<template>
    <section class="work-img mb-40">
        <div class="container">
            <div class="row">
                <div class="work-img__wrapper img-wrapper img-wrapper--radius col-full col-md-10 col-start-md-2">
                    <nuxt-img
                        :src="img"
                        class="work-hero__img img img-load" 
                        sizes="sm:100vw md:80vw lg:80vw 100vw"
                        role="presentation"
                        loading="lazy"
                    />
                </div>
            </div>
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