<template>
  <v-content>
    <v-carousel
      class="mini-image-slider"
      :height="miniSliderHeight"
      hide-delimiters
      hide-controls
      :cycle="false"
      v-model="activeSlide"
    >
      <v-carousel-item class="mini-slider-item" v-for="(item, i) in images" :key="i" :src="item"></v-carousel-item>
    </v-carousel>
    <div class="control-buttons">
      <button class="control-button prev-button" @click="nextSlide(-1)">
        <v-icon color="#149778" large>navigate_before</v-icon>
      </button>
      <button class="control-button next-button" @click="nextSlide(1)">
        <v-icon color="#149778" large>navigate_next</v-icon>
      </button>
    </div>
  </v-content>
</template>
<script>
export default {
  props: ["images"],
  data() {
    return {
      miniSliderHeight: 800,
      activeSlide: 0,
      stopNextButton: false,
      stopPrevButton: false
    };
  },
  created(){
    this.checkScreenSize();
  },
  methods: {
    checkScreenSize(){
      if(window.innerWidth < 425){
        this.miniSliderHeight = 540;
      }
    },
    nextSlide(n) {
      if (this.activeSlide == 0 && n == -1) {
        this.activeSlide = this.images.length - 1;
      } else if (this.activeSlide == this.images.length) {
        this.activeSlide = 1;
      } else {
        this.activeSlide += n;
      }
    }
  }
};
</script>
<style scoped>
.mini-image-slider {
  width: 700px;
}
.control-buttons {
  position: relative;
  top: -60px;
  margin-left: 25px;
}
.control-button {
  outline: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  background-color: #fff;
  margin: 2px;
}
.control-button:hover {
  opacity: 0.9;
}
.control-button:active {
  opacity: 1;
}
@media screen and (max-width: 1919px) and (min-width: 1366px){
  .mini-image-slider{
    width: 540px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 760px){
  .mini-image-slider{
    width: 560px;
  }
}
</style>