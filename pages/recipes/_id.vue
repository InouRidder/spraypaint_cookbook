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
    },
    async asyncData({ route }) {
      const { data } = await Recipe.find(route.params.id)

      return {
        recipe: {
          ...(data.attributes),
          id: data.id,
          category: {
            id: data.category ? data.category.id : undefined
          }
        }
      }
    }
  }
</script>
