<template>
  <v-content class="hero-header">
    <div class="hero-content">
      <img src="../../assets/hero-text.png" alt="hero-text" class="hero-text">
      <div class="detail">
        <!-- //?: Кнопка вызывает скролл к "Качество в деталях" -->
        <button class="header_detail-button" @click="goTo">Подробнее</button>
      </div>
    </div>
  </v-content>
</template>
<script>
export default {
  methods: {
    goTo(){
      let options = {
        duration: 800,
        offset: -40,
        easing: "easeInOutCubic"
      }
      this.$vuetify.goTo('#features', options)
    }
  }
};
</script>

<style scoped>
.hero-header {
  width: 100vw;
  height: 110vh;
  background-image: url("../../assets/header-bg.jpg");
  background-size: cover;
  background-position: center;
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.detail {
  text-align: center;
}
.header_detail-button {
  outline: none;
  background-color: #fff;
  width: 200px;
  height: 60px;
  border: 1px solid #d12030;
  font-size: 1.5rem;
  font-weight: 500;
  color: #d12030;
  margin-top: 50px;
}
.header_detail-button:hover{
  background-color: #d12030;
  color: #fff;
  border-color: #fff;
  transition: .3s;
}
.header_detail-button:active {
  background-color: #f1f1f1;
}
@media screen and (max-width: 320px){
  .hero-text{
    width: 300px;
  }
}
</style>
