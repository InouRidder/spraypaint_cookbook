<template>
  <section id='recipe-new'>
    <section class="columns is-centered container margin-bottom">
      <div class="column is-one-third is-paddingless">
        <RecipeCard :recipe='recipe'/>
      </div>
    </section>

    <RecipeForm :recipe='recipe'/>
  </section>

</template>

<style scoped lang='scss'>
  #recipe-new {
    margin: 100px 0px;

    .margin-bottom {
      margin-bottom: 50px;
    }
  }
</style>

<script>
  import RecipeForm from '~/components/recipes/RecipeForm'
  import RecipeCard from '~/components/recipes/RecipeCard'

  export default {
    props: ['recipe'],
    components: {
      RecipeForm,
      RecipeCard
    }
  }
</script>
