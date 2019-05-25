<template>
  <div id="all-friends">
    <h3 class="center-align">All Friends</h3>
    <hr />
    <ol>
      <li v-for="(friend, i) in friends" :key="i">
        {{ friend.name }} - {{ friend.online ? "Online" : "Offline" }}
        <button
          class="waves-effect waves-light btn-small red darken-3"
          @click="removeConfirmation(friend.name)"
        >
          Remove Friend
        </button>
      </li>
    </ol>

    <!-- Modal Structure -->
    <div id="confirmRemoveFriend" class="modal">
      <div class="modal-content">
        <h4>Confirm?</h4>
        <p>Confirm remove "{{ name }}" as your friend?</p>
      </div>
      <div class="modal-footer">
        <button class="waves-effect waves-orange modal-close btn-flat">
          Cancel
        </button>
        <button class="waves-effect waves-red btn-flat" @click="removeFriend()">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  data() {
    return {
      name: "",
      modalInstance: null
    };
  },
  props: {
    friends: Array
  },
  methods: {
    removeConfirmation(name) {
      // Query HTML modal and initialize modal
      let elem = document.querySelector(".modal");
      this.modalInstance = M.Modal.init(elem);

      // Set local variable and open modal
      this.name = name;
      this.modalInstance.open();
    },
    removeFriend() {
      // Send removeFriend event and close modal
      this.$emit("removeFriend", { name: this.name });
      this.modalInstance.close();
    }
  }
};
</script>
