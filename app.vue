<template>
  <lenis
    :options="lenisConfig"
  >
      <NuxtLayout>
          <NuxtPage/>
      </NuxtLayout>
  </lenis>
</template>

<script setup>
import lenisConfig from '../helpers/lenis-config'
</script>

<style lang="scss">

</style>