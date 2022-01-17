<template>
  <div>
    <div class="contact">
      <div class="hero">
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
  min-height: 350px;
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
  text-align: left;
}
.content-wrapper h3 {
  margin: 0;
  width: 350px;
  text-align: left;
}
</style>
