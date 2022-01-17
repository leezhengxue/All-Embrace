<template>
  <div>
    <div class="newsroom">
      <div class="hero">
        <div class="hero-wrapper">
          <h1>Newsroom</h1>
        </div>
      </div>
      <div class="section1">
        <div class="section1-wrapper">
          <div class="news-card">
            <div class="news-card-wrapper">
              <div class="news-image">
                image
              </div>
              <div class="news-description">
                <h2>ARTICLE TITLE</h2>
                <h4>
                  Lorem ipsum dolor sit amet. Dolor velit vel voluptas omnis et
                  placeat deserunt! Est ullam consequuntur non recusandae
                  deserunt qui corrupti odit At illo consequuntur qui enim
                  blanditiis est Quis officia aut voluptatem unde. Sed
                  voluptates impedit et voluptatem saepe non quia voluptatum.
                </h4>
                <h4>
                  Date
                </h4>
              </div>
            </div>
          </div>
          <div class="news-card">
            <div class="news-card-wrapper">
              <div class="news-image">
                image
              </div>
              <div class="news-description">
                <h2>ARTICLE TITLE</h2>
                <h4>
                  Lorem ipsum dolor sit amet. Dolor velit vel voluptas omnis et
                  placeat deserunt! Est ullam consequuntur non recusandae
                  deserunt qui corrupti odit At illo consequuntur qui enim
                  blanditiis est Quis officia aut voluptatem unde. Sed
                  voluptates impedit et voluptatem saepe non quia voluptatum.
                </h4>
                <h4>
                  Date
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsroom",
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
/* .hero-wrapper {
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-end;
} */
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
.news-card {
  background: red;
  min-height: 250px;
  width: 100%;
  margin: 20px;
}
.news-card-wrapper {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.news-image {
  height: 250px;
  min-width: 250px;
  background: pink;
}
.news-description {
  margin: 0 25px 0 25px;
  text-align: left;
}

@media (max-width: 850px) {
  .news-card {
    height: 100%;
    width: 250px;
    margin: 20px;
  }
  .news-card-wrapper {
    flex-wrap: wrap;
  }
}
</style>
