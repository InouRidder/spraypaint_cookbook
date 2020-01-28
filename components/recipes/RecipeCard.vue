<template>
  <div class="card large">
    <div class="card-image">
      <figure class="image">
        <img :src="imgSrc" alt="Recipe">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img src="~/assets/graphiti-logo.png" alt="user">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 no-padding">
            {{ recipe.title }}
          </p>
          <p class="subtitle is-6">
            <b-rate v-model="recipe.rating" icon-pack="fas" :disabled='true' />
          </p>
          <small>
            {{ categoryName }}
          </small>
        </div>
      </div>
      <div class="content">
        {{ recipe.description }}
      </div>
      <div v-if='recipe.id' class='card-actions'>
        <n-link  :to="{ name: 'recipes-id', params: { id: recipe.id } }">
          <i class="fas fa-pen-square"></i>
        </n-link>
        <a @click.prevent='destroy'>
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['recipe'],
    computed: {
      categoryName() {
        return this.recipe.category ? this.recipe.category.name : ''
      },
      imgSrc() {
        return "https://source.unsplash.com/200x100/?food," + this.categoryName
      }
    },
    methods: {
      async destroy() {
        const { value: accept } = await this.$swal.fire({
          title: `Are you sure you want to delete ${this.recipe.title}`,
          confirmButtonText: 'Delete',
          showCancelButton: true
        })

        if (accept) {
          this.recipe.destroy()
          this.$emit('destroyed', this.recipe.id)
        }

      }
    }
  }
</script>
