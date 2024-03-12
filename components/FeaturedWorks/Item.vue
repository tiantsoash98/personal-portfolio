<template>
    <article class="featured-works-item mb-20">
        <div class="container">
            <div class="row">
                <div class="featured-works-item__content-wrapper col-full col-md-5 col-lg-4 col-start-lg-2 pt-30 pb-30">
                    <div class="featured-works-item__index footnote-text">01 - 03</div>
                    <div class="featured-works-item__main-infos">
                        <div class="featured-works-item__title">Volumen</div>
                        <div class="featured-works-item__title title-h4">A beautiful website dedicated to exploring the beauty of shapes</div>
                    </div>
                    <div class="featured-works-item__second-infos">
                        <div class="featured-works-item__list-wrapper">
                            <span class="featured-works-item__label footnote-text">Roles</span>
                            <ul class="featured-works-item__roles">
                                <li>Art Direction</li>
                                <li>Web Design</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                        <div class="featured-works-item__list-wrapper ml-12">
                            <span class="featured-works-item__label footnote-text">Year</span>
                            <span class="callout-text">2023</span>
                        </div>
                    </div>
                    <ButtonSecondary text="See case" :hasIcon="true"/>
                </div>
                <figure class="featured-works-item__img-wrapper col-full col-md-6 col-start-md-7">
                    <NuxtImg src="/Volumen.jpg" class="img featured-works-item__img"></NuxtImg>
                </figure>
            </div>
        </div>
    </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.featured-works-item {
    &__content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: var(--spacing-14);
    }
    &__second-infos {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    &__list-wrapper {
        display: flex;
        flex-direction: column;
    }
    &__label {
        text-transform: uppercase;
        opacity: 0.4;
    }
    &__img-wrapper {
        border-radius: 1rem;
        overflow: hidden;
    }
}
</style>