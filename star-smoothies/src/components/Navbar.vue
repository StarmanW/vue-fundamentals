<template>
  <div class="navbar navbar-fixed">
    <nav class="nav-extended teal">
      <div class="nav-wrapper">
        <router-link
          to="/"
          class="brand-logo center truncate"
        >
          Star Smoothies
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar nav {
  padding: 0px 15px;
}
</style>
