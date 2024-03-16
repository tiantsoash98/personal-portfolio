<template>
    <div class="work-video mt-40">
        <div class="container">
            <div class="row">
                <div class="work-video__wrapper col-full col-md-10 col-start-md-2">
                    <video 
                        :src="video" 
                        class="video"
                        muted loop playsinline
                    >
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    video: String,
})
</script>

<style lang="scss" scoped>
.work-video{
    &__wrapper {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
    }
}
</style>