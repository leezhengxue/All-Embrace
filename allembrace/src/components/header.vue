<template>
  <div class="headernav">
    <nav class="navbar">
      <a href="/" class="nav-logo"> <img src="../assets/AE-W.png"/></a>
      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>

          <!-- <a href="#" class="nav-link">Services</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
          <!-- <a href="#" class="nav-link">Blog</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/our-business"
            >Our business</router-link
          >

          <!-- <a href="#" class="nav-link">About</a> -->
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/newsroom">Newsroom</router-link>
        
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
          <!-- <a href="#" class="nav-link">Contact</a> -->
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "headernav",
  props: {},
  mounted() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.headernav {
  border-bottom: 1px solid #e2e8f0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  background: #070808;
  opacity: 0.9;
}
.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link:hover {
  color: #482ff7;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #482ff7;
}
.nav-logo img {
  height: 90px;
  width: auto;
  margin-top: 8px;
}
@media only screen and (max-width: 1110px) {
  .nav-menu {
    position: fixed;
    left: 0;
    top: -100%;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    /* border-radius: 10px; */
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    z-index: -1;
  }

  .nav-menu.active {
    top: 6rem;
    z-index: -1;
    background: #070808;
    border-bottom: 1px solid white;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
}
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>
