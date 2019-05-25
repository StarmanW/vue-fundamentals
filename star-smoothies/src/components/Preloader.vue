<template>
  <!-- Loading -->
  <div class="grey-text center-align">
    <div class="loader preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>
    </div>
    <p class="loading-text">
      Retrieving smoothies
    </p>
  </div>
</template>

<script>
import { setTimeout, setInterval } from "timers";
export default {
  name: "Preloader",
  mounted() {
    const text = document.querySelector(".loading-text");
    setInterval(() => {
      if (text.textContent.includes("...")) {
        text.textContent = "Retrieving smoothies";
      }
      text.textContent += ".";
    }, 1000);
  }
};
</script>

<style>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.loading-text {
  position: absolute;
  top: 60vh;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
