<template>
    <section class="section testimonials" ref="targetSection">
        <div class="container">
            <div class="border-item section-reveal__border"></div>
            <div class="testimonials__title-wrapper mt-16">
                <div class="title-h3 split-type section-reveal__text">What they say</div>
            </div>
            <div class="testimonials__swiper-wrapper mt-8 mt-md-12">
                <Swiper
                    :speed="600"
                    :loop="true"
                    :slides-per-view="1"
                    :grabCursor="true"
                    :modules="modules"
                    :effect="'fade'"
                    :fade-effect="{
                        crossFade: true
                    }"
                    :navigation="{
                        nextEl: '.swiper__button--next',
                        prevEl: '.swiper__button--prev',
                    }"
                >
                    <SwiperSlide
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                    >
                        <ContentRenderer :value="testimonial" />
                    </SwiperSlide>
                    <div class="row mt-8 mt-md-12">
                        <div class="col-full col-md-5"></div>
                        <div class="swiper__button-wrapper col-full col-md-7">
                            <div class="swiper__button swiper__button--prev">
                                <ButtonMain 
                                    text="" 
                                    type="secondary"
                                    size="small"
                                    :hasIcon="true" 
                                    icon="IconArrowLeft"
                                    animate-direction="to-left"
                                />
                            </div>
                            <div class="swiper__button swiper__button--next ml-2">
                                <ButtonMain 
                                    text="" 
                                    type="secondary"
                                    size="small"
                                    :hasIcon="true" 
                                />
                            </div>
                        </div> 
                    </div>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
const modules = [EffectFade, Navigation, Pagination]
const targetSection = ref(null)
const { gsap } = useGsap()
const { textRevealByWord, borderReveal } = useSectionScrollRevealAnimate()
const testimonials = await queryContent('_partials','testimonial')
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
    .add(borderReveal(targetSection))
    .add(textRevealByWord(targetSection), '-=0.8')
})
</script>

<style lang="scss" scoped>
.swiper {
    &__button-wrapper {
        display: flex;
    }
}
</style>