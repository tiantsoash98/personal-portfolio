<template>
    <section class="work-section mb-10 mb-md-30">
        <div class="container">
            <div class="row">
                <div class="work-section__title-wrapper col-full col-md-3 col-lg-5 col-start-md-2">
                    <h6 class="paragraph-text" v-if="title">{{ title }}</h6>
                </div>
                <div class="work-section__text-wrapper col-full col-md-7 col-lg-5">
                    <p class="work-section__text title-h5"><ContentSlot unwrap="p"/></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>

</style>