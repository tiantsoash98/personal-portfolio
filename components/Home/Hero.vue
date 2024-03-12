<template>
    <div class="hero">
        <div class="hero__ellipse-wrapper">
            <div class="ellipse-decor"></div>
        </div>
        <div class="hero__main-wrapper container">
            <div class="hero-spacer"></div>
            <div class="hero__content-wrapper row pt-20 pb-20">
                <div class="hero__headline-wrapper col-full col-lg-8">
                    <h1 class="text-visually-hidden">Web Designer & Creative Developer helping passionate people grow their businesses</h1>
                    <span class="title-h1">Web Designer & Creative Developer helping passionate people grow their businesses</span>
                </div>
                <div class="hero__button-wrapper col-full col-lg-4">
                    <ButtonPrimary :text="'Explore my work'"/>
                </div>
            </div>
            <div class="hero__footer row">
                <div class="hero__footer-item col-3 col-lg-3"> 
                    <IconArrowDown class="hero__arrow"/>
                </div>
                <div class="hero__footer-item col-full col-md-6 col-lg-6">
                    <ul class="hero__socials-wrapper">
                        <li class="hero__social"><a class="hover-link" href="#">Email</a></li>
                        <li class="hero__social ml-8"><a class="hover-link" href="#">Linkedin</a></li>
                        <li class="hero__social ml-8"><a class="hover-link" href="#">Instagram</a></li>
                    </ul>
                </div>
                <div class="hero__footer-item hero__timezone col-full col-md-6 col-lg-3">
                    <span>Local time {{ localTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const localTime = ref("00:00:00 AM GMT+3")

onMounted(() => {
    const time = useLocalTime()
    localTime.value = time.data.value
})
</script>

<style lang="scss" scoped>
.hero {
    height: calc(100vh - 4rem);

    &__ellipse-wrapper {
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 100vw;
        height: 75vw;
        transform: translate(0%, 50%);
        overflow: hidden;
    }
    &__main-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__button-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    &__footer-item {
        align-self: end;
    }
    &__socials-wrapper {
        width: 100%;
        display: flex;
    }
    &__social {
        text-transform: uppercase;
    }
    &__timezone {
        text-align: right;
    }
    &__arrow {
        width: 4rem;
    }
}
</style>