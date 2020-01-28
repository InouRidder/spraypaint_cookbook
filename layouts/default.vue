<template>
  <div>
    <Nav />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
  import AppNav from '~/components/core/AppNav.vue'
  import AppFooter from '~/components/core/AppFooter.vue'

  export default {
    components: {
      Nav: AppNav,
      Footer: AppFooter,
    }
  }
</script>

<style lang="sass">
  @import '~assets/scss/app.scss';
</style>

