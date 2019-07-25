<template>
  <v-app>
    <hero-header></hero-header>

    <div class="gs-container">
      <navigation></navigation>
      <about-complex></about-complex>

      <about-location></about-location>

      <about-features></about-features>
      <about-features-slider></about-features-slider>

      <about-technology></about-technology>
      <about-technology-slider></about-technology-slider>

      <about-thoughtful-space></about-thoughtful-space>

      <apartment-layouts></apartment-layouts>
      <send-request-form1></send-request-form1>

      <about-interior-solutions></about-interior-solutions>

      <send-request-form2></send-request-form2>

      <super-footer></super-footer>
    </div>
  </v-app>
</template>
<script>
import HeroHeader from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import AboutComplex from "./components/main/about-complex/AboutComplex";
import AboutLocation from "./components/main/about-location/AboutLocation";
import AboutFeatures from "./components/main/about-features/AboutFeatures";
import AboutFeaturesSlider from "./components/main/about-features/slider/AboutFeaturesSlider";
import AboutTechnology from "./components/main/about-technology/AboutTechnology";
import AboutTechnologySlider from "./components/main/about-technology/slider/AboutTechnologySlider";
import AboutThoughtfulSpace from "./components/main/about-thoughtful-space/AboutThoughtfulSpace";
import ApartmentLayouts from "./components/main/apartment-layouts/ApartmentLayouts";
import SendRequestForm1 from "./components/main/send-request-form1/SendRequestForm1";
import AboutInteriorSolutions from "./components/main/about-interior-solutions/AboutInteriorSolutions";
import SendRequestForm2 from "./components/main/send-request-form2/SendRequestForm2";
import SuperFooter from "./components/footer/Footer";
export default {
  components: {
    HeroHeader,
    Navigation,
    AboutComplex,
    AboutLocation,
    AboutFeatures,
    AboutFeaturesSlider,
    AboutTechnology,
    AboutTechnologySlider,
    AboutThoughtfulSpace,
    ApartmentLayouts,
    SendRequestForm1,
    AboutInteriorSolutions,
    SendRequestForm2,
    SuperFooter
  }
};
</script>
<style>
#app {
  font-family: "Rubik", sans-serif;
}
.gs-container {
  width: 1800px;
  position: relative;
  left: 60px;
  right: 60px;
}

/*//? TITLE BLOCK */
.title-block {
  margin-top: 75px;
  margin-bottom: 85px;
  text-align: center;
  color: #2c2b2d;
}
.title-block_subtitle {
  color: #999999;
  font-size: 1.5rem;
  font-weight: normal;
}
.title-block_title {
  margin-top: 30px;
  font-size: 3rem;
}
.title-block_text {
  margin-top: 30px;
  font-size: 1.25rem;
}
/* //? для > 1920 */
@media screen and (min-width: 1925px) {
  .gs-container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 1919px) {
  .gs-container {
    width: 1320px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (max-width: 1366px) {
  .gs-container {
    width: 1320px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (max-width: 1024px){
  .gs-container {
    max-width: 100%;
    left: 0;
    right: 0;
    transform: translateX(0);
  }
}
@media screen and (max-width: 735px){
  .gs-container {
    max-width: 100%;
    left: 0;
    right: 0;
    transform: translateX(0);
  }
  .title-block {
    margin-top: 75px;
    margin-bottom: 85px;
    text-align: center;
    color: #2c2b2d;
  }
  .title-block_subtitle {
    color: #999999;
    font-size: 1.2rem;
    font-weight: normal;
  }
  .title-block_title {
    margin-top: 30px;
    font-size: 1.6rem;
  }
  .title-block_text {
    margin-top: 30px;
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 425px){
  .title-block {
    margin-top: 75px;
    margin-bottom: 85px;
    text-align: center;
    color: #2c2b2d;
  }
  .title-block_subtitle {
    color: #999999;
    font-size: 1.2rem;
    font-weight: normal;
  }
  .title-block_title {
    margin-top: 30px;
    font-size: 1.6rem;
  }
  .title-block_text {
    margin-top: 30px;
    font-size: 1.1rem;
  }
}
</style>
<style src="./components/working-components/about-block.css"></style>
