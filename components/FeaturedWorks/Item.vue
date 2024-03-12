<template>
    <article :class="['featured-works-item', {'featured-works-item--inverted': isInverted}]">
        <div class="container">
            <div class="row">
                <div :class="contentWrapperFullClass">
                    <!-- <div class="featured-works-item__index footnote-text">{{ index }}</div> -->
                    <div class="featured-works-item__main-infos">
                        <div class="featured-works-item__title">{{ title }}</div>
                        <div class="featured-works-item__title title-h4 mt-2">{{ description }}</div>
                    </div>
                    <div class="featured-works-item__second-infos">
                        <div class="featured-works-item__list-wrapper">
                            <ul class="featured-works-item__roles">
                                <li v-for="role in roles" :key="role">{{ role }}</li>
                            </ul>
                        </div>
                        <div class="featured-works-item__list-wrapper ml-16">
                            <span class="featured-works-item__year">{{ year }}</span>
                        </div>
                    </div>
                    <ButtonSecondary text="See case" :hasIcon="true"/>
                </div>
                <figure :class="imgWrapperFullClass">
                    <NuxtImg :src="imgSrc" class="img featured-works-item__img"/>
                    <div class="featured-works-item__img-filter"></div>
                    <div class="featured-works-item__overlay">
                        <div class="featured-works-item__title featured-works-item__overlay-item featured-works-item__overlay-item--title title-h1">{{ title }}</div>
                        <IconArrowNarrowRight class="featured-works-item__overlay-item featured-works-item__overlay-item--arrow featured-works-item__arrow"/>
                    </div>
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
    if(props.isInverted) return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-9 pt-40 pb-40"
    else return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-1 pt-40 pb-40"
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
        gap: var(--spacing-12);
    }
    &__second-infos {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    &__list-wrapper {
        display: flex;
        flex-direction: column;
        opacity: 0.8;
    }
    &__label {
        text-transform: uppercase;
        opacity: 0.4;
    }
    &__img-wrapper {
        border-radius: 0.5rem;
        overflow: hidden;

        &:hover {
            #{$root}__img {
                transform: scale(1);
            }
            #{$root}__img-filter {
                opacity: 1;
            }
            #{$root}__overlay-item {
                opacity: 1;

                &--arrow {
                    transform: translateX(0%);
                }
            }
        }
    }
    &__img {
        transform: scale(1.02);
        transition: transform var(--default-animation-duration) var(--alias-default-ease);
    }
    &__img-filter {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-color: rgba(var(--color-neutral-950-rgb), 0.2);
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity var(--default-animation-duration) var(--alias-default-ease);
    }
    &__overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        color: var(--color-neutral-0);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-20);
    }
    &__overlay-item {
        opacity: 0;
        transition: transform var(--default-animation-duration) var(--alias-default-ease),
                    opacity var(--default-animation-duration) var(--alias-default-ease); 

        &--arrow {
            transform: translateX(-50%);
        }
    }
    &__arrow {
        width: 6rem;
        transition: transform var(--default-animation-duration) var(--alias-default-ease),
                    opacity var(--default-animation-duration) var(--alias-default-ease); 
    }
}
</style>