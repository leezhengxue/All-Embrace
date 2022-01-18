<template>
  <div class="about">
    <div class="hero">
      <div class="hero-wrapper">
        <h1>About Us</h1>
      </div>
    </div>

    <div class="section1">
      <div class="section1-wrapper">
        <div class="video">
          video
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
          <div class="button">
            learn more btn
          </div>
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

    <div class="section1">
      <div class="section1-wrapper">
        <div class="section-wrapper-2">
          <h2>
            Mission
          </h2>
          <div class="content-card">
            <div class="card">
              <div class="circle">
                O
              </div>
              <h2>
                Commitment
              </h2>
              <p>
                Be committed to innovation and the adoption of new technology to
                achieve competitive advantage.
              </p>
            </div>

            <div class="card">
              <div class="circle">
                O
              </div>
              <h2>
                Value
              </h2>
              <p>
                We aim to generate sustainable growth and profits, and to
                consistently enhance our stakeholder’s value
              </p>
            </div>

            <div class="card">
              <div class="circle">
                O
              </div>
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
.line {
  height: 3px;
  width: 80%;

  background: red;
  margin: auto;
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

.video {
  height: 250px;
  width: 350px;
  background: pink;
  margin: 20px;
}
.description-wrapper {
  max-width: 50%;
  margin: 0 20px;
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
  height: 350px;
  width: 250px;
  background: pink;
  margin: 10px;
}
</style>
