<template>
    <section class="work-info mt-30 mb-30">
        <div class="container">
            <div class="row">
                <div class="work-info__section-title col-full col-md-4 col-lg-6">
                    Project
                </div>
                <div class="work-info__wrapper col-full col-md-8 col-lg-6">
                    <p class="work-info__text title-h5">{{ text }}</p>
                    <div class="work-info__details-wrapper mt-16">
                        <div class="work-info__list-wrapper">
                            <span class="work-info__label callout-text">Roles</span>
                            <ul class="work-info__roles">
                                <li v-for="role in roles" :key="role">{{ role }}</li>
                            </ul>
                        </div>
                        <div class="work-info__list-wrapper" v-if="client">
                            <span class="work-info__label callout-text">Client</span>
                            <span class="work-info__client">{{ client }}</span>
                        </div>
                        <div class="work-info__list-wrapper" v-if="collaborations">
                            <span class="work-info__label callout-text">With</span>
                            <ul class="work-info__collaborations">
                                <li v-for="collaboration in collaborations" :key="collaboration">{{ collaboration }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="work-info__label mt-8">{{ year }}</div>
                    <div class="work-info__button-wrapper mt-12">
                        <a :href="link" target="_blank">
                            <ButtonPrimary text="Visit live site" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    text: String,
    year: String,
    link: String,
    client: String,
    roles: Array,
    collaborations: Array,
})
</script>

<style lang="scss" scoped>
.work-info {
    &__label {
        text-transform: uppercase;
        opacity: 0.4;
    }
    &__details-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: var(--column-gap);
    }
    &__list-wrapper {
        flex: calc(33% - var(--column-gap));
        display: flex;
        flex-direction: column;
        text-wrap: nowrap;
    }
    &__button-wrapper {
        display: flex;
    }
}
</style>