<template>
    <div class="featured-works-marquee title-h2">
        <div :class="['featured-works-marquee__wrapper', { 'featured-works-marquee__wrapper--reverse': !scrollDown }]">
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
        </div>
        <div :class="['featured-works-marquee__wrapper ml-4', { 'featured-works-marquee__wrapper--reverse': !scrollDown }]">
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
        </div>
    </div>
</template>

<script setup>
const scrollDown = useScrollDownState()
</script>

<style lang="scss" scoped>
.featured-works-marquee {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        gap: var(--spacing-4);
        animation: marquee-loop 20s linear infinite;

        &--reverse {
            animation: marquee-loop-reverse 20s linear infinite;
        }
    }
}
</style>