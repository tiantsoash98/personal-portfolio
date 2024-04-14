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
const runtimeConfig = useRuntimeConfig()


definePageMeta({
    pageTransition: transitionConfig,
})

useHead({
    meta: [
        { name: 'robots', content: 'index, follow' },
    ],
    script: [{
        type: 'application/ld+json',
        innerHTML: {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tiantsoa Rabemananjara",
            "url": runtimeConfig.public.baseUrl,
            "jobTitle": "Freelance Web designer & Creative Developer",
            "email": "tiantsoa.sh@gmail.com",
            "sameAs": [
                "https://www.linkedin.com/in/tiantsoa-rabemananjara-254655152/",
                "https://www.instagram.com/tiantsoa_sh"
            ]
        }
    }],
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