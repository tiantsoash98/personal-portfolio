<template>
    <main class="page" data-transition-text="Works">
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
import transitionConfig from '../helpers/transition-config'
const { init, destroy } = useInitScript()

definePageMeta({
    pageTransition: transitionConfig,
})

onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>
.works {
    &__ellipse-wrapper {
        position: absolute;
        top: -20%;
        right: 60%;
        z-index: -1;
        width: 80vw;
        height: 115vh;
    }
}
</style>