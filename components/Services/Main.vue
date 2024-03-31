<template>
    <section class="section services" id="services" ref="targetSection">
        <div class="container">
            <div class="border-item"></div>
            <div :value="services" class="services__header-wrapper row mt-16">
                <h3 class="services__label col-full col-md-4 col-lg-4 title-h3 split-type section-reveal__title">What I do</h3>
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
const services  = await queryContent('_partials','services')
                                .where({ _partial: true })
                                .find()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top 70%",
            end: "top center"
        }
    })
    .add(timelineTitleIn())
})

function timelineTitleIn (){
    var words = targetSection.value.querySelectorAll('.section-reveal__title .split-type--word')

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power2.out"
        },
    })  

    tl
        .from(words, { 
            yPercent: 100,
            stagger: 0.04,
        })

    return tl
}
</script>

<style lang="scss" scoped>

</style>