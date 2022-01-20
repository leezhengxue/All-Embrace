<template>
  <div class="about">
    <div class="hero hero-image">
      <div class="hero-wrapper">
        <h1>About Us</h1>
      </div>
    </div>

    <div class="section1">
      <div class="section1-wrapper">
        <div class="video">
          <img src="../assets/AE-W.png" />
        </div>
        <div class="description-wrapper">
          <h2>
            Who are we
          </h2>
          <p>
            All-Embrace is a thriving young brand based in Malaysia, which
            generates new concepts and development in the industry of
            Technology, F&B, Entertainment & Lifestyle. Our team works with
            blood, sweat & tears to deliver the maximum effort in order to
            achieve an outstanding result for our stakeholders.
          </p>

          <router-link class="button" to="/contact">
            Learn More
          </router-link>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="section1">
      <div class="section1-wrapper">
        <div class="description-wrapper-2">
          <h2>
            Vision
          </h2>
          <p>
            To be the top innovative leading corporation in Malaysia, committed
            to enhancing shareholder value and maintaining long-term sustainable
            growth in our core businesses.
          </p>
        </div>
      </div>
    </div>

    <div class="line"></div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.10.0/css/all.css"
    />
    <div class="section1">
      <div class="section1-wrapper">
        <div class="section-wrapper-2">
          <h2>
            Mission
          </h2>
          <div class="content-card">
            <div class="card">
              <div class="circle"><i class="icon far fa-handshake"></i></div>
              <h2>
                Commitment
              </h2>
              <p>
                Be committed to innovation and the adoption of new technology to
                achieve competitive advantage.
              </p>
            </div>

            <div class="card">
              <div class="circle"><i class="icon fa fa-dollar-sign"></i></div>
              <h2>
                Value
              </h2>
              <p>
                We aim to generate sustainable growth and profits, and to
                consistently enhance our stakeholder’s value
              </p>
            </div>

            <div class="card">
              <div class="circle"><i class="icon far fa-star"></i></div>
              <h2>
                Experiences
              </h2>
              <p>
                We are committed towards providing the most delightful and
                memorable experiences to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {},
  setup() {},
};
</script>

<style scoped>
.about {
  background: #070808;
}

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
  background-image: url("../assets/all-embrace-about.png");
  background-size: cover;
  background-position-y: 30%;
  background-position-x: 55%;
  z-index: 0;
  filter: brightness(0.6);
}
/* .hero-image {
  background-image: url("../assets/all-embrace-about.png");
  background-size: cover;
  background-position-y: 30%;
  background-position-x: 50%;
  filter: brightness(0.5);
} */
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
.line {
  height: 3px;
  width: 80%;
  border-radius: 10px;
  opacity: 30%;
  background: white;
  margin: auto;
}
.section1 {
  min-height: 300px;
  width: 100%;
  background: #070808;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section1-wrapper {
  height: 100%;
  width: 1024px;
  margin: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.video {
  max-width: 350px;
  margin: 20px 0;
}
.video img {
  max-width: 100%;
  height: auto;
}
.description-wrapper {
  max-width: 50%;
  margin: 0 20px;
  text-align: left;
}

h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 36px;
  margin: 20px 0 10px 0;
}
p {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  margin: 10px 0;
}

.button {
  text-decoration: none;
  height: 30px;
  width: 150px;
  border: #ceae3c solid 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  font-weight: bold;
  color: white;
}

.description-wrapper-2 {
  max-width: 100%;
  margin: 0 20px;
}
@media (max-width: 980px) {
  .description-wrapper {
    max-width: 100%;
    margin: 0 20px;
  }
}
.section-wrapper-2 {
  max-width: 100%;
  margin: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.section-wrapper-2 h2 {
  width: 100%;
}
.content-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  min-height: 350px;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #070808;
  margin: 10px;
}
.circle {
  height: 100px;
  width: 100px;
  background: transparent;
  border: #ceae3c solid 4px;
  border-radius: 50%;
  margin: auto;
  display: flex;
}
.fa {
  text-align: center;
  margin: auto;
  font-size: 50px;
  color: #ceae3c;
}
.far {
  text-align: center;
  margin: auto;
  font-size: 50px;
  color: #ceae3c;
}
.card h2 {
  width: 80%;
  height: 50px;
  font-size: 27px;
  border: #ceae3c solid 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
