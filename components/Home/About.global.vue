<template>
    <section class="section home-about section-reveal" id="about">
        <div class="container">
            <div class="row">
                <div class="home-about__img-wrapper col-full col-md-6"></div>
                <div class="home-about__description-wrapper col-full col-md-6">
                    <p class="home-about__description title-h4 split-type section-reveal__title">
                        <ContentSlot unwrap="p"/>
                    </p>
                    <p class="home-about__description title-h4 split-type mt-6 mt-md-12 section-reveal__title">
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