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
                    <swiper-slide>
                        <TestimonialsItem
                            name="Miandra Raharison"
                            role="Co-founder of My Smart Content"
                            content="“Nous avons particulièrement apprécié la collaboration avec Tiantsoa pour la refonte de notre site internet. C'est un créatif talentueux, à l'écoute, méthodique, bien organisé, réactif, il a su comprendre nos besoins et traduire nos envies et notre vision en un véritable chef d'oeuvre.  Tiantsoa est un véritable professionnel que je recommande vivement pour vos projets de webdesign ou tout autre projet créatif.”"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <TestimonialsItem
                            name="Julien Dutartre"
                            role="Engagement Manager - Versusmind"
                            content="“En tant que chef de projet, travailler avec Tiantsoa est facile. Particulièrement sur l'aspect UI où il a su être force de proposition pour aboutir à un design agréable et intuitif en prenant en compte les nombreuses contraintes techniques.”"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <TestimonialsItem
                            name="John Doe"
                            role="3D Artist"
                            content="“Franchement, travailler avec Tiantsoa est un plaisir ! Je recommande vivement pour vos projets de site web”"
                        />
                    </swiper-slide>
                    <div class="row mt-12">
                        <div class="col-full col-md-5"></div>
                        <div class="swiper__button-wrapper col-full col-md-7">
                            <div class="swiper__button swiper__button--prev">
                                <ButtonSecondary text="" :has-icon="true" size="small"/>
                            </div>
                            <div class="swiper__button swiper__button--next ml-2">
                                <ButtonSecondary text="" :has-icon="true" size="small"/>
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
        setup() {
            return {
                modules: [EffectFade, Navigation, Pagination],
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
    &__button {
        cursor: pointer;

        &--prev {
            transform: rotate(180deg);
        }
    }
}
</style>