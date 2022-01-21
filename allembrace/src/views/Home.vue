<template>
  <div class="home">
    <!-- <div class="hero">
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
    </div> -->

    <div class="hero">
      <div class="hero-wrapper">
        <div class="hero-image">
          <img src="../assets/all-embrace-hero-introduction.png" />
        </div>
        <div class="context-area">
          <h2>
            Best service providers for your needs
          </h2>
          <h3>
            More Option | Convenient | Efficient
          </h3>

          <router-link class="button-container" to="/contact">
            Learn More
          </router-link>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="section1">
      <div class="section1_wrapper">
        <h2>Feature and Benefit</h2>
        <div style="min-height:450px;">
          <div class="scene">
            <div class="carousel_phone">
              <img src="../assets/all-embrace-phone.png" />
            </div>
            <div class="carousel">
              <div class="carousel__cell"></div>
              <div class="carousel__cell"></div>
              <div class="carousel__cell"></div>
              <div class="carousel__cell"></div>
              <div class="carousel__cell"></div>
            </div>
          </div>

          <div class="control_button">
            <!-- <div style="text-align: center;"> -->
            <button
              class="previous-button"
              @click="previousbtn"
              style="float:left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#f1c40f">
                    <path
                      d="M99.5665,150.5v0c9.5245,0 15.20767,-10.61383 9.92583,-18.54017l-30.6375,-45.95983l30.6375,-45.95983c5.28183,-7.92633 -0.40133,-18.54017 -9.92583,-18.54017v0c-3.98467,0 -7.71133,1.99233 -9.92583,5.3105l-34.15633,51.24167c-3.21067,4.816 -3.21067,11.08683 0,15.90283l34.15633,51.24167c2.2145,3.311 5.94117,5.30333 9.92583,5.30333z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <button class="next-button" @click="nextbtn" style="float:right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#f1c40f">
                    <path
                      d="M79.6145,21.5v0c-9.5245,0 -15.2005,10.61383 -9.91867,18.54017l30.6375,45.95983l-30.6375,45.95983c-5.28183,7.92633 0.39417,18.54017 9.91867,18.54017v0c3.98467,0 7.71133,-1.99233 9.92583,-5.3105l34.15633,-51.24167c3.21067,-4.816 3.21067,-11.08683 0,-15.90283l-34.15633,-51.24167c-2.2145,-3.311 -5.934,-5.30333 -9.92583,-5.30333z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <!-- <button class="next-button" @click="nextbtn" style="float:right">
            Next
          </button> -->
          </div>
        </div>
        <p>
          The All-Embrace app offers consumer a wide range of services category
          and a unique service user experience through the direct and easy
          understanding services that we provide.
        </p>
      </div>
    </div>

    <div class="line"></div>

    <div class="section4">
      <div class="section4-wrapper">
        <div class="app-benefit-image">
          <img src="../assets/all-embrace-appbenefit.png" />
        </div>
        <div class="content-container">
          <h2>
            App Benefit
          </h2>

          <div class="description-wrapper">
            <div class="circle-tick">
              ✓
            </div>
            <div class="content-container-description">
              <h3>
                Convenient
              </h3>
              <h4>
                Consumers are able to select their wanted services through the
                app without having to survey for services. Also, it is easier to
                compare prices with other premium brands
              </h4>
            </div>
          </div>

          <div class="description-wrapper">
            <div class="circle-tick">
              ✓
            </div>
            <div class="content-container-description">
              <h3>
                Efficient
              </h3>
              <h4>
                Through the app, consumers will be able to book their services
                efficiently as our app is available 24 hours.
              </h4>
            </div>
          </div>

          <div class="description-wrapper">
            <div class="circle-tick">
              ✓
            </div>
            <div class="content-container-description">
              <h3>
                Quality
              </h3>
              <h4>
                Top quality service provider for users to choose from.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="section5">
      <div class="section5-wrapper">
        <h2>
          How it works
        </h2>
        <div class="content-container">
          <div class="content-card">
            <div class="content-card-image">
              <img src="../assets/requesting.png" />
            </div>
            <div class="content-card-description">
              <h2>
                1. Requesting
              </h2>
              <h3>
                Looking for any type of services? Search on our app and the list
                of service providers will be listed out for you to choose based
                on your location and the date.
              </h3>
            </div>
          </div>

          <div class="content-card">
            <div class="content-card-image">
              <img src="../assets/selection.png" />
            </div>
            <div class="content-card-description">
              <h2>
                2. Selection
              </h2>
              <h3>
                Select the suitable service provider for you, we will send you
                the quotation after contacting the service provider.
              </h3>
            </div>
          </div>

          <div class="content-card">
            <div class="content-card-image">
              <img src="../assets/payment.png" />
            </div>
            <div class="content-card-description">
              <h2>
                3. Payment
              </h2>
              <h3>
                Once the service is done, payment can be made through the app.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="section6">
      <div class="section6-wrapper">
        <h2>
          Why people are choosing us
        </h2>
        <div class="content-container">
          <div class="content-container-wrapper1">
            <div class="content-card content-card1">
              <div class="logo-image">
                <img src="../assets/vaccination.png" />
              </div>
              <div class="card-description">
                <h3>
                  Vaccination
                </h3>
                <h4>
                  Vaccination of the vendor will be stated on the app when users
                  are choosing their suitable vendor.
                </h4>
              </div>
            </div>

            <div class="content-card content-card2">
              <div class="logo-image">
                <img src="../assets/insurance.png" />
              </div>
              <div class="card-description">
                <h3>
                  Insurance
                </h3>
                <h4>
                  To avoid incidents happening and to protect the service
                  providers, we will implement insurance into every deal to
                  prevent service providers getting hurt from consumers or any
                  injuries in between the process of providing the service.
                </h4>
              </div>
            </div>
          </div>
          <div class="content-container-wrapper2">
            <div class="content-card content-card1">
              <div class="logo-image">
                <img src="../assets/no-scam.png" />
              </div>
              <div class="card-description">
                <h3>
                  No Scams
                </h3>
                <h4>
                  As our platform is a scam-free service provider, we will force
                  and ensure the service provider verifies the identity before
                  becoming one of their merchants on our platform.
                </h4>
              </div>
            </div>

            <div class="content-card content-card2">
              <div class="logo-image">
                <img src="../assets/secure-transaction.png" />
              </div>
              <div class="card-description">
                <h3>
                  Secure Transaction
                </h3>
                <h4>
                  There are generally three types of payment gateway: it
                  includes redirects, checkout site, payment off-site and
                  on-site payment. The payment gateway provides a secure
                  connection to carry out the transactions and verifies, accepts
                  and declines the transactions on behalf of the merchant.
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
.home {
  background: #070808;
}
.hero {
  min-height: 300px;
  width: 100%;
  background: #070808;
}
.hero-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.hero-image {
  max-width: 600px;
}
.hero-image img {
  max-width: 100%;
  height: auto;
}
.context-area {
  text-align: left;
  margin: 20px;
}
.context-area h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 48px;
  font-weight: 200;
  color: #ceae3c;
  max-width: 600px;
}
.context-area h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  font-weight: 200;
  color: white;
  margin: 30px 0;
}
.context-area .button-container {
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
/* HERO SECTION */
/* .hero {
  background: pink;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-wrapper {
  width: 70%;
} */
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
  /* background: #070808; */
  background: #070808;
  min-height: 700px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.section1_wrapper {
  width: 70%;
}

.section1_wrapper h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 36px;
  color: #ceae3c;
  margin: 20px 0;
}
.section1_wrapper p {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  margin: 10px auto;
  font-size: 19px;
  color: white;
  width: 85%;
}
@media (max-width: 1024px) {
  .section1_wrapper p {
    width: 100%;
  }
}
.scene {
  border: 1px solid;
  position: relative;
  width: 210px;
  height: 300px;
  margin: 80px auto;
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
  height: 350px;
  position: absolute;
  /* border: 20px solid black; */
  left: -10px;
  top: -10px;
  z-index: 6;
}
.carousel_phone img {
  width: auto;
  height: 133%;
  position: absolute;
  top: -35px;
  left: 0;
  z-index: 6;
}
.carousel__cell {
  position: absolute;
  width: 190px;
  height: 350px;
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
  /* background: hsla(0, 100%, 50%, 0.8); */
  background-image: url("../assets/all-embrace-interface-1.png");
  background-size: cover;
}
.carousel__cell:nth-child(9n + 2) {
  /* background: hsla(40, 100%, 50%, 0.8); */
  background-image: url("../assets/all-embrace-interface-2.png");
  background-size: cover;
}
.carousel__cell:nth-child(9n + 3) {
  /* background: hsla(80, 100%, 50%, 0.8); */
  background-image: url("../assets/all-embrace-interface-3.png");
  background-size: cover;
}
.carousel__cell:nth-child(9n + 4) {
  /* background: hsla(120, 100%, 50%, 0.8); */
  background-image: url("../assets/all-embrace-interface-4.png");
  background-size: cover;
}
.carousel__cell:nth-child(9n + 5) {
  /* background: hsla(160, 100%, 50%, 0.8); */
  background-image: url("../assets/all-embrace-interface-5.png");
  background-size: cover;
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
  border: 2px solid #ceae3c;
  cursor: pointer;
}
.control_button button:hover {
  border: 2px solid blue;
}
.next-button {
  height: 40px;
  width: 40px;
  background: #070808;
  /* background: url(https://img.icons8.com/material-rounded/24/000000/chevron-right.png)
    no-repeat;
  background-position: center; */
}
.previous-button {
  height: 40px;
  width: 40px;
  background: #070808;
  /* background: url(https://img.icons8.com/material-rounded/24/000000/chevron-left.png)
    no-repeat;
  background-position: center; */
}
/* END SECTION ONE */

