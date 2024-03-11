<template>
  <lenis
    :options="lenisOptions"
  >
      <NuxtLayout>
          <NuxtPage/>
      </NuxtLayout>
  </lenis>
</template>

<script setup>
const lenisOptions = useLenis()  
</script>

<style>
</style>