<template>
    <section class="section testimonials">
        <div class="container">
            <div class="border-item"></div>
            <div class="testimonials__title-wrapper mt-16">
                <div class="title-h3">What they say</div>
            </div>
            <div class="testimonials__swiper-wrapper mt-8 mt-md-12">
                <swiper
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
                    <swiper-slide
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                    >
                        <ContentRenderer :value="testimonial" />
                    </swiper-slide>
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
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    // import required modules
    import { EffectFade, Navigation, Pagination } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        async setup() {
            return {
                modules: [EffectFade, Navigation, Pagination],
                testimonials: await queryContent('_partials','testimonials')
                                .where({ _partial: true })
                                .find()
            }
        },
        props: {
            name: String,
            role: String,
            content: String,
        }
    }
</script>

<style lang="scss" scoped>
.swiper {
    &__button-wrapper {
        display: flex;
    }
}
</style>