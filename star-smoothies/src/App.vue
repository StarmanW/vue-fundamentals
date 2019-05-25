<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style>
.container {
  padding-top: 25px;
  padding-bottom: 25px;
}

.divider {
  margin-bottom: 5px;
}
.material-icons {
  cursor: pointer;
}
</style>
