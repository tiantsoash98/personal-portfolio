<template>
    <main>
      <ContentDoc>
        <template #not-found>
            <h1>Oups...the content was not found</h1>
            <NuxtLink to="/">
                <ButtonPrimary text="Back home"/>
            </NuxtLink>
        </template>
      </ContentDoc>
    </main>
</template>  

<script setup>

</script>

<style lang="scss" scoped>

</style>