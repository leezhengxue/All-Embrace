<template>
  <div class="business">
    <div class="our-business">
      <div class="hero hero-image">
        <div class="hero-wrapper">
          <h1>Our Business</h1>
        </div>
      </div>
    </div>

    <div class="section1">
      <div class="section1-wrapper">
        <h2>
          Brand
        </h2>
        <div class="brand-wrapper">
          <div class="brand-card">
            <div class="image-container">
              <img src="../assets/AE-W-logo.png" />
            </div>
            <h2>
              All-Embrace
            </h2>
          </div>

          <div class="brand-card">
            <div class="image-container">
              <img src="../assets/AEwarehouse-logo.png" />
            </div>
            <h2>
              AE Warehouse
            </h2>
          </div>

          <div class="brand-card">
            <div class="image-container">
              <img src="../assets/kidstreet-logo.png" />
            </div>
            <h2>
              Kidstreet
            </h2>
          </div>

          <div class="brand-card">
            <div class="image-container">
              <img src="../assets/freshhh-logo.png" />
            </div>
            <h2>
              Freshhhh
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
  props: {},
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
  background-image: url("../assets/all-embrace-business.png");
  background-size: cover;
  background-position-y: 50%;
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
  font-size: 55px;
  margin: 20px 20px 30px 20px;
  color: #ceae3c;
}

.section1 {
  min-height: 300px;
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
  align-items: center;
  color: white;
  font-family: "Raleway", sans-serif;
}
.section1-wrapper h2 {
  width: 100%;
  margin: 10px 10px 10px 20px;
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-size: 28px;
  color: white;
}
.brand-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 10px;
}
.brand-card {
  margin: 20px;
}
.brand-card h2 {
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #ceae3c;
}
.brand-card .image-container {
  height: 200px;
  width: 200px;
  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand-card .image-container img {
  height: auto;
  width: 100%;
}
</style>
