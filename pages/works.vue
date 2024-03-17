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
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 80vw;
        height: 115vh;
    }
}
</style>