.line {
  height: 3px;
  width: 80%;
  border-radius: 10px;
  opacity: 30%;
  background: white;
  margin: auto;
}
.section4 {
  min-height: 300px;
  width: 100%;
  background: #070808;
  display: flex;
  justify-content: center;
}
.section4-wrapper {
  width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.app-benefit-image {
  max-width: 300px;
  margin: 70px;
}

.app-benefit-image img {
  max-width: 100%;
  height: auto;
}
.section4-wrapper .content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 20px 0;
  max-width: 80%;
  color: white;
}
.section4-wrapper .content-container h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 36px;
  color: #ceae3c;
  margin: 20px 0;
}
.section4-wrapper .content-container h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  letter-spacing: 0.15px;
  margin: 10px;
}
.section4-wrapper .content-container h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  letter-spacing: 0.15px;
  font-weight: 200;
  margin: 10px;
}
.section4-wrapper .content-container-description {
  margin-bottom: 10px;
  max-width: 450px;
  text-align: left;
}
.description-wrapper {
  display: flex;
}
.description-wrapper .circle-tick {
  height: 25px;
  min-width: 25px;
  border-radius: 50%;
  background: #ceae3c;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
}

/* ----------- NEXT SECTION -------------------- */
.section5 {
  min-height: 300px;
  width: 100%;
  background: #070808;
  display: flex;
}
.section5-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.section5-wrapper h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 36px;
  color: #ceae3c;
  margin: 20px 0;
}
.section5-wrapper .content-container {
  display: flex;
  flex-direction: row;
}

