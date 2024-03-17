<template>
    <div class="button button--large button-primary">
        <div class="button-primary__frame"></div>
        <div class="button-primary__content-wrapper">
            <div class="button-primary__item-wrapper">
                <div class="button-primary__text button-primary__text--main">{{ text }}</div>
                <div class="button-primary__text button-primary__text--hover">{{ text }}</div>
            </div>
            <div class="button-primary__item-wrapper">
                <IconArrowDown class="button-primary__icon button-primary__icon--main"/>
                <IconArrowDown class="button-primary__icon button-primary__icon--hover"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
})
</script>

<style lang="scss" scoped>
.button-primary {
    $root:&;
    color: var(--color-neutral-950);

    &:hover {
        #{$root}__frame  {
            transform: scale(1.05);
        }
        #{$root}__text  {
            transform: translateY(-100%);
        }
        #{$root}__icon  {
            transform: translateY(150%);
        }
    }
    &__content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-4);
    }
    &__item-wrapper {
        overflow: hidden;
        display: flex;
    }
    &__text {
        transition: transform var(--default-animation-duration) var(--alias-default-ease); 

        &--hover {
            position: absolute;
            top: 100%;
        }
    }
    &__icon {
        width: 0.9rem;
        transition: transform var(--default-animation-duration) var(--alias-default-ease); 

        &--hover {
            position: absolute;
            bottom: 150%;
        }
    }
}
</style>