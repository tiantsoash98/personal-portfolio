<template>
    <main class="page">
        <div class="work-content">
            <WorkHero
                project="Adoba"
                description="A super clean website for Adoba - a 3D visualization architecture studio."
                img="/works/adoba/adoba-hero.jpg"
            />
            <WorkInfo 
                text="Adoba is a 3D architectural visualization studio that offers immersive digital solutions and innovative visual experiences in the world of architecture, real estate and construction. They ambition to empower architects and real estate developers by showcasing their projects to potential clients and investors in the most captivating way."
                year="2024"
                link="https://adoba.agency/"
                client="Adoba"
                :roles="['Art Direction', 'Web Design', 'Web Development']"
                :collaborations="['Jamy Rasanda: 3D Artist']"
            />
            <WorkVideo
                video="/works/adoba/adoba-main.mp4"
            />
            <WorkSection
                title="Challenge"
                text="The challenge was to design and develop a website, highlighting the studio’s portfolio through a creative and minimalist approach with an emphasis on engaging animations and micro-interactions."
            />
            <WorkImg
                img="/works/adoba/adoba-screen-1.jpg"
            />
            <WorkGallery
                imgLeft="/works/adoba/adoba-screen-1.jpg"
                imgRight="/works/adoba/adoba-screen-1.jpg"
            />
            <WorkSection
                title="Process"
                text="After creating an initial design of the homepage with free-to-use 3D renderings, I thought it would be more interesting to use custom photos. Therefore, I reached out to Jamy to create 3D renders. The renders exceeded expectations, utilizing brutalist effects with rocks. Naturally, the idea emerged to continue this theme on the details page for each shape."
            />
            <WorkBanner
                img="/works/adoba/adoba-screen-1.jpg"
            />
            <WorkSection
                title=""
                text="And of course, a horizontal scroll."
            />
            <WorkImg
                img="/works/adoba/adoba-screen-1.jpg"
            />
        </div>
        <FeaturedWorksMain/>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>