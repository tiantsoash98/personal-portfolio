<template>
    <footer class="footer pt-40" id="contact" ref="targetSection">
        <FooterCTA/>
        <FooterActions/>
        <div class="ellipse__field" data-field-y="0" data-position-y="0" data-position-mobile-y="10" data-position-mobile-x="-40" data-scale="1">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top bottom",
            end: "bottom bottom",
            scrub: 3,
        }
    })
    .from(targetSection.value.querySelector('.ellipse__wrapper'), { 
        scale: 0,
        opacity: 0,
    })
})


</script>

<style lang="scss" scoped>
.footer {
    overflow: hidden;
    
    &__ellipse-wrapper {
        position: absolute;
        bottom: 0%;
        left: 0%;
        z-index: -1;
        width: 100%;
        height: min(130vh, 100vw);
        transform: translateY(50%);
    }
}
</style>