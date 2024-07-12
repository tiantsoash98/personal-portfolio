<template>
    <div class="services__item col-full col-md-4 col-start-md-7 mt-4 mt-md-0 section-reveal__block">
        <h4 class="services__item-title title-h5">{{ title }}</h4>
        <p class="services__item-description mt-4 title-h6">{{ description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
})
</script>

<style lang="scss" scoped>

</style>