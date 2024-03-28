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
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-active {
  transition: all 1s;
}
.page-leave-to {
  opacity: 0;
}
.page-enter-from {
  opacity: 0;
}

</style>