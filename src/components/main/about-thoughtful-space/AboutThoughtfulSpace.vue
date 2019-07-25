<template>
    <v-content>
        <div class="about-thoughtful-space">
            <div class="title-block">
                <h4 class="title-block_subtitle">
                    Особенности
                </h4>
                <h1 class="title-block_title">
                    Продуманное пространство
                </h1>
                <p class="title-block_text">
                    Во дворе жилого комплекса «Горное Солнце» царит тихая, спокойная и гармоничная <br>
                    атмосфера. На просторной территории есть детская площадка и уютная зона для <br>
                    вечернего отдыха, где после суетливого дня можно отдохнуть и расслабиться в кругу семьи. 
                    <br><br>
                    Жилой комплекс состоит из четырех четырехэтажных домов, на каждом этаже <br>
                    располагается по 5 квартир. Все подъезды оснащены лифтом.

                </p>
                <button class="apartment-planning-button" @click="$vuetify.goTo('#apartmentsLayouts')">Планировки квартир</button>
            </div>
        </div>
    </v-content>
</template>
<style scoped>
.about-thoughtful-space{
    background-color: #149778;
}
.title-block_subtitle{
    color: #fff;
}
.title-block{
    margin: 0;
    padding-top: 40px;
    padding-bottom: 45px;
    color: #fff;
}
.apartment-planning-button{
    outline: none;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    width: 245px;
    height: 60px;
    margin-top: 35px;
    font-size: 1.2rem;
}
.apartment-planning-button:hover{
    color: #149778;
    background-color: #fff;
    transition: .5s;
}
.apartment-planning-button:active{
    opacity: .7;
}
</style>
