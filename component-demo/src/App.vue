<template>
  <div id="app">
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="container">
      <div class="row">
        <div class="col s6">
          <AllFriends :friends="friends" @removeFriend="removeFriend" />
        </div>
        <div class="col s6">
          <OnlineFriends :friends="getOnlineUser()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import AllFriends from "./components/AllFriends.vue";
import OnlineFriends from "./components/OnlineFriends.vue";

export default {
  name: "app",
  components: {
    Navbar,
    HelloWorld,
    AllFriends,
    OnlineFriends
  },
  data() {
    return {
      friends: [
        { name: "Michelle Yeo", online: true },
        { name: "Samuel W", online: true },
        { name: "Peter Johnson", online: false },
        { name: "Emily Kim", online: true },
        { name: "Li Jun", online: false }
      ]
    };
  },
  methods: {
    getOnlineUser() {
      return Array.from(this.friends).filter(friend => {
        return friend.online;
      });
    },
    removeFriend(payload) {
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
