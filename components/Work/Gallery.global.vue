<template>
    <section class="work-gallery mb-40">
        <div class="container">
            <div class="row">
                <div class="work-gallery__img-wrapper img-wrapper img-wrapper--radius col-full col-md-6">
                    <nuxt-img
                        :src="imgLeft"
                        class="work-gallery__img img img-load" 
                        sizes="sm:100vw md:45vw lg:45vw 100vw"
                        role="presentation"
                        loading="lazy"
                    />
                </div>
                <div class="work-gallery__img-wrapper img-wrapper img-wrapper--radius  col-full col-md-6">
                    <nuxt-img
                        :src="imgRight"
                        class="work-gallery__img img img-load" 
                        sizes="sm:100vw md:45vw lg:45vw 100vw"
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
    imgLeft: String,
    imgRight: String,
})
</script>

<style lang="scss" scoped>
</style>