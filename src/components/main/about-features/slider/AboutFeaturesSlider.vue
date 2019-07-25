<template>
  <div class="about-features-slider-page">
    <v-carousel 
        hide-controls 
        hide-delimiters 
        class="about-features-slider" 
        v-model="activeSlideIndex"
        interval="5000">
      <v-carousel-item class="about-features-slider_item">
        <div class="about-features-slider_content">
            <h4>Контроль</h4>
            <p>
                Процесс застройки контролировала команда <br>
                высококвалифицированных инженеров из России. <br>
                Это 100% гарантия того, что здание возведено в строгом <br>
                соответствии со всеми стандартами качества и безопасности.
            </p>
        </div>
        <svgPicture 
            class="about-features-slider_image" 
            name="svg-control" 
            :value="activeSlideIndex">
        </svgPicture>
      </v-carousel-item>
      <v-carousel-item class="about-features-slider_item">
        <div class="about-features-slider_content">
            <h4>Сейсмостойкость</h4>
            <p>
                Благодаря прочному фундаменту и железобетонной <br>
                конструкции, жилой комплекс «Горное Солнце» <br>
                обладает сейсмостойкостью в 9 баллов. <br>
                Подтверждено результатами проверки!
            </p>
        </div>
        <svgPicture 
            class="about-features-slider_image" 
            name="svg-seismic" 
            :value="activeSlideIndex">
        </svgPicture>
      </v-carousel-item>
      <v-carousel-item class="about-features-slider_item">
        <div class="about-features-slider_content">
            <h4>Надежность</h4>
            <p>
                В строительстве стен применялся современный, максимально <br>
                 практичный материал – полистиролбетон. У него высокие <br>
                 показатели несущих характеристик, теплоизоляции, <br>
                 огнезащиты, шумопоглощения и морозоустойчивости. <br>
            </p>
        </div>
        <svgPicture 
            class="about-features-slider_image" 
            name="svg-reliability" 
            :value="activeSlideIndex">
        </svgPicture>
      </v-carousel-item>
      <v-carousel-item class="about-features-slider_item">
        <div class="about-features-slider_content">
            <h4>Экотехнологии</h4>
            <p>
                В квартирах комплекса установлены низкоэмиссионные <br>
                стеклопакеты – i-стекло. Это - высокая светопропускаемость, <br>
                прозрачность и теплоизоляция. Вы будете под защитой от <br>
                вредных излучений, а в квартире дольше сохранится <br>
                комфортная температура.
            </p>
        </div>
        <svgPicture 
            class="about-features-slider_image" 
            name="svg-ecotech" 
            :value="activeSlideIndex">
        </svgPicture>
      </v-carousel-item>
    </v-carousel>
    <div class="pagination">
        <div
            v-for="(item, index) in 4"
            :key="index"
            class="pagination-line"
            @click="goToSlide(index)">
            <div
                :class="nextSlide == index ? 'activeIndexAnimate' : ''"
                class="pagination-line_progress">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import svgPicture from "./SvgPicture";

export default {
    components: {
        svgPicture
    },
    data() {
        return {
            activeSlideIndex: 0,
        }
    },
    computed: {
        nextSlide() {
            return this.activeSlideIndex
        }
    },
    methods: {
        goToSlide(index) {
            this.activeSlideIndex = index;
        }
    }
};
</script>
<style scoped>
.about-features-slider-page{
    margin-top: 85px;
}

.about-features-slider{
    background-color: #149778;
}
.about-features-slider_item{
    display: flex;
    position: relative;
}
.about-features-slider_content{
    position: absolute;
    left: 97px;
    top: 104px;
    color: #fff;
}
.about-features-slider_content h4{
    font-size: 3rem;
}
.about-features-slider_content p{
    margin-top: 30px;
    font-size: 1.5rem;
}
.about-features-slider_image{
    position: absolute;
    right: 328px;
    top: 81px;
}

/* //? PAGINATION */

.pagination{
    display: flex;
    margin-top: -85px;
    margin-bottom: 85px; /*//? для компенсации пробела*/
    margin-left: 97px;
}
.pagination-line{
    cursor: pointer;
	position: relative;
    width: 60px;
    height: 2px;
    background-color: #fff;
    margin-right: 5px;
}

.pagination-line_progress {
	background-color: #2c2b2d;
	height: 3px;
	position: absolute;
	left: 0;
	width: 0%;
}
.activeIndex {
	background-color: #2c2b2d;
	width: 100%;
}
.activeIndexAnimate {
	background-color: #2c2b2d;
	animation: progressAnimation 5s linear infinite;
}
@keyframes progressAnimation {
	to {
		width: 100%;
	}
}
@media screen and (max-width: 1919px) and (min-width: 1366px){
    .about-features-slider_image{
        right: 200px;
        top: 81px;
    }
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    .about-features-slider_image{
        top: -30px;
        right: 45px;
    }
}
@media screen and (max-width: 767px){
    .about-features-slider_content{
        position: absolute;
        left: 20px;
        top: 80px;
        color: #fff;
    }
    .about-features-slider_content h4{
        font-size: 1.4rem;
    }
    .about-features-slider_content p{
        margin-top: 30px;
        font-size: 1.1rem;
    }
    .about-features-slider_image{
        position: absolute;
        right: 50px;
        top: -80px;
    }
}
</style>