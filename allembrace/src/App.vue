<template>
  <div>
    <div id="nav">
      <headernav />
      <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>|
    <router-link to="/newsroom">Newsroom</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import headernav from "../src/components/header.vue";
export default {
  name: "App",
  components: { headernav },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  position: sticky;
  top: 0;
  z-index: 99;
}
router-view {
  z-index: -1;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
