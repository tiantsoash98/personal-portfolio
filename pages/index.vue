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
import transitionConfig from '../helpers/transition-config'
const { init, destroy } = useInitScript()

definePageMeta({
    pageTransition: transitionConfig,
})

onMounted(() => {
    init()
})

onUnmounted(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>