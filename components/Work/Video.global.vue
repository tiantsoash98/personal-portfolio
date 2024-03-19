<template>
    <section class="work-video mb-10 mb-md-40">
        <div class="container">
            <div class="row">
                <div class="work-video__wrapper img-wrapper img-wrapper--radius col-full col-md-10 col-start-md-2">
                    <video 
                        :src="video" 
                        class="video"
                        autoplay muted loop playsinline
                    >
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    video: String,
})
</script>

<style lang="scss" scoped>

</style>