<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <n-link class="navbar-item" to="/">
          <img src="~/assets/logo.png" alt="Logo">
        </n-link>
        <span @click="dropdown = !dropdown" class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" :class="navClass">
        <div class="navbar-end">
          <n-link to=‘/’ class="navbar-item">
            Home
          </n-link>
          <n-link to=‘/recipes/new’ class="navbar-item">
            Add a recipe
          </n-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        dropdown: false
      }
    },
    computed: {
      navClass() {
        return "navbar-menu " + (this.dropdown ? 'is-active' : '')
      }
    }

  }
</script>
