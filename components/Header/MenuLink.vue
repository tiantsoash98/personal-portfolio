<template>
    <div class="menu-link mb-8" role="listitem">
        <NuxtLink :to="to" class="menu-link__container">
            <div class="menu-link__wrapper pb-4 pb-md-6">
                <div class="menu-link__title menu-link__text-transition title-h2">{{ title }}</div>
                <div class="menu-link__subtitle menu-link__text-transition">{{ subtitle }}</div>
            </div>
            <div class="menu-link__border-box">
                <div class="border-item menu-link__border menu-link__border--main"></div>
                <div class="border-item menu-link__border menu-link__border--second"></div>
            </div>
            
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    to: String,
    title: String,
    subtitle: String,
})

</script>

<style lang="scss" scoped>
.menu-link{
    $root:&;

    &:hover {
        #{$root}__title{
            opacity: 1;
        }
        #{$root}__subtitle{
            opacity: 1;
        }
        #{$root}__border--second{
            transform: scaleX(1);
        }
    }
    &__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
    &__subtitle {
        opacity: 0.4;
    }
    &__text-transition {
        transition: opacity 0.4s ease-out;
    }
    &__border-box {
        transform-origin: left;
    }
    &__border {
        transition: transform var(--default-animation-duration) var(--alias-default-ease);
        transform-origin: left;

        &--second {
            transform: scaleX(0);
            background-color: var(--color-neutral-150);
        }
    }
}
</style>