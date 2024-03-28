<template>
    <section class="section services" id="services">
        <div class="container">
            <div class="border-item"></div>
            <div :value="services" class="services__header-wrapper row mt-16">
                <h3 class="services__label col-full col-md-4 col-lg-4 title-h3">What I do</h3>
                <ServicesItem
                    v-for="(service, index) in services"
                    :key="index"
                    :title="service.title"
                    :description="service.description"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const services  = await queryContent('_partials','services')
                                .where({ _partial: true })
                                .find()
                                
</script>

<style lang="scss" scoped>

</style>