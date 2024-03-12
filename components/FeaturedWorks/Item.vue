<template>
    <article :class="['featured-works-item', {'featured-works-item--inverted': isInverted}]">
        <div class="container">
            <div class="row">
                <div :class="contentWrapperFullClass">
                    <div class="featured-works-item__index footnote-text"></div>
                    <div class="featured-works-item__main-infos">
                        <div class="featured-works-item__title">{{ title }}</div>
                        <div class="featured-works-item__title title-h4">{{ description }}</div>
                    </div>
                    <div class="featured-works-item__second-infos">
                        <div class="featured-works-item__list-wrapper">
                            <span class="featured-works-item__label footnote-text">Roles</span>
                            <ul class="featured-works-item__roles">
                                <li v-for="role in roles" :key="role">{{ role }}</li>
                            </ul>
                        </div>
                        <div class="featured-works-item__list-wrapper ml-12">
                            <span class="featured-works-item__label footnote-text">Year</span>
                            <span class="featured-works-item__year">{{ year }}</span>
                        </div>
                    </div>
                    <ButtonSecondary text="See case" :hasIcon="true"/>
                </div>
                <figure :class="imgWrapperFullClass">
                    <NuxtImg :src="imgSrc" class="img featured-works-item__img"/>
                </figure>
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    index: String,
    title: String,
    description: String,
    roles: Array,
    year: String,
    imgSrc: String,
    isInverted: Boolean
})

const contentWrapperFullClass = computed(() => {
    if(props.isInverted) return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-9 pt-30 pb-30"
    else return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-2 pt-30 pb-30"
})

const imgWrapperFullClass = computed(() => {
    if(props.isInverted) return "featured-works-item__img-wrapper col-full col-md-6"
    else return "featured-works-item__img-wrapper col-full col-md-6 col-start-md-7"
})
</script>

<style lang="scss" scoped>
.featured-works-item {
    $root:&;
    &--inverted {
        #{$root}__img-wrapper {
            order: 1;
        }
        #{$root}__content-wrapper {
            order: 2;
        }
    }
    &__content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: var(--spacing-14);
    }
    &__second-infos {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    &__list-wrapper {
        display: flex;
        flex-direction: column;
    }
    &__label {
        text-transform: uppercase;
        opacity: 0.4;
    }
    &__img-wrapper {
        border-radius: 1rem;
        overflow: hidden;
    }
}
</style>