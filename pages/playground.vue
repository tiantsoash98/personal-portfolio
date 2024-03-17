<template>
    <main class="page">
        <section class="section playground">
            <div class="playground__ellipse-wrapper">
                <div class="ellipse-decor"></div>
            </div>
            <PageHeadline
                headline="Playground"
                subheadline="Creative exploration for personal and client projects."
            />
            <div style="height: 100vh;"></div>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.playground {
    &__ellipse-wrapper {
        position: absolute;
        top: 0%;
        right: 0%;
        transform: translate(50%, 0%);
        z-index: -1;
        width: 60vw;
        height: 90vh;
    }
}
</style>