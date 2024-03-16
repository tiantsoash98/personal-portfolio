<template>
    <main class="page">
        <HomeHero/>
        <HomeAbout/>
        <FeaturedWorksMain/>
        <HomeWorkProcess/>
        <TestimonialsMain/>
    </main>
</template>

<script setup>
const { init, destroy } = useInitScript()

onMounted(() => {
    init()
})

onUnmounted(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>