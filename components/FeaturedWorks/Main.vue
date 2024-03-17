<template>
    <section class="section featured-works">
        <FeaturedWorksMarquee/>
        <FeaturedWorksList/>
        <div class="featured-works__ellipse-wrapper">
            <div class="ellipse-decor"></div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.featured-works {
    &__ellipse-wrapper {
        position: absolute;
        top: 30%;
        right: 50%;
        z-index: -1;
        width: 90vw;
        height: 90vh;
    }
}
</style>