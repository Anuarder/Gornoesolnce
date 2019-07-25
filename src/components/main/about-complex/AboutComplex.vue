<template>
    <v-content id="aboutComplex">
        <div class="about-complex about-block_wrapper">
            <div class="mini-slider_block">
                <img src="https://pp.userapi.com/c845020/v845020481/1c5f5c/hK97uz_ExvY.jpg" alt="image">
            </div>
            <div class="about-block">
                <div class="about-block_subtitle">
                    О комплексе
                </div>
                <div class="about-block_title">
                    <h1>Создавая ваше настроение</h1>
                </div>
                <div class="about-block_content" v-if="!showMore">
                    <h4>Жилой комплекс «Горное Солнце» – дом, где все сделано с умом.</h4>
                    <div class="about-block_icons">
                        <div class="about-block_icon">
                            <img src="/img/about-complex/icons/ic1.png" alt="icon">
                            <p>Контроль</p>
                        </div>
                        <i class="fas fa-plus"></i>
                        <div class="about-block_icon">
                            <img src="/img/about-complex/icons/ic2.png" alt="icon">
                            <p>Сейсмостойкость</p>
                        </div>
                        <i class="fas fa-plus"></i>
                        <div class="about-block_icon">
                            <img src="/img/about-complex/icons/ic4.png" alt="icon">
                            <p>Экотехнологии</p>
                        </div>
                        <i class="fas fa-plus"></i>
                        <div class="about-block_icon">
                            <img src="/img/about-complex/icons/ic3.png" alt="icon">
                            <p>Надежность</p>
                        </div>
                    </div>
                    <div class="about-block_icons-mobile">
                        <div class="about-block_icons-mobile_item">
                            <div class="about-block_icon">
                                <img src="/img/about-complex/icons/ic1.png" alt="icon">
                                <p>Контроль</p>
                            </div>
                            <div class="about-block_icon">
                                <img src="/img/about-complex/icons/ic2.png" alt="icon">
                                <p>Сейсмостойкость</p>
                            </div>
                        </div>
                        <div class="about-block_icons-mobile_item">
                            <div class="about-block_icon">
                                <img src="/img/about-complex/icons/ic4.png" alt="icon">
                                <p>Экотехнологии</p>
                            </div>
                            <div class="about-block_icon">
                                <img src="/img/about-complex/icons/ic3.png" alt="icon">
                                <p>Надежность</p>
                            </div>
                        </div>
                    </div>
                    <button class="detail-button" @click="showMore = true">Подробнее</button>
                </div>
                <transition name="fade">
                    <div v-if="showMore" class="about-block_content">
                        <p>Обратите внимание, «Горное Солнце» - это уникальное здание, 
                            построенное с применением современных материалов и технологий 
                            в соответствии с мировыми стандартами строительства, экологической 
                            безопасности и энергоэффективности. </p>
                        <p>Жилой комплекс находится в одном из лучших и 
                            экологически чистых районов Алматы, состоит из 
                            139 квартир и занимает общую площадь в 27 859 м2. 
                            Дом уже сдан в эксплуатацию. </p>
                        <p>В «Горном Солнце» всего четыре этажа, а это значит, 
                            что здесь вас и ваших близких ждет минимум соседей, 
                            уединение, уют и всегда хорошее настроение! </p>
                        <p>Акт приемки объекта в эксплуатацию №1537 от 21.12.17</p>
                    </div>
                </transition>
            </div>
        </div>
    </v-content>
</template>
<script>
export default {
    data(){
        return{
            showMore: false,
        }
    }
}
</script>
<style scoped>
.about-block_icons{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    margin-top: 50px;
}
.about-block_icon{
    text-align: center;
}
.about-block_icon p{
    margin-top: 5px;
}
/*//? Для отступа от картинки (картинка немного меньше) */
.about-block_icon:last-child p{
    padding-top: 8px; 
}

/* //? Анимация появления текста */
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
