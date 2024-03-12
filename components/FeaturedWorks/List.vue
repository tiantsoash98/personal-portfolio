<template>
    <div class="featured-works-list mt-40" role="list">
        <FeaturedWorksItem 
            role="listitem" 
            class="mb-40"
            index="01 - 03"
            title="Volumen"
            description="A beautiful website dedicated to exploring the beauty of shapes"
            :roles="['Art Direction', 'Web Design', 'Web Development']"
            year="2023"
            img-src="/Volumen.jpg"
            :is-inverted="false"
        />
        <FeaturedWorksItem 
            role="listitem" 
            class="mb-40"
            index="02 - 03"
            title="Adoba"
            description="A super clean website for a 3D visualization architecture studio"
            :roles="['Art Direction', 'Web Design', 'Web Development']"
            year="2024"
            img-src="/Volumen.jpg"
            :is-inverted="true"
        />
        <FeaturedWorksItem 
            role="listitem" 
            class="mb-40"
            index="03 - 03"
            title="Traveller"
            description="A beautiful website dedicated to exploring the beauty of shapes"
            :roles="['Art Direction', 'Web Design', 'Web Development']"
            year="2023"
            img-src="/Volumen.jpg"
            :is-inverted="false"
        />
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>