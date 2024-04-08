<template>
    <main class="page" id="top" data-transition-text="Welcome">
        <ContentDoc>
            <template #not-found>
                <h1>Oups...the content was not found</h1>
                <NuxtLink to="/">
                <ButtonMain 
                    :text="'Back home'" 
                    :hasIcon="true" 
                />
                </NuxtLink>
            </template>
        </ContentDoc>
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

useHead({
    meta: [
        { name: 'robots', content: 'index, follow' },
    ],
})

onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>