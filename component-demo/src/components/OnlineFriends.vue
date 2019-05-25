<template>
  <div id="online-friends">
    <h3 class="center-align">Online Friends</h3>
    <hr />
    <ol>
      <li v-for="(friend, i) in friends" :key="i">{{ friend.name }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  props: {
    friends: Array
  }
};
</script>
