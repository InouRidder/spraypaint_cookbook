<template>
    <div id='recipe-form' class='container has-margin-top'>
      <section>
        <b-field
          horizontal
          label="Title"
          placeholder="Please enter a title"
        >
          <b-input
            v-model='recipe.title'
            name="title"
            expanded
          />
        </b-field>

        <b-field
          horizontal
          label="Category"
        >
          <b-select
            v-model='recipe.category.id'
            placeholder="Select a topic"
          >
            <option
              v-for='category in categories'
              :key='category.id'
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </b-select>
        </b-field>

        <b-field
          horizontal
          label="Description"
        >
          <b-input
            v-model='recipe.description'
            type="textarea"
          />
        </b-field>

        <b-field
          horizontal
          label="Rating"
        >
          <b-rate v-model="recipe.rating" icon-pack="fas" />

        </b-field>


        <b-field
          horizontal
        >
          <p class="control">
            <button class="button is-primary" @click.prevent='submit'>
              {{ mutateBtnText }}
            </button>
          </p>
        </b-field>
    </section>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: ['recipe'],
    name: 'RecipeForm',
    data() {
      return {
        categories: []
      }
    },
    methods: {
      createRecipe() {
        const recipe = new Recipe({ id: this.recipe.id })

        if (recipe.id) recipe.isPersisted = true

        this.recipe.category = new Category({ id: this.categoryId })

        recipe.updateAttributes(this.recipe)

        if (recipe.category) recipe.category.isPersisted = true // Without this setting, spraypaint will try to create a new category. Recreating both objects to avoid mutating props directly.
        return recipe;
      },
      async submit() {
        const recipe = this.createRecipe()
        const res = await recipe.save({ with: 'category.id' })

        if (res) {
          this.$router.push('/')
        } else {
          this.$swal.fire(
            this.formatError(recipe.errors)
          )
        }
      },
      formatError(errors) {
        return Object.keys(errors).map(attr => errors[attr].fullMessage).join(', ')
      }
    },
    computed: {
      mutateBtnText() {
        return this.recipe.id ? 'Update' : 'Save'
      },
      categoryId() {
        const category = this.recipe.category
        return category ? category.id : 0
      }
    },
    async mounted() { // TODO: replace with asyncData
      const { data } = await Category.all()

      this.categories = data
    }

  }
</script>
