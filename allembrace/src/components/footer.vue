<template>
  <div class="footerbar">
    <div class="footer-wrapper">
      <section>
        <div class="scroll text1">
          <div class="font">
            - Contact Us <span>- Contact Us </span>- Contact Us
            <span>- Contact Us </span>- Contact Us <span>- Contact Us </span>-
            Contact Us <span>- Contact Us </span> - Contact Us
            <span>- Contact Us </span>
          </div>
        </div>
      </section>
      <div class="footer-content">
        <div class="footer-content-slot-1">
          <div><img class="logo" src="../assets/AE-W.png" /></div>
          <div>
            <!-- <h3>About us</h3> -->
            <!-- <p>
              Simplified,<br />
              Reliable, <br />Secure.
            </p> -->
          </div>
        </div>
        <div class="footer-content-slot-2">
          <h3>Social Media</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/all-embrace-warehouse-347459226/"
              target="_blank"
              >LinkedIn</a
            >
          </p>
          <p>
            <a
              href="https://www.facebook.com/AllEmbraceWarehouse"
              target="_blank"
              >Facebook</a
            >
          </p>
          <p>
            <a
              href="https://www.instagram.com/allembrace_warehouse/"
              target="_blank"
              >Instagram</a
            >
          </p>
        </div>
        <div class="footer-content-slot-3">
          <h3>Office address</h3>
          <p>
            15, Jalan 34b, Kampung Cheras Baru, 56100 Kuala Lumpur, Selangor
          </p>
        </div>
        <div class="footer-content-slot-4">
          <h3>Contact</h3>
          <p>
            All-Embrace Sdn. Bhd.<br />
            Ericsia@allembrace.my<br />
            <a href="https://wa.link/buffw6" target="_blank">+60 14 660 1574</a>
          </p>
          <img class="qrlogo" src="../assets/whatsapp_qr.png" />
        </div>

        <div class="line"></div>
        <div class="footer-copyright">
          <h5>Copyright © 2021.</h5>
          <h5>All-Embrace Warehouse Sdn. Bhd.</h5>
          <h5>All rights reserved</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerbar",
  props: {},
};
</script>

<style scoped>
.footerbar {
  display: block;
  width: 100%;
  background: #070808;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #231f20;
  padding-top: 50px;
}

.footerbar h3 {
  color: white;
}
.footerbar p {
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
  text-align: justify;
}
.footer-wrapper {
  width: 100%;
  margin: auto;
}
.logo {
  height: 200px;
  width: auto;
  padding: 5px;
}
.qrlogo {
  height: 100px;
  width: auto;
  padding: 5px;
}
section {
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.font {
  font-family: "Montserrat", sans-serif;
  color: #ceae3c;
  font-size: 60px;
}
section .scroll {
  width: 100%;
  display: flex;
}
section .scroll div {
  white-space: nowrap;
  font-weight: 900;
  text-transform: uppercase;
  animation: animate 5s linear infinite;
}
section.scroll div:nth-child(2) {
  animation: animate2 5s linear infinite;
}
@keyframes animate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%);
  }
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "Raleway", sans-serif;
}
.footer-content-slot-1 {
  font-size: 15px;
  text-align: left;
  padding: 0 20px;
  width: 200px;
}
.footer-content-slot-1 p {
  text-align: left;
}
.footer-content-slot-2 {
  font-size: 15px;
  width: 200px;
  padding: 20px;
  text-align: left;
}
.footer-content-slot-2 a {
  text-decoration: none;
  color: white;
}
.footer-content-slot-3 {
  font-size: 15px;
  text-align: left;
  padding: 20px;
}
.footer-content-slot-3 p {
  width: 200px;
  text-align: left;
  color: white;
}
.footer-content-slot-4 {
  font-size: 15px;
  text-align: left;
  padding: 20px;
}
.footer-content-slot-4 p {
  width: 200px;
  text-align: left;
  color: white;
}
.footer-content-slot-4 a {
  text-decoration: none;
  color: white;
}

.line {
  background: white;
  height: 1.5px;
  width: 90%;
  margin: 10px 0 30px 0;
}
.footer-copyright {
  width: 85%;
  padding: 0 0 20px 0;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}
.footer-copyright h5 {
  padding-right: 10px;
  color: white;
}
</style>
