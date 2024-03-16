<template>
    <div class="featured-works-list mt-40" role="list">
        <FeaturedWorksItem 
            v-for="(work, index) in works"
            :key="work.link"
            role="listitem" 
            class="mb-40"
            :index="fullIndex(index)"
            :title="work.project"
            :description="work.description"
            :roles="work.roles"
            :year="work.year"
            :img-src="work.img"
            :link="work.link"
            :is-inverted="isEven(index)"
        />
    </div>
</template>

<script setup>
const works = await queryContent('work')
    .only(['project', 'description', 'img', 'year', 'roles', 'link'])
    .limit(3)
    .find()

const fullIndex = (index) => `0${ index }`
const isEven = (index) => ((index - 1) % 2) == 0
</script>

<style lang="scss" scoped>
.featured-works-list {
    &__ellipse-wrapper {
        position: absolute;
        top: 23%;
        left: 0%;
        transform: translateX(-50%);
        z-index: -1;
        width: 90vw;
        height: 90vh;
    }
}
</style>