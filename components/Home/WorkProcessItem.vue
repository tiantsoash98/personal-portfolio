<template>
    <div class="work-process-item">
        <div class="work-process-item__index callout-text">{{ index }}</div>
        <div class="border-item"></div>
        <h4 class="work-process-item__title title-h5">{{ title }}</h4>
        <p class="work-process-item__description">{{ description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    index: String,
    title: String,
    description: String,
})
</script>

<style lang="scss" scoped>
.work-process-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);

    &__index {
        color: var(--color-neutral-800);
    }
}
</style>