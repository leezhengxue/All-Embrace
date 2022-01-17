<template>
  <div>
    <div class="hero">
      <div class="hero-wrapper">
        <div id="frame">
          <input type="radio" name="frame" id="frame1" checked />
          <input type="radio" name="frame" id="frame2" />
          <input type="radio" name="frame" id="frame3" />
          <input type="radio" name="frame" id="frame4" />
          <div id="slides">
            <div id="overflow">
              <div class="inner">
                <div class="frame frame_1">
                  <div class="frame-content">
                    <h2>Slide 1</h2>
                  </div>
                </div>
                <div class="frame frame_2">
                  <div class="frame-content">
                    <h2>Slide 2</h2>
                  </div>
                </div>
                <div class="frame frame_3">
                  <div class="frame-content">
                    <h2>Slide 3</h2>
                  </div>
                </div>
                <div class="frame frame_4">
                  <div class="frame-content">
                    <h2>Slide 4</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
          </div>
          <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="section1">
      <div class="section1_wrapper">
        <h2>Feature and Benefit</h2>
        <div class="scene">
          <div class="carousel_phone"></div>
          <div class="carousel">
            <div class="carousel__cell">test</div>
            <div class="carousel__cell">2</div>
            <div class="carousel__cell">3</div>
            <div class="carousel__cell">4</div>
            <div class="carousel__cell">5</div>
          </div>
        </div>
        <div class="control_button">
          <!-- <div style="text-align: center;"> -->
          <button
            class="previous-button"
            @click="previousbtn"
            style="float:left"
          ></button>
          <button
            class="next-button"
            @click="nextbtn"
            style="float:right"
          ></button>
          <!-- <button class="next-button" @click="nextbtn" style="float:right">
            Next
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    var cellCount = 5;
    var selectedIndex = 0;

    function rotateCarousel() {
      var carousel = document.querySelector(".carousel");
      var prevbtn = document.querySelector(".previous-button");
      var nextbtn = document.querySelector(".next-button");
      var angle = (selectedIndex / cellCount) * -150;
      carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
      if (angle > 59) {
        prevbtn.style.display = "none";
      } else {
        prevbtn.style.display = "inline-block";
      }
      if (angle < -59) {
        nextbtn.style.display = "none";
      } else {
        nextbtn.style.display = "inline-block";
      }
    }
    function previousbtn() {
      console.log("clicked prev");
      selectedIndex--;
      rotateCarousel();
    }
    function nextbtn() {
      console.log("clicked prev");
      selectedIndex++;
      rotateCarousel();
    }
    return {
      previousbtn,
      nextbtn,
    };
  },
};
</script>

<style scoped>
/* HERO SECTION */
.hero {
  background: pink;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-wrapper {
  width: 70%;
}
#frame {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

#frame input[type="radio"] {
  display: none;
}

#frame label {
  cursor: pointer;
  text-decoration: none;
}

#slides {
  padding: 10px;
  border: 5px solid #0f0;
  background: #00f;
  position: relative;
  z-index: 1;
  max-width: calc(100% - 140px);
  margin: 0 auto;
}

#overflow {
  width: 100%;
  overflow: hidden;
}

#frame1:checked ~ #slides .inner {
  margin-left: 0;
}

#frame2:checked ~ #slides .inner {
  margin-left: -100%;
}

#frame3:checked ~ #slides .inner {
  margin-left: -200%;
}

#frame4:checked ~ #slides .inner {
  margin-left: -300%;
}

#slides .inner {
  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 400%;
  line-height: 0;
  height: 300px;
}

#slides .frame {
  width: 25%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}

#slides .frame_1 {
  background: #90c;
}

#slides .frame_2 {
  background: #f90;
}

#slides .frame_3 {
  background: #606;
}

#slides .frame_4 {
  background: #c00;
}

#controls {
  margin: -180px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}

#controls label {
  transition: opacity 0.2s ease-out;
  display: none;
  border: 2px solid red;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  opacity: 0.4;
}

#controls label:hover {
  opacity: 1;
}

#frame1:checked ~ #controls label:nth-child(2),
#frame2:checked ~ #controls label:nth-child(3),
#frame3:checked ~ #controls label:nth-child(4),
#frame4:checked ~ #controls label:nth-child(1) {
  background: url(https://img.icons8.com/material-rounded/24/000000/chevron-right.png)
    no-repeat;
  background-position: center;
  float: right;
  margin: 0 10px 0 0;
  display: block;
}

