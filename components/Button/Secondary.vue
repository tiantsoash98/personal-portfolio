<template>
    <div class="button button--large button-secondary">
        <div class="button-secondary__frame"></div>
        <div class="button-secondary__content-wrapper">
            <div class="button-secondary__item-wrapper">
                <div class="button-secondary__text button-secondary__text--main">{{ text }}</div>
                <div class="button-secondary__text button-secondary__text--hover">{{ text }}</div>
            </div>
            <div class="button-secondary__item-wrapper" v-if="hasIcon">
                <IconArrowRight class="button-secondary__icon button-secondary__icon--main"/>
                <IconArrowRight class="button-secondary__icon button-secondary__icon--hover"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    hasIcon : {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.button-secondary{
    $root:&;
    border-radius: var(--spacing-20);
    // border: 1px solid var(--color-neutral-400);

    &:hover {
        #{$root}__frame  {
            transform: scale(1.05);
        }
        #{$root}__text  {
            transform: translateY(-100%);
        }
        #{$root}__icon  {
            transform: translateX(150%);
        }
    }
    &__frame {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%; 
        border-radius: var(--spacing-20);
        background-color: var(--color-neutral-900);
        transition: transform var(--default-animation-duration) var(--alias-default-ease); 
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
        height: 0.9rem;
        transition: transform var(--default-animation-duration) var(--alias-default-ease); 

        &--hover {
            position: absolute;
            right: 150%;
        }
    }
}
</style>