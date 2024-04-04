<template>
    <main class="page error-page">
        <ContentNotFound class=" mt-0 mb-0"/>
        <div class="ellipse__field" data-field-y="0" data-position-y="0" data-position-mobile-y="10" data-position-mobile-x="-40" data-scale="1">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
    </main>
</template>

<script setup>
defineProps(['error'])
const { init, destroy } = useInitScript()


onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>
.error-page {
    display: flex;
    align-items: center;
    height: 100lvh;
}
</style>