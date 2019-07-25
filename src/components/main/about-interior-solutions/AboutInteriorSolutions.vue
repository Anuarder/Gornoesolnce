<template>
    <v-content>
        <div class="about-interior-solutions-page">
            <div class="title-block">
                <h4 class="title-block_subtitle">
                    Особенности
                </h4>
                <h1 class="title-block_title">
                    Качество в деталях
                </h1>
                <p class="title-block_text">
                    «Горное Cолнце» -  это прямая геометрия, использование гладкого металла и стекла, <br>
                    рациональное использование внутреннего пространства и современные строительные <br>
                    материалы и технологии. Дом просто продуман до мелочей!
                </p>
            </div>
            <div class="about-interior-solutions about-block_wrapper">
                <div class="mini-slider_block mini-slider_block-desktop">
                    <mini-slider :images="images1"></mini-slider>
                </div>
                <div class="about-block">
                    <div class="about-block_subtitle">
                        Интерьерные решения
                    </div>
                    <div class="about-block_title">
                        <h1>Чистовая отделка <br>
                            европейского качества</h1>
                    </div>
                    <div class="about-block_content">
                        <p>
                            У нас никто не будет сверлить за стеной с ночи и до утра - все <br>
                            квартиры в чистовой отделке. При этом мы гарантируем качество! <br>
                            Большинство строительных и отделочных материалов производятся <br>
                            в Италии, Франции, Германии и других европейских странах.
                        </p>
                    </div>
                </div>
                <!-- //? Убрал слайдер для мобилок-->
                <div class="mini-slider_block mini-slider_block-mobile">
                    <img src="https://pp.userapi.com/c845020/v845020481/1c5f5c/hK97uz_ExvY.jpg" alt="image">
                </div>
            </div>
            <div class="about-interior-solutions about-block_wrapper">
                <div class="about-block">
                    <div class="about-block_subtitle">
                        Интерьерные решения
                    </div>
                    <div class="about-block_title">
                        <h1>Авторский дизайн на заказ</h1>
                    </div>
                    <div class="about-block_content">
                        <p>
                            Если вы хотите сэкономить свое время и душевное <br>
                            равновесие, при покупке квартиры вы можете дополнительно <br>
                            заказать ремонт исключительного качества: авторский <br>
                            дизайн интерьера, строительные и отделочные материалы, <br>
                            сантехника и кухни европейского качества
                        </p>
                    </div>
                </div>
                <div class="mini-slider_block mini-slider_block-desktop">
                    <mini-slider :images="images2"></mini-slider>
                </div>
                <!-- //? Убрал слайдер для мобилок-->
                <div class="mini-slider_block mini-slider_block-mobile">
                    <img src="https://sun9-29.userapi.com/c845020/v845020481/1c5f6c/T_nVXW6qjwE.jpg" alt="image">
                </div>
            </div>

            <!-- //?О застройщике -->

            <div class="title-block">
                <h1 class="title-block_title">
                    О застройщике
                </h1>
                <p class="title-block_text">
                    Застройщик жилого комплекса «Горное Солнце» - жилищно-строительный кооператив «Таулы Аспан». <br>
                    Компания занимается строительством жилья с 1990-х годов. В истории их проектов жилые комплексы <br>
                    «White Fort» и «Фаворит», частные коттеджи и коммерческие объекты.
                </p>
            </div>
        </div>
    </v-content>
</template>
<script>
import MiniSlider from '../../working-components/MiniSlider'
export default {
    components:{
        MiniSlider
    },
    data(){
        return{
            images1: [
                'https://pp.userapi.com/c845020/v845020481/1c5f5c/hK97uz_ExvY.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5f7c/QVTT7Av8MR4.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5f84/23LZlQE3pMU.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5f9c/jTRWoC4f0Ds.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fac/Ww9RsCY3Upw.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fb4/u0ZZD0ZFCko.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fc4/PPme8w1cpzU.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fd4/nE2trOpZdvs.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fe4/cIRmMUEGjjg.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5ff4/muEZxEZxqpY.jpg',
            ],
            images2: [
                'https://sun9-29.userapi.com/c845020/v845020481/1c5f6c/T_nVXW6qjwE.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5f74/ci_0Nv8fp2w.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5f94/HVfJJZq_BZI.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fa4/Tg36Kg-EVoo.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fbc/r7ihQA39Pww.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fcc/X2WI0HNRyCg.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fdc/pYRShHioMSY.jpg',
                'https://pp.userapi.com/c845020/v845020481/1c5fec/-qO0L_Seuhc.jpg',
            ],
        }
    }
}
</script>
<style scoped>
@media screen and (max-width: 425px){
    .about-block{
        height: 600px;
    }
}
</style>
