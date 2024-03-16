<template>
    <div class="work-img mt-40">
        <div class="container">
            <div class="row">
                <div class="work-img__wrapper col-full col-md-10 col-start-md-2">
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
    </div>
</template>

<script setup>
const props = defineProps({
    img: String,
})
</script>

<style lang="scss" scoped>
.work-img{
    &__wrapper {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
    }
}
</style>