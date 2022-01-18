<template>
  <div>
    <div class="section4">
      <div class="section4-wrapper">
        <div class="app-benefit-image">
          image
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
              <h3>
                Consumers are able to select their wanted services through the
                app without having to survey for services. Also, it is easier to
                compare prices with other premium brands
              </h3>
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
              <h3>
                Through the app, consumers will be able to book their services
                efficiently as our app is available 24 hours.
              </h3>
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
              <h3>
                Top quality service provider for users to choose from.
              </h3>
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
              image
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
              image
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
              image
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
                image/logo
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
                image/logo
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
                image/logo
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
                image/logo
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
  name: "Home2",
  components: {},
  setup() {},
};
</script>

<style scoped>
.line {
  height: 3px;
  width: 80%;
  background: red;
  margin: auto;
}
.section4 {
  min-height: 300px;
  width: 100%;
  background: pink;
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
  height: 400px;
  width: 300px;
  background: orange;
  margin: 20px;
}
.section4-wrapper .content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  max-width: 60%;
}
.section4-wrapper .content-container h3,
h4 {
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
  background: yellow;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

/* ----------- NEXT SECTION -------------------- */
.section5 {
  min-height: 300px;
  width: 100%;
  background: pink;
  display: flex;
}
.section5-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.section5-wrapper h2 {
  width: 100%;
}
.section5-wrapper .content-container {
  display: flex;
  flex-direction: row;
}
@media (max-width: 750px) {
  .section5-wrapper .content-container {
    flex-direction: column;
  }
}
.section5-wrapper .content-card {
  width: 200px;
  margin: 20px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
}
.section5-wrapper .content-card .content-card-image {
  height: 200px;
  width: 200px;
  background: orange;
}

/* ----------- NEXT SECTION -------------------- */
.section6 {
  min-height: 300px;
  width: 100%;
  background: pink;
}
.section6-wrapper {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  margin: 0 auto 0 0;
}
.content-card2 {
  margin: 0 0 0 auto;
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
  background: orange;
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
}
.section6-wrapper .card-description h4 {
  margin: 0;
}
</style>
