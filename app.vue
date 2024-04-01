<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const { initLenis, destroyLenis } = useLenis()

onMounted(() => {
  initLenis()
})

onBeforeUnmount(() => {
  destroyLenis()
})
</script>

<style lang="scss">

</style>