.section5-wrapper .content-card {
  max-width: 250px;
  margin: 20px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
}
@media (max-width: 870px) {
  .section5-wrapper .content-container {
    flex-direction: column;
  }
  .section5-wrapper .content-card {
    max-width: 500px;
  }
}
.section5-wrapper .content-card h2 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1.15px;
  font-size: 24px;
}
.section5-wrapper .content-card h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.15px;
  font-weight: lighter;
  font-size: 18px;
  color: white;
}

.section5-wrapper .content-card .content-card-image img {
  max-width: 100%;
  height: auto;
}

/* ----------- NEXT SECTION -------------------- */
.section6 {
  min-height: 300px;
  width: 100%;
  background: #070808;
}
.section6-wrapper {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.section6-wrapper h2 {
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 36px;
  color: #ceae3c;
  margin: 20px 0;
}
.section6-wrapper .content-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}

.section6-wrapper .content-container-wrapper1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section6-wrapper .content-container-wrapper2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section6-wrapper .content-container .content-card {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-card1 {
  margin: 10px auto auto 0;
}
.content-card2 {
  margin: 10px 0 auto auto;
}
@media (max-width: 1024px) {
  .content-card1 {
    padding: 20px 0;
  }
  .content-card2 {
    padding: 20px 0;
  }
}
@media (max-width: 750px) {
  .section6-wrapper .content-container {
    flex-wrap: wrap;
  }
  .content-card1 {
    margin: 0;
  }
  .content-card2 {
    margin: 0;
  }
}
.section6-wrapper .content-card .logo-image {
  height: 100px;
  width: 100px;
  background: #ceae3c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section6-wrapper .content-container .content-card .card-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.section6-wrapper .card-description h3 {
  margin: 15px 0;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 18px;
  color: white;
}
.section6-wrapper .card-description h4 {
  margin: 0;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.15px;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  color: white;
}
</style>
