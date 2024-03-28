<template>
    <div class="page-transition">
        <div class="page-transition__frame overlay"></div>
        <div class="page-transition__wrapper">
            <div class="page-transition__line-wrapper">
                <div class="page-transition__text title-h1">{{ pageTransitionText }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const pageTransitionText = usePageTransitionText()
</script>

<style lang="scss" scoped>
.page-transition {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    z-index: var(--z-index-loader);

    &__frame {
        opacity: 0;
        height: 100dvh;
        width: 100%;
        background-color: var(--color-neutral-950);
    }
    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__line-wrapper {
        overflow: hidden;
    }
}
</style>