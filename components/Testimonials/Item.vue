<template>
    <div class="testimonial row mt-4 mt-md-0">
        <div class="col-full col-md-5">
            <div class="testimonial__name font-medium">{{ name }}</div>
            <div class="testimonial__role">{{ role }}</div>
        </div>
        <div class="testimonal__content-wrapper col-full col-md-7">
            <div class="testimonial__content title-h4" >{{ content }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
    role: String,
    content: String,
})
</script>

<style lang="scss" scoped>
.testimonial{
    &__role {
        color: var(--color-neutral-400);
    }
    &__content-wrapper {
        display: flex;
        flex-direction: column;
    }
}
</style>