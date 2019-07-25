<template>
    <v-content>
        <div class="about-location about-block_wrapper">
            <div class="mini-slider_block mini-slider_block-mobile">
                <img src="https://pp.userapi.com/c845020/v845020481/1c5ffc/TbFidIcj1Ps.jpg" alt="image">
            </div>
            <div class="about-block">
                <div class="about-block_subtitle">
                    Месторасположение
                </div>
                <div class="about-block_title">
                    <h1>Необходимое - рядом</h1>
                </div>
                <!--//? CONTENT SLIDER -->
                <v-carousel 
                    hide-controls 
                    hide-delimiters 
                    height="500"
                    interval="5000"
                    class="about-block_content-slider"
                    v-model="contentSlider">
                    <!-- //? Размер слайдера 500 -->
                    <v-carousel-item>
                        <div class="about-block_content">
                            <h4>
                                Это современный район с развитой инфраструктурой. Поблизости вы сможете найти бизнес-центры, 
                                торгово-развлекательные комплексы и детские заведения. 
                                <br><br>
                                Посмотрите, рядом - частная школа «Мирас», международная школа «Haileybury», детские сады – «Маленький гений», 
                                «Мурагер» и британский детский сад «Tender Care». 
                                <br><br>
                                По соседству Научный центр педиатрии и детской хирургии, недалеко находится городская поликлиника,
                                парк им. Огневого, торгово-развлекательные центры Mega Almaty и Esentai Mall.
                            </h4>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item>
                        <div class="about-block_content">
                            <h4>Жилой комплекс «Горное Солнце» расположен в 
                                <br> микрорайоне Баганашыл, 
                                выше проспекта Аль-Фараби.  
                                <br>Там, где есть все для комфортной жизни!
                            </h4>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item>
                        <div class="about-block_content">
                            <h4>
                                Перед «Горным Солнцем» располагается большой хвойный <br>
                                сквер, который отделяет его от проспекта Аль-Фараби. <br>
                                Из большинства окон комплекса открывается живописный <br>
                                вид на горы Заилийского Алатау и городские достопримечательности.
                            </h4>
                        </div>
                    </v-carousel-item>
                </v-carousel>
                <div class="pagination">
                    <div
                        v-for="(item, index) in 3" 
                        :key="index"
                        class="pagination-line"
                        @click="goToSlide(index)">
                        <div
                            :class="nextSlide == index ? 'activeIndexAnimate' : ''"
                            class="pagination-line_progress">
                        </div>
                    </div>
                </div>
                <button class="detail-button" @click="openMap">Открыть карту</button>
            </div>
            <div class="mini-slider_block mini-slider_block-desktop">
                <img src="https://pp.userapi.com/c845020/v845020481/1c5ffc/TbFidIcj1Ps.jpg" alt="image">
            </div>
        </div>
        <div id="yandexMap" class="mt-3" >
            <transition name="fade">
                <yandex-map v-if="showMap"></yandex-map>
            </transition>
        </div>
    </v-content>
</template>
<script>
export default {
    components:{
        YandexMap: () => import('./yandexMap/YandexMap') // Lazy loading 
    },
    data(){
        return{
            showMap: false,
            contentSlider: 0,
        }
    },
    computed:{
        nextSlide(){
            return this.contentSlider
        }
    },
    methods:{
        goToSlide(index){
            this.contentSlider = index;
        },
        openMap(){
            this.showMap = true;
            let options = {
                duration: 1000,
                offset: 0,
                easing: "easeInOutCubic"
            }
            this.$vuetify.goTo('#yandexMap', options);
            
        }
    }
}
</script>
<style scoped>
.about-block_content h4{
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 400;
}
.about-block_content{
    width: 540px;
}
.about-block_content-slider{
    box-shadow: none;
}

/* //? PAGINATION */

.pagination{
    display: flex;
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
/* Анимация для карты */
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 425px){
    .pagination{
        margin-top: 100px;
    }
}
</style>
