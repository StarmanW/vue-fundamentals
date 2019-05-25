<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/" class="nav-link" exact>Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link
            :to="{name: 'user', params: { userID: 1}}"
            active-class="active"
            class="nav-link"
          >View Profile</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
