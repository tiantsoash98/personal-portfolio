<template>
    <div class="featured-works-marquee title-h2">
        <div class="featured-works-marquee__wrapper marquee">
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
            <span class="featured-works-marquee__word">Featured works</span>
            <span class="featured-works-marquee__separator">—</span>
        </div>
        <div class="featured-works-marquee__wrapper marquee ml-4">
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
    }
}
</style>