<template>
    <div class="featured-works-list mt-16 mt-md-40" role="list">
        <FeaturedWorksItem 
            v-for="(work, index) in works"
            :key="work.link"
            role="listitem" 
            class="mb-16 mb-md-60"
            :index="fullIndex(index)"
            :title="work.project"
            :description="work.description"
            :roles="work.roles"
            :year="work.year"
            :img-src="work.image.src"
            :img-alt="work.image.alt"
            :path="work.path ? work.path : work._path"
            :is-inverted="isEven(index)"
        />
    </div>
</template>

<script setup>
const works = await queryContent('work')
        .only(['project', 'description', 'image', 'year', 'roles', 'path', '_path'])
        .limit(5)
        .find()

const fullIndex = (index) => `0${ index }`
const isEven = (index) => ((index - 1) % 2) == 0
</script>

<style lang="scss" scoped>

</style>