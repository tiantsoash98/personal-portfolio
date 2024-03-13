<template>
    <div :class="`button button-secondary button--${size}`">
        <div class="button-secondary__frame"></div>
        <div class="button-secondary__content-wrapper">
            <div class="button-secondary__item-wrapper" v-if="text">
                <div class="button-secondary__text button-secondary__text--main">{{ text }}</div>
                <div class="button-secondary__text button-secondary__text--hover">{{ text }}</div>
            </div>
            <div class="button-secondary__item-wrapper" v-if="hasIcon">
                <IconArrowRight class="button-secondary__icon button-secondary__icon--main" v-if="icon == 'arrow-right'"/>
                <IconArrowRight class="button-secondary__icon button-secondary__icon--hover" v-if="icon == 'arrow-right'"/>
                <IconArrowLeft class="button-secondary__icon button-secondary__icon--main" v-if="icon == 'arrow-left'"/>
                <IconArrowLeft class="button-secondary__icon button-secondary__icon--hover" v-if="icon == 'arrow-left'"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
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
        default: 'arrow-right',
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