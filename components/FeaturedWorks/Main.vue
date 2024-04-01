<template>
    <section class="section featured-works" id="works" ref="targetSection">
        <div class="border-item mb-10 mb-md-20"></div>
        <FeaturedWorksMarquee/>
        <FeaturedWorksList/>
        <div class="ellipse__field section-reveal__ellipse" data-field-y="30" data-position-x="-50" data-position-y="0" data-scale="0.9">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()
const { ellipseReveal } = useSectionScrollRevealAnimate()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top center",
            toogleActions: "play restart restart none",
        }
    })
    .add(ellipseReveal(targetSection))
})
</script>

<style lang="scss" scoped>

</style>