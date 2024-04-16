<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-full col-md-6">
                <h1>Oups...the content was not found</h1>
                </div>
                <div class="col-full col-md-4 col-lg-3 col-start-md-9 col-start-lg-10 mt-8">
                    <ButtonMain 
                        :text="'Back home'" 
                        :hasIcon="true" 
                        @click="handleClearError"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>