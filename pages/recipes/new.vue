<template>
  <div id='recipe-new'>
    <MutateRecipe :recipe='recipe' />
  </div>
</template>

<script>
  import MutateRecipe from '~/components/recipes/MutateRecipe'

  export default {
    components: {
      MutateRecipe,
    },
    data(){
      return  {
        recipe: {
          category: {}
        }
      }
    }

  }
</script>
