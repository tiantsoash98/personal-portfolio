<template>
    <section class="section home-about section-reveal" id="about">
        <div class="container">
            <div class="row">
                <div class="home-about__img-wrapper col-full col-md-6"></div>
                <div class="home-about__description-wrapper col-full col-md-6">
                    <p class="home-about__description title-h4 split-type section-reveal__title">
                        Hi, bonjour, salama ! I am Tiantsoa, freelance Web designer & Creative designer based in Madagascar. I closely collaborate with agencies and passionate people who want to solve problems through beautiful and user-centered products. 
                    </p>
                    <p class="home-about__description title-h4 split-type mt-6 mt-md-12 section-reveal__title">
                        With a keen focus on user experience and creative interactions, I always aim to create memorable experiences that will set you apart.
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