<template>
    <div>
        <HomeHero/>
        <section class="section home-about">
            <div class="container">
                <div class="row">
                    <div class="home-about__img-wrapper col-full col-md-6"></div>
                    <div class="home-about__description-wrapper col-full col-md-6">
                        <h2 class="home-about__description title-h4">
                            Hi, bonjour, salama ! I am Tiantsoa, freelance Web designer & Creative designer based in Madagascar. I closely collaborate with agencies and passionate people who want to solve problems through beautiful and user-centered products. 
                            <br><br>With a keen focus on user experience and creative interactions, I always aim to create memorable experiences that will set your brand apart.
                        </h2>
                        <ButtonSecondary text="Get to know me" :hasIcon="true" class="mt-16"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="section featured-works" id="featured-works">
            <FeaturedWorksMarquee/>
            <FeaturedWorksList/>
            <div class="home-featured-works__ellipse-wrapper">
                <div class="ellipse-decor"></div>
            </div>
        </section>
        <HomeWorkProcess/>
        <TestimonialsMain/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {
    &-about {
        &__description-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }    
    &-featured-works {
        &__ellipse-wrapper {
            position: absolute;
            top: 28%;
            left: 0%;
            transform: translateX(-50%);
            z-index: -1;
            width: 90vw;
            height: 90vh;
        }
    }
}
</style>