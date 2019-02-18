<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Q2">Question2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  import Question1 from "./components/Question1.vue";
  import Question2 from "./components/Question2.vue";

  export default {
    name: "app",
    components: {
      Question1,
      Question2
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&subset=chinese-traditional");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #ccc;
    font-family: "Noto Sans TC", sans-serif;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .nav {
    width: 300px;
    margin: auto;
  }
  .nav a {
    margin-right: 10px;
    text-decoration: underline;
  }
</style>
