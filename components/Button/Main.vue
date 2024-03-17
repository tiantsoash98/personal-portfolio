<template>
    <div :class="`button button--${type} button--${size} button--animate-${ animateDirection }`">
        <div class="button__frame"></div>
        <div class="button__content-wrapper">
            <div class="button__item-wrapper" v-if="text">
                <div class="button__text button__text--main">{{ text }}</div>
                <div class="button__text button__text--hover">{{ text }}</div>
            </div>
            <div class="button__item-wrapper" v-if="hasIcon">
                <component :is="icon" class="button__icon button__icon--main"/>
                <component :is="icon" class="button__icon button__icon--hover"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    type: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'large'
    },
    hasIcon : {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: 'IconArrowRight',
    },
    animateDirection: {
        type: String,
        default: 'to-right'
    }
})
</script>

<style lang="scss" scoped>
.button-secondary{
    $root:&;
    border-radius: var(--spacing-20);

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
        height: var(--button-icon-height);
        transition: transform var(--default-animation-duration) var(--alias-default-ease); 

        &--hover {
            position: absolute;
            right: 150%;
        }
    }
}
</style>