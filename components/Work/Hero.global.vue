<template>
    <div class="work-hero">
        <div class="work-hero__img-wrapper">
            <nuxt-img
                :src="img.src"
                class="work-hero__img img img-load" 
                sizes="sm:100vw md:100vw lg:100vw 100vw"
                :alt="`${project} main image`"
                :width="img.width"
                :height="img.height"
                loading="lazy"
            />
            <div class="work-hero__img-filter"></div>
        </div>
        
        <div class="ellipse__field animate__ellipse-in" data-field-y="40" data-position-x="-50" data-position-y="0" data-scale="1" data-z-index="0">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
        <div class="work-hero__overlay container pb-4 pb-md-30 pt-4 pt-md-0">
            <div class="row">
                 <div class="work-hero__content-wrapper col-full col-sm-4 col-md-6 col-lg-4">
                    <h1 class="text-visually-hidden">{{ project }}</h1>
                    <div class="work-hero__title title-h1">{{ project }}</div>
                    <p class="text-visually-hidden"><ContentSlot unwrap="p"/></p>
                    <div class="work-hero__description title-h5 mt-4 split-type animate__title-in"><ContentSlot unwrap="p"/></div>
                 </div>
            </div>
        </div>      
    </div>
</template>

<script setup>
const props = defineProps({
    img: Object,
    project: String,
})
</script>

<style lang="scss" scoped>
.work-hero {
    height: 105lvh;

    &__img-wrapper {
        height: 100%;
        z-index: -1;
    }
    &__img-filter {
        pointer-events: none;
        position: absolute;
        inset: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(var(--color-neutral-950-rgb), 1), rgba(var(--color-neutral-950-rgb), 0) 30%)
    }
    &__overlay {
        position: absolute;
        inset: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
}
@media screen and (max-width: 991px) {
    .work-hero {
        height: auto;

        &__img-filter {
            background: linear-gradient(to top, rgba(var(--color-neutral-950-rgb), 1) 5%, rgba(var(--color-neutral-950-rgb), 0) 30%)
        }
        &__overlay {
            position: relative;
        }
    }
}
</style>