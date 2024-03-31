<template>
    <section class="section home-about section-reveal" id="about" ref="targetSection">
        <div class="container">
            <div class="row">
                <div class="home-about__img-wrapper col-full col-md-6"></div>
                <div class="home-about__description-wrapper col-full col-md-6">
                    <p class="home-about__description title-h4 split-type section-reveal__title">
                        <ContentSlot unwrap="p"/>
                    </p>
                    <p class="home-about__description title-h4 mt-6 mt-md-12 split-type section-reveal__title">
                        <ContentSlot unwrap="p" name="second-paragraph"/>
                    </p>
                    <!-- <ButtonMain 
                        :text="'Get to know me'" 
                        type="secondary"
                        :hasIcon="true" 
                        class="mt-16"
                    /> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top center"
        }
    })
    .add(timelineTitleIn())
})

function timelineTitleIn (){
    var lines = targetSection.value.querySelectorAll('.section-reveal__title .split-type--line')

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power2.out"
        },
    })  

    tl
        .from(lines, { 
            yPercent: 100,
            stagger: 0.09,
        })

    return tl
}
</script>

<style lang="scss" scoped>
.home-about {
    &__description-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}   
</style>