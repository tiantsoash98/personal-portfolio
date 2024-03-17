<template>
    <main class="page">
        <section class="section works">
            <div class="works__ellipse-wrapper">
                <div class="ellipse-decor"></div>
            </div>
            <PageHeadline
                headline="Works"
                subheadline="A selected set of personal, collaborative and client projects."
            />
            <FeaturedWorksList/>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.works {
    &__ellipse-wrapper {
        position: absolute;
        top: -20%;
        right: 60%;
        z-index: -1;
        width: 75vw;
        height: 115vh;
    }
}
</style>