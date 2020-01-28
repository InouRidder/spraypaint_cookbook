<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <n-link class="navbar-item" to="/">
          <img src="~/assets/graphiti-logo.png" alt="Logo">
        </n-link>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <n-link to='/' class="navbar-item is-active">
            Home
          </n-link>
          <n-link to='/recipes/new' class="navbar-item">
            Add a recipe
          </n-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-dropdown">
              <n-link to='/recipes/new' class="navbar-item">
                Add a recipe
              </n-link>
              <n-link to='/' class="navbar-item is-active">
                Home
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>
