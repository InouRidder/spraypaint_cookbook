<template>
  <div class="box" id='search'>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input v-model='query' class="input" type="search" placeholder="Search for a recipe">
      </div>
      <div class="control">
        <a class="button" @click.prevent='addQuery'>Search</a>
      </div>
    </div>
    <section>
       <b-tag v-for="query in queries"
          class='has-space'
          type="is-primary"
          :key='query'
          closable
          aria-close-label="Close tag"
          @close="removeQuery(query)">
          {{ query }}
      </b-tag>
    </section>
  </div>
</template>

<style scoped>
  .has-space {
    margin: 2px;
  }
</style>

<script>
  export default {
    data() {
      return {
        query: '',
        queries: []
      }
    },
    computed: {
      fullQuery() {
        return this.queries.join(' ')
      }
    },
    methods: {
      addQuery() {
        if (this.queries.includes(this.query)) return
        this.queries.push(this.query)

        this.updateHistory()
      },
      removeQuery(queryToRemove) {
        this.queries = this.queries.filter(query => query !== queryToRemove)
        this.updateHistory()
      },
      updateHistory() {
        if (this.queries.length === 0) {
          this.$emit('clear')
          history.replaceState({}, "", `/`)
        } else {
          history.pushState({}, "", `?q=${this.queries.join(',')}`)
        }

        this.emitSearch()
        this.query = ''
      },
      emitSearch() {
        this.$emit('search', this.fullQuery)
      },
      syncParamsWithQuery() {
        if (this.$route.query.q) {
          this.queries = this.$route.query.q.split(',')
        } else {
          this.$emit('clear')
          this.queries = []
        }
      }
    },
    mounted() {
      this.syncParamsWithQuery()
      window.onpopstate = this.syncParamsWithQuery
    }

  }
</script>
