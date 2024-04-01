<template>
    <section class="section services" id="services" ref="targetSection">
        <div class="container">
            <div class="border-item"></div>
            <div :value="services" class="services__header-wrapper row mt-16">
                <h3 class="services__label col-full col-md-4 col-lg-4 title-h3 split-type section-reveal__text">What I do</h3>
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
const targetSection = ref(null)
const { gsap } = useGsap()
const { textRevealByWord } = useSectionScrollRevealAnimate()
const services  = await queryContent('_partials','services')
                                .where({ _partial: true })
                                .find()



onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top center"
        }
    })
    .add(textRevealByWord(targetSection))
})
</script>

<style lang="scss" scoped>

</style>