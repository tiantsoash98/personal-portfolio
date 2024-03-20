<template>
    <div class="menu-link mb-8" role="listitem">
        <NuxtLink :to="to" class="menu-link__container">
            <div class="menu-link__wrapper pb-4 pb-md-6">
                <div class="menu-link__title title-h2">{{ title }}</div>
                <div class="menu-link__subtitle">{{ subtitle }}</div>
            </div>
            <div class="border-item"></div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    to: String,
    title: String,
    subtitle: String,
})

</script>

<style lang="scss" scoped>
.menu-link{
    &__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
    &__subtitle {
        opacity: 0.4;
    }
}
</style>