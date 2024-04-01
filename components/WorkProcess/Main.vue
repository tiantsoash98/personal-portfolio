<template>
    <section class="section work-process" ref="targetSection">
        <div class="container">
            <div class="ellipse__field section-reveal__ellipse" data-field-y="20" data-position-x="65" data-scale="1">
                <div class="ellipse__wrapper">
                    <div class="ellipse__decor"></div>
                </div>
            </div>
            <div class="border-item section-reveal__border"></div>
            <div class="work-process__header-wrapper row mt-16">
                <h3 class="work-process__label col-full col-md-6 paragraph-text">{{ workProcess.title }}</h3>
                <p class="work-process__label col-full col-md-6 title-h3 split-type section-reveal__text">{{ workProcess.description }}</p>
            </div>
            <ContentRenderer :value="workProcess" class="work-process__items-wrapper row mt-20 mt-md-40" role="list" />
        </div>
    </section>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()
const { textRevealByWord, borderReveal, textBlockReveal, ellipseReveal } = useSectionScrollRevealAnimate()
const workProcess = await queryContent('_partials','work-process')
                        .where({ _partial: true })
                        .findOne()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection.value,
            //trigger element - viewport
            start: "top 80%",
            end: "top center",
            toogleActions: "play restart restart none",
        }
    })
    .add(borderReveal(targetSection))
    .add(textRevealByWord(targetSection), '-=0.8')
    .add(textBlockReveal(targetSection), '-=1.3')
    .add(ellipseReveal(targetSection), '-=1.3')
})
</script>

<style lang="scss" scoped>
.work-process{
    &__items-wrapper {
        row-gap: var(--spacing-20);
    }
}

@media screen and (max-width: 991px) {
    .work-process{
        &__items-wrapper {
            row-gap: var(--spacing-8);
        }
    }
}
</style>