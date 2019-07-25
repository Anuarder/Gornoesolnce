<template>
    <v-content id="features">
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
        <div class="features-blocks">
            <div class="features-block">
                <div class="features-items">
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/1.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Чистый воздух</h3>
                            <p>
                                Близость к горам и отсутствие рядом с жилым комплексом
                                высотных зданий обеспечивают идеальную циркуляцию 
                                воздушных потоков. Это позволит вам и вашей семье 
                                наслаждаться свежим горным бризом круглые сутки! 
                            </p>
                        </div>
                    </div>
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/2.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Безопасность</h3>
                            <p>
                                По всему периметру жилого комплекса работает система 
                                видеонаблюдения и служба охраны - они контролируют 
                                пропуск транспорта и гостей на территорию комплекса. 
                                Теперь вы и ваши близкие всегда будете в безопасности!
                            </p>
                        </div>
                    </div>
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/3.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Собственная коммунальная служба</h3>
                            <p>
                                Квалифицированная коммунальная служба жилого 
                                комплекса оперативно поможет вам в любой ситуации.
                                Все технические системы находятся под мониторингом
                                завода-изготовителя и обслуживаются нашими
                                специалистами.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="features-block">
                <div class="features-items">
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/4.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Удобный паркинг</h3>
                            <p>
                                Подземный двухуровневый паркинг на 207 мест имеет доступ
                                к лифту, а также автоматизированный въезд и выезд.
                                Места хватит всем: вам и вашим гостям.
                            </p>
                        </div>
                    </div>
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/5.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Инвентарные помещения</h3>
                            <p>
                                В подземном паркинге есть инвентарные помещения, где вы 
                                сможете хранить все предметы, которые занимают лишнее 
                                пространство в квартире. Например, автомобильные шины 
                                или велосипед.
                            </p>
                        </div>
                    </div>
                    <div class="features-item">
                        <div class="features-item_icon">
                            <img src="/img/about-features/icons/6.png" alt="features1">
                        </div>
                        <div class="features-item_text">
                            <h3>Собственная котельная</h3>
                            <p>
                                В «Горном Солнце» есть собственная котельная и солнечные 
                                батареи, которые мы используем для отопления помещений и 
                                нагрева воды. В вашей квартире всегда будет тепло и вы
                                экономите на коммунальных платежах <b>от 30 до 50%</b>!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-content>
</template>
<style scoped>
/*//? FEATURES BLOCK */
.features-blocks{
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
}
.features-block{
    color: #616262;
}
.features-item_icon{
    width: 100px;
}
.features-item{
    margin-top: 50px;
    display: flex;
}
.features-item{
    min-height: 150px; 
    width: 750px;
}
.features-item_text{
    padding-left: 40px;
} 
.features-item_text h3{
    font-size: 1.5rem;
} 
.features-item_text p{
    margin-top: 5px;
    font-size: 1.2rem;
} 
@media screen and (max-width: 1919px){
    .features-item{
        min-height: 200px; 
        width: 550px;
    }
}
@media screen and (max-width: 1024px){
    .features-item{
        min-height: 200px; 
        width: 430px;
    }
    .features-item_icon{
        width: 50px;
    }
    .features-item_icon img{
        width: 50px;
    }
    .features-item_text h3{
        font-size: 1.1rem;
    } 
    .features-item_text p{
        margin-top: 5px;
        font-size: 1rem;
    } 
}
@media screen and (max-width: 850px){
    .features-item{
        min-height: 200px; 
        width: 320px;
    }
    .features-item_icon{
        width: 50px;
    }
    .features-item_icon img{
        width: 50px;
    }
    .features-item_text h3{
        font-size: 1rem;
    } 
    .features-item_text p{
        margin-top: 5px;
        font-size: .8rem;
    } 
}
@media screen and (max-width: 450px){
    .features-item{
        position: relative;
        min-height: 210px; 
        width: 300px;
        margin: 0 auto;
    }
    .features-item_text h3{
        font-size: 1.2rem;
    }
    .features-item_text p{
        font-size: 1rem;
    }
    .features-item_icon{
        width: 20px;
    }
    .features-blocks{
        padding: 0 10px;
        display: flex;
        flex-direction: column;
    }
    .features-item_icon img{
       width: 30px;
       position: absolute;
       right: 0;
    }
    .features-item_text{
        padding-left: 0;
    } 
}
</style>
