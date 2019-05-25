<template>
  <div class="smoothieCard">
    <div
      class="col m12 l6"
      v-for="smoothie in smoothies"
      :key="smoothie.id"
    >
      <div class="card small horizontal hoverable">
        <div class="card-image">
          <img :src="smoothie.imgSrc">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h5 class="header">
              {{ smoothie.name }}
            </h5>
            <div class="divider" />
            <div
              class="chip"
              v-for="(ingr, i) in smoothie.ingredients"
              :key="i"
            >
              {{ ingr }}
            </div>
          </div>
          <div class="card-action">
            <div class="action-row row center">
              <div class="col s6">
                <i class="material-icons">edit</i>
              </div>
              <div class="col s6">
                <i
                  class="material-icons"
                  @click="delConfirmation(smoothie.id)"
                >delete_forever</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmoothieCard",
  props: {
    smoothies: Array
  },
  methods: {
    delConfirmation(id) {
      const delSmoothieObj = this.smoothies.filter(s => s.id === id)[0];
      this.$emit("delConfirmation", delSmoothieObj);
    }
  }
};
</script>