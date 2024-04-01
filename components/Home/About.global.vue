<template>
    <section class="section home-about section-reveal" id="about" ref="targetSection">
        <div class="container">
            <div class="row">
                <div class="home-about__img-wrapper col-full col-md-4">
                    <nuxt-img 
                        src="/tiantsoa-portrait.jpg" 
                        alt="Tiantsoa Rabemananjara portrait"
                        width="1536"
                        height="1310"
                        class="img home-about__portrait"
                        sizes="sm:90vw md:50vw lg:50vw 90vw"
                    />
                    <div class="home-about__img-overlay overlay"></div>
                </div>
                <div class="home-about__description-wrapper col-full col-md-6 col-start-md-7 mt-8 mt-md-0">
                    <p class="home-about__description title-h4 split-type section-reveal__text">
                        <ContentSlot unwrap="p"/>
                    </p>
                    <p class="home-about__description title-h4 mt-6 mt-md-12 split-type section-reveal__text">
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
const { textRevealByLine } = useSectionScrollRevealAnimate()

onMounted(() => {
    if(targetSection.value){
        gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.value,
                //trigger element - viewport
                start: "top 80%",
                end: "top center",
            }
        })
        .add(textRevealByLine(targetSection))
    } 
})
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