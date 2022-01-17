<template>
  <!-- <div class="article">
    <h1>This is an ARTICLE PAGE</h1>
  </div> -->

  <div class="newspage">
    <div class="header-image">
      image
    </div>
    <div class="content-area">
      <div class="content-area-wrapper">
        <div class="news-content">
          <div class="news-content-wrapper">
            <h1>
              Article title
            </h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              Ut venenatis blandit sodales. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam mauris purus, lacinia quis luctus ut, accumsan ac tellus.
              Nullam sagittis et turpis at finibus. Pellentesque aliquam ligula
              et rhoncus cursus. Sed sagittis suscipit mattis. Proin lorem nibh,
              venenatis id ultricies in, rutrum sit amet orci.
            </p>

            <p>
              Nunc ut lectus et tortor tristique congue nec non augue. Nam id
              dui quis risus varius scelerisque. Etiam nec lectus eu leo iaculis
              pulvinar non ornare eros. Praesent est eros, pellentesque molestie
              ligula vel, consequat dictum nisl. Donec massa nulla, vulputate
              vel massa vehicula, interdum posuere ex. Pellentesque varius porta
              lorem, vitae lobortis metus maximus ac. Maecenas gravida semper
              massa, quis faucibus elit egestas vel. Nullam ornare ex laoreet
              turpis euismod viverra. Praesent quis consectetur nulla. Quisque a
              dapibus tortor. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae;
            </p>

            <h3>
              Published in 12/01/2022
            </h3>
          </div>
        </div>
        <div class="other-news-section">
          <div class="other-news-section-wrapper">
            <h2>
              More Article
            </h2>

            <div class="other-news-card">
              <div class="otheer-news-card-wrapper">
                <div class="other-news-image">
                  image
                </div>
                <div class="description-wrapper">
                  <h3>
                    Article title
                  </h3>
                  <h4>
                    12/01/2022
                  </h4>
                  <p>
                    summary of the article will be written here. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Vivamus tempus
                    suscipit diam in pellentesque. Pellentesque non odio ac enim
                    sollicitudin bibendum vel quis lacus. Vivamus consectetur
                    tellus ligula, lacinia molestie nulla convallis eu. Fusce
                    vel lorem enim. Quisque semper viverra arcu id gravida.
                  </p>
                </div>
              </div>
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
  name: "Article1",
  components: {},
  setup() {},
};
</script>

<style scoped>
.newspage {
  height: 100%;
  width: 100%;
  background: white;
}
.header-image {
  height: 300px;
  width: 100%;
  background: orange;
}
.content-area {
  min-height: 600px;
  width: 100%;
}

.other-news-section {
  min-height: 450px;
  width: 100%;
  background: pink;
}

.other-news-card {
  height: 500px;
  width: 250px;
  background: orange;
  padding: 10px;
  margin: 10px;
}

.other-news-image {
  height: 200px;
  width: 100%;
  background: yellow;
}
</style>
