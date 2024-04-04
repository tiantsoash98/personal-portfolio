<template>
    <main class="page" data-transition-text="Work">
      <ContentDoc>
        <template #not-found>
            <ContentNotFound/>
        </template>
      </ContentDoc>
      <FeaturedWorksMain/>
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

</style>