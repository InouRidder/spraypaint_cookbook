<template>
  <section id="home">
    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <search
          @search='updateRecipesWithQuery'
          @clear='stopSearching'
        />
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
      recipes: [],
      page: 1,
      searching: false
    }
  },
  methods: {
    async stopSearching() {
      this.searching = false
      this.page = 1

      const { data } = await Recipe.per(10).page(this.page).includes('category').all()
      this.recipes = data
    },
    filterRecipes(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    },
    async updateRecipesWithQuery(query) {
      this.searching = true

      const { data } = await Recipe.where({ title: { prefix:  query } }).all()
      this.recipes = data;
    },
    attachInfiniteScroll() {
      window.onscroll = () => {
         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight ===   document.documentElement.offsetHeight;

        if (bottomOfWindow && !this.searching) {
          this.fetchRecipes({ page: this.page += 1 })
        }
      }
    },
    async fetchRecipes({ page }) {
      const { data } = await Recipe.per(10).page(page).includes('category').all()
      this.recipes = [...(this.recipes), ...data]
    }
  },
  async asyncData() {
    const { data } = await Recipe.per(10).page(1).includes('category').all()
    return { recipes: data }
  },
  mounted() {
    this.attachInfiniteScroll()
  }
}
</script>
