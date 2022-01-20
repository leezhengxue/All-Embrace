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
    <footerbar />
  </div>
</template>

<script>
import headernav from "../src/components/header.vue";
import footerbar from "../src/components/footer.vue";
export default {
  name: "App",
  components: { headernav, footerbar },
  mounted() {
    document.title = "All-Embrace";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

* {
  margin: 0;
  padding: 0;
}
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
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #ceae3c;
}
</style>
