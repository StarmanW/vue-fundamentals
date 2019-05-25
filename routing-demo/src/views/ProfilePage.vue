<template>
  <div id="profilePage" class="container pt-5">
    <h2 v-if="userExist">Profile page for {{ user.username }}</h2>
    <h2 v-else>Uh oh! User does not exist...</h2>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      user: {},
      uID: null,
      userExist: true
    };
  },
  created() {
    this.uID = this.$route.params.userID;
  },
  mounted() {
    this.getUser();
  },
  // beforeUpdate() {
  //   this.uID = this.$route.params.userID;
  //   this.getUser();
  // },
  // watch: {
  //   $route: "updateUserID"
  // },
  methods: {
    updateUserID(to, from) {
      this.uID = this.$route.params.userID;
      this.getUser();
    },
    async getUser() {
      let usersJSON = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.uID}`
      );
      this.user = await usersJSON.json();
      this.user.id === undefined
        ? (this.userExist = false)
        : (this.userExist = true);
    }
  }
};
</script>
