<template>
    <article :class="['featured-works-item', {'featured-works-item--inverted': isInverted}]">
        <div class="container">
            <div class="row">
                <div :class="contentWrapperFullClass">
                    <div class="featured-works-item__main-infos">
                        <div class="featured-works-item__title">{{ title }}</div>
                        <div class="featured-works-item__title title-h4 mt-2">{{ description }}</div>
                    </div>
                    <div class="featured-works-item__second-infos mt-8 mt-md-10">
                        <div class="featured-works-item__list-wrapper">
                            <ul class="featured-works-item__roles">
                                <li v-for="role in roles" :key="role">{{ role }}</li>
                            </ul>
                        </div>
                        <div class="featured-works-item__list-wrapper ml-16">
                            <span class="featured-works-item__year">{{ year }}</span>
                        </div>
                    </div>
                    <NuxtLink :to="path" :target="target" class="mt-8 mt-md-12">
                        <ButtonMain 
                            :text="'See case'" 
                            type="secondary"
                            :hasIcon="true" 
                        />
                    </NuxtLink>
                </div>
                <figure :class="imgWrapperFullClass">
                    <NuxtLink :to="path" :target="target" class="overlay">
                        <NuxtImg 
                            :src="imgSrc" 
                            class="img featured-works-item__img"
                            sizes="sm:90vw md:50vw lg:50vw 90vw"
                        />
                        <div class="featured-works-item__img-filter overlay"></div>
                        <div class="featured-works-item__overlay overlay">
                            <div class="featured-works-item__title featured-works-item__overlay-item featured-works-item__overlay-item--title title-h1">{{ title }}</div>
                            <IconArrowNarrowRight class="featured-works-item__overlay-item featured-works-item__overlay-item--arrow featured-works-item__arrow"/>
                        </div>
                    </NuxtLink>
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
    year: Number,
    imgSrc: String,
    path: String,
    isInverted: Boolean
})

const contentWrapperFullClass = computed(() => {
    if(props.isInverted) return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-md-8 pt-4 pb-0 pt-md-40 pb-md-40 order-2"
    return "featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-1 pt-4 pb-0 pt-md-40 pb-md-40 order-2 order-md-1"
})

const imgWrapperFullClass = computed(() => {
    if(props.isInverted) return "featured-works-item__img-wrapper img-wrapper img-wrapper--radius col-full col-md-6 order-1"
    return "featured-works-item__img-wrapper img-wrapper img-wrapper--radius col-full col-md-6 col-start-md-7 order-1 order-md-2"
})

const target = computed(() => {
    return props.path.startsWith('/') ? '_self' : '_blank'
})
</script>

<style lang="scss" scoped>
.featured-works-item {
    $root:&;

    &__content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
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
        min-height: 50vh;
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
        pointer-events: none;
        background-color: rgba(var(--color-neutral-950-rgb), 0.2);
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity var(--default-animation-duration) var(--alias-default-ease);
    }
    &__overlay {
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