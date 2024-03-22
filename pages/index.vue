<template>
    
    <main class="page" id="top">
        <Title>Tiantsoa Rabemananjara | Freelance designer & Creative Developer</Title>
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