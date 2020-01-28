<template>
  <div id='recipe-new'>
    <div class="columns is-centered">
      <div class="column is-half">
        <RecipeCard :recipe='recipe'/>
      </div>
    </div>

    <RecipeForm :recipe='recipe'/>
  </div>

</template>

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
