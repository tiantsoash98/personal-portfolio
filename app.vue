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
useSeoMeta({
  ogTitle: 'Tiantsoa Rabemananjara | Freelance designer & Creative Developer',
  ogDescription: 'Web Designer & Creative developer helping passionate people grow their business',
  ogImage: `${ currentUrl() }app-cover.jpg`,
  ogUrl: currentUrl(),
  twitterTitle: 'Tiantsoa Rabemananjara | Freelance designer & Creative Developer',
  twitterDescription: 'Web Designer & Creative developer helping passionate people grow their business',
  twitterImage: `${ currentUrl() }app-cover.jpg`,
  twitterCard: 'summary'
})
</script>

<style lang="scss">

</style>