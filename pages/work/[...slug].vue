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