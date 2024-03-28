<template>
    <div class="work-process-item col-full col-sm-6 col-lg-4" role="listitem" >
        <div class="work-process-item__index callout-text">{{ index }}</div>
        <div class="border-item mt-4"></div>
        <h4 class="work-process-item__title title-h5 mt-6">{{ title }}</h4>
        <p class="work-process-item__description mt-4"><ContentSlot unwrap="p"/></p>
    </div>
</template>

<script setup>
const props = defineProps({
    index: String,
    title: String,
})
</script>

<style lang="scss" scoped>
.work-process-item {
    display: flex;
    flex-direction: column;

    &__index {
        color: var(--color-neutral-800);
    }
    &__description {
        color: var(--color-neutral-200);
    }
}
</style>