<template>
  <div class="business">
    <div class="our-business">
      <div class="hero">
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
            <div class="image"></div>
            <h2>
              All-Embrace
            </h2>
          </div>

          <div class="brand-card">
            <div class="image"></div>
            <h2>
              AE Warehouse
            </h2>
          </div>

          <div class="brand-card">
            <div class="image"></div>
            <h2>
              Kidstreet
            </h2>
          </div>

          <div class="brand-card">
            <div class="image"></div>
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
.hero-wrapper {
  height: 100%;
  width: 1024px;
  margin: 0 50px 0 50px;
  display: flex;
  align-items: flex-end;
}
.hero-wrapper h1 {
  margin: 20px 20px 30px 20px;
}

.section1 {
  min-height: 300px;
  width: 100%;
  background: orange;
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
}
.section1-wrapper h2 {
  width: 100%;
  margin: 10px 10px 10px 20px;
}
.brand-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 10px;
}
.brand-card {
  margin: 10px;
}
.brand-card h2 {
  margin: 0;
}
.brand-card .image {
  height: 200px;
  width: 200px;
  background: pink;
}
</style>
