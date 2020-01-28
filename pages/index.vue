<template>
  <section id="home">
    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <search />
        <div class="columns is-multiline">
          <div v-for='recipe in recipes' :key='recipe.id' class="column">
            <RecipeCard
              :recipe='recipe'
              @destroyed='filterRecipes'
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Search from '~/components/home/Search.vue'
import RecipeCard from '~/components/recipes/RecipeCard.vue'

export default {
  components: {
    Search,
    RecipeCard
  },
  data() {
    return {
      recipes: []
    }
  },
  methods: {
    filterRecipes(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    }
  },
  async mounted() {
    const { data } = await Recipe.includes('category').all()

    this.recipes = data
  }
}
</script>