#frame1:checked ~ #controls label:nth-last-child(1),
#frame2:checked ~ #controls label:nth-last-child(4),
#frame3:checked ~ #controls label:nth-last-child(3),
#frame4:checked ~ #controls label:nth-last-child(2) {
  background: url(https://img.icons8.com/material-rounded/24/000000/chevron-left.png)
    no-repeat;
  background-position: center;
  float: left;
  margin: 0 0 0 10px;
  display: block;
}

#bullets {
  margin: 150px 0 0;
  text-align: center;
}

#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ccc;
  margin: 0 10px;
}

#frame1:checked ~ #bullets label:nth-child(1),
#frame2:checked ~ #bullets label:nth-child(2),
#frame3:checked ~ #bullets label:nth-child(3),
#frame4:checked ~ #bullets label:nth-child(4) {
  background: #444;
}

/* @media screen and (max-width: 1000px) {
  #frame1:checked ~ #controls label:nth-child(2),
  #frame2:checked ~ #controls label:nth-child(3),
  #frame3:checked ~ #controls label:nth-child(4),
  #frame4:checked ~ #controls label:nth-child(1),
  #frame1:checked ~ #controls label:nth-last-child(2),
  #frame2:checked ~ #controls label:nth-last-child(3),
  #frame3:checked ~ #controls label:nth-last-child(4),
  #frame4:checked ~ #controls label:nth-last-child(1) {
    margin: 0;
  }
  #slides {
    max-width: calc(100% - 140px);
    margin: 0 auto;
  }
} */

/* END HERO SECTION */

/* SECTION ONE */
* {
  box-sizing: border-box;
}
.section1 {
  background: pink;
  height: 500px;
  display: flex;
  justify-content: center;
}
.section1_wrapper {
  width: 70%;
}

.scene {
  border: 1px solid #ccc;
  margin: 40px 0;
  position: relative;
  width: 210px;
  height: 300px;
  margin: 40px auto;
  perspective: 1000px;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
  transition: transform 1s;
}
.carousel_phone {
  width: 230px;
  height: 330px;
  position: absolute;
  border: 20px solid black;
  left: -10px;
  top: -10px;
  z-index: 6;
}
.carousel__cell {
  position: absolute;
  width: 190px;
  height: 280px;
  left: 10px;
  top: 10px;
  border: 2px solid black;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-align: center;
  z-index: 5;
}

.carousel__cell:nth-child(9n + 1) {
  background: hsla(0, 100%, 50%, 0.8);
}
.carousel__cell:nth-child(9n + 2) {
  background: hsla(40, 100%, 50%, 0.8);
}
.carousel__cell:nth-child(9n + 3) {
  background: hsla(80, 100%, 50%, 0.8);
}
.carousel__cell:nth-child(9n + 4) {
  background: hsla(120, 100%, 50%, 0.8);
}
.carousel__cell:nth-child(9n + 5) {
  background: hsla(160, 100%, 50%, 0.8);
}

.carousel__cell:nth-child(1) {
  transform: rotateY(0deg) translateZ(365px);
}
.carousel__cell:nth-child(2) {
  transform: rotateY(30deg) translateZ(365px);
}
.carousel__cell:nth-child(3) {
  transform: rotateY(60deg) translateZ(365px);
}
.carousel__cell:nth-child(4) {
  transform: rotateY(-30deg) translateZ(365px);
}
.carousel__cell:nth-child(5) {
  transform: rotateY(-60deg) translateZ(365px);
}

.control_button {
  margin: -210px 0 0 0;
  width: 100%;
  height: 30px;
  z-index: 3;
  position: relative;
}
.control_button button {
  border-radius: 50%;
  border: 2px solid red;
  cursor: pointer;
}
.control_button button:hover {
  border: 2px solid blue;
}
.next-button {
  height: 40px;
  width: 40px;
  background: url(https://img.icons8.com/material-rounded/24/000000/chevron-right.png)
    no-repeat;
  background-position: center;
}
.previous-button {
  height: 40px;
  width: 40px;
  background: url(https://img.icons8.com/material-rounded/24/000000/chevron-left.png)
    no-repeat;
  background-position: center;
}
/* END SECTION ONE */
</style>
