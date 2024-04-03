<template>
    <section class="work-banner mb-16 mb-md-30" ref="targetSection">
        <div class="work-banner__wrapper img-wrapper">
            <nuxt-img
                :src="img"
                class="work-banner__img img img-load" 
                sizes="sm:100vw md:100vw lg:100vw 100vw"
                role="presentation"
                loading="lazy"
            />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    img: String,
})
const { gsap } = useGsap()
const targetSection = ref(null)

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    })
    .set(targetSection.value.querySelector('.work-banner__img'), { 
        scale: 1.2
    })
    .fromTo(targetSection.value.querySelector('.work-banner__img'), { 
        yPercent: -8
    }, {
        yPercent: 8
    })
})
</script>

<style lang="scss" scoped>
</style>