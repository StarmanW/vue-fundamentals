<template>
  <div class="displaySmoothie">
    <!-- Preloader -->
    <div v-if="isLoading">
      <Preloader/>
    </div>

    <!-- For loop display smoothies -->
    <div class="row" v-if="retSuccess && smoothies.length !== 0">
      <SmoothieCard :smoothies="smoothies" @delConfirmation="delConfirmation"/>
    </div>

    <!-- Empty data -->
    <div class="grey-text center" v-if="retSuccess && smoothies.length === 0">
      <h4>There are no smoothies added yet.</h4>
      <p>Go add one now with the "+" button at bottom right corner!</p>
    </div>

    <!-- Unsuccessful retrieve -->
    <div class="row" v-if="!retSuccess && !isLoading">
      <div class="s12 center grey-text">
        <h3>Oops! Unable to retrieve smoothies...=(</h3>
        <p>Please ensure an active internet connection is connected.</p>
        <p>Contact the technical support at abc@example.com for further assistant.</p>
        <button class="btn waves-effect btn-large" @click="reloadPage">Refresh Page</button>
      </div>
    </div>

    <!-- Delete confirmation modal -->
    <div id="deleteConfirmationModal" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Delete Confirmation</h4>
        <p>
          Confirm to
          <span class="red-text">delete</span>
          smoothie "{{ delSmoothieObj === null ? "" : delSmoothieObj.name }}"?
        </p>
        <p>This action cannot be reverted.</p>
      </div>
      <div class="modal-footer">
        <div class="row">
          <div class="col s6">
            <button
              class="btn yellow darken-1 black-text modal-close waves-effect waves-yellow"
            >Cancel</button>
          </div>
          <div class="col s6">
            <button
              class="btn red modal-close waves-effect waves-red"
              @click="deleteSmoothie(delSmoothieObj)"
            >Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import SmoothieCard from "@/components/SmoothieCard";

export default {
  name: "DisplaySmoothie",
  components: {
    Preloader,
    SmoothieCard
  },
  props: {
    smoothies: Array,
    retSuccess: Boolean,
    isLoading: Boolean
  },
  data() {
    return {
      delSmoothieObj: null,
      modal: null
    };
  },
  mounted() {
    let elems = document.querySelector(".modal");
    this.modal = M.Modal.init(elems, {
      dismissible: false
    });
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    delConfirmation(delSmoothieObj) {
      this.modal.open();
      this.delSmoothieObj = delSmoothieObj;
    },
    deleteSmoothie(smoothieObj) {
      this.modal.close();
      this.$emit("deleteSmoothie", smoothieObj);
      this.delSmoothieObj = null;
    }
  }
};
</script>

<style>
.action-row {
  margin: 0;
}
p {
  font-size: 1.5rem;
}
.col.s6 > .btn {
  width: 100%;
}
.modal {
  overflow-y: hidden;
  max-height: 50%;
}
</style>
