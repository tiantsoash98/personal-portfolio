<template>
    <main>
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