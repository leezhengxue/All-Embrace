<template>
  <div>
    <div class="contact">
      <div class="hero hero-image">
        <div class="hero-wrapper">
          <h1>Contact Page</h1>
        </div>
      </div>
      <div class="section1">
        <div class="section1-wrapper">
          <div class="content-wrapper">
            <h2>Email:</h2>
            <h3>Ericsia@allembrace.my</h3>
          </div>
          <div class="content-wrapper">
            <h2>Phone Number:</h2>
            <h3>+6014 660 1574</h3>
          </div>
          <div class="content-wrapper">
            <h2>Address:</h2>
            <h3>
              15, Jalan 34b, Kampung Cheras Baru, 56100 Kuala Lumpur, Selangor
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  setup() {},
};
</script>

<style scoped>
.hero {
  height: 350px;
  width: 100%;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-image {
  position: relative;
}
.hero-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/all-embrace-contact.png");
  background-size: cover;
  background-position-y: 90%;
  background-position-x: 55%;
  z-index: 0;
  filter: brightness(0.6);
}
.hero-wrapper {
  height: 100%;
  width: 1024px;
  margin: 0 50px 0 50px;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}
.hero-wrapper h1 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 48px;
  margin: 20px 20px 30px 20px;
  color: #ceae3c;
}
.section1 {
  min-height: 350px;
  width: 100%;
  background: #070808;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section1-wrapper {
  height: 100%;
  width: 1024px;
  margin: 0 50px 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.content-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 25px 20px 25px 20px;
}
.content-wrapper h2 {
  margin: 0;
  width: 200px;
  font-family: "Raleway", sans-serif;
  text-align: left;
  color: white;
}
.content-wrapper h3 {
  margin: 0;
  width: 350px;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  color: white;
}
</style>
