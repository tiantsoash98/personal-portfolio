<template>
    <section class="section work-process">
        <div class="container">
            <div class="border-item"></div>
            <div class="work-process__header-wrapper row mt-16">
                <h3 class="work-process__label col-full col-md-6 paragraph-text">My work process</h3>
                <p class="work-process__label col-full col-md-6 title-h3">A clear process is the key to successful projects. These five steps are what I closely follow to create high-quality products.</p>
            </div>
            <div class="work-process__items-wrapper row mt-30" role="list">
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'01'"
                    title="Discovery"
                    description="The first step is getting to know you, understand your vision and your values. This will help identify the core challenges to solve for a high-performing website"
                    class="col-3 col-md-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'02'"
                    title="Strategy"
                    description="I take what I have learned about you and start making competitive analysis. Then, I start building the informational architecture and the low-fidelity wireframes along with design style exploration."
                    class="col-3 col-md-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'03'"
                    title="Design"
                    description="Once the foundation is set, I create the aesthetically pleasing and user-friendly website in the form of high-fidelity wireframes. I use Figma for my designs."
                    class="col-3 col-md-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'02'"
                    title="Strategy"
                    description="I take what I have learned about you and start making competitive analysis. Then, I start building the informational architecture and the low-fidelity wireframes along with design style exploration."
                    class="col-3 col-md-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'03'"
                    title="Design"
                    description="Once the foundation is set, I create the aesthetically pleasing and user-friendly website in the form of high-fidelity wireframes. I use Figma for my designs."
                    class="col-3 col-md-4"
                />
            </div>
        </div>
        
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>