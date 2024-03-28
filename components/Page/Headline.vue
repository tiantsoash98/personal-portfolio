<template>
    <div class="container page-headline">
        <div class="row">
            <div class="col-full col-md-6 col-lg-8">
                <h1 class="text-visually-hidden">{{ headline }}</h1>
                <div class="title-h1 animate__title-in split-type">{{ headline }}</div>
            </div>
            <div class="page-headline__subheadline col-full col-md-6 col-lg-3">
                <p class="title-h6">{{ subheadline }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    headline: String,
    subheadline: String
})
</script>

<style lang="scss" scoped>
.page-headline {
    &__subheadline {
        align-self: end;
    }
}
</style>