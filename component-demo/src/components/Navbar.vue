<template>
  <nav>
    <div class="nav-wrapper green darken-3 z-depth-2">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    let elems = document.querySelectorAll(".sidenav"),
      instances = M.Sidenav.init(elems);
  }
};
</script>

<style scoped>
.brand-logo {
  margin-left: 1rem;
}
nav {
  margin-bottom: 2rem;
}
</style>
