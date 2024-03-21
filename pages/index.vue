<template>
    <main class="page" id="top">
        <HomeHero/>
        <HomeAbout/>
        <FeaturedWorksMain/>
        <WorkProcessMain/>
        <ServicesMain/>
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