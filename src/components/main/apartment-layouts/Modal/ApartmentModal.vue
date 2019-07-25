<template>
    <v-content>
        <v-card>
            <div class="apartment-modal">
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar tile size="50">
                            <img src="@/assets/logo.png" alt="logo">
                        </v-list-tile-avatar>
                        <v-list-tile-content class="ml-3">
                            <v-list-tile-title>
                                <h3 class="apartment-modal-title">
                                    Планировки
                                </h3>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                <h3 class="apartment-modal-title">
                                    {{apartments[0].blockNumber}}й подъезд
                                </h3>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn 
                                small 
                                depressed 
                                fab 
                                color="#149778"
                                @click="closeModal">
                                <v-icon color="white">close</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <div class="apartment-content">
                    <v-btn 
                        icon
                        color="#D22030"
                        fab
                        dark
                        class="text-none prev-button-desktop"
                        @click="nextApartment(-1)">
                        <v-icon large>arrow_back</v-icon>
                    </v-btn>
                    <div class="apartment-compare-image">
                        <v-img
                            :src="image ? apartments[getCa].image2D : apartments[getCa].image3D">
                        </v-img>
                        <div class="compare-image-buttons">
                            <v-btn 
                            dark
                            :color="image ? '#D22030' : '#149778'" 
                            small 
                            class="text-none"
                            @click="image = true">
                            Схема
                            </v-btn>
                            <v-btn 
                                dark
                                :color="image ? '#149778' : '#D22030'" 
                                small 
                                class="text-none"
                                @click="image = false">
                                3D модель
                            </v-btn>
                        </div>
                    </div>
                    <div class="apartment-info">
                        <h3>Квартира: {{apartments[getCa].apNumber}}</h3>
                        <div class="apartment-info-item">
                            <h3>Подъезд</h3>
                            <h4>{{apartments[getCa].blockNumber}}й подъезд</h4>
                        </div>
                        <div class="apartment-info-item">
                            <h3>Этаж</h3>
                            <h4>{{apartments[getCa].floorNumber}} этаж</h4>
                        </div>
                        <div class="apartment-info-item">
                            <h3>Количество комнат</h3>
                            <h4>{{apartments[getCa].apRoomNumber}} комнаты</h4>
                        </div>
                        <div class="apartment-info-item">
                            <h3>Площадь квартиры</h3>
                            <h4>{{apartments[getCa].apArea}}м2</h4>
                        </div>
                        <div class="apartment-info-item">
                            <h3 v-if="apartments[getCa].apIsSold" class="red--text">Продано</h3>
                        </div>

                        <hr class="mt-5 mb-3">
                        <div class="request-form">
                            <h3>Понравилась квартира?</h3>
                            <p>
                                Хотите узнать стоимость? <br>
                                Отправьте заявку, и мы сразу перезвоним!
                            </p>
                            <button class="request-form-button" @click="submitForm">
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div class="slide-buttons">
                        <v-btn 
                            icon
                            color="#D22030"
                            fab
                            dark
                            class="text-none prev-button-mobile"
                            @click="nextApartment(-1)">
                            <v-icon large>arrow_back</v-icon>
                        </v-btn>
                        <v-btn 
                            icon
                            color="#D22030"
                            fab
                            dark
                            class="text-none"
                            @click="nextApartment(1)">
                            <v-icon large>arrow_forward</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-card>
    </v-content>
</template>
<script>
export default {
    props: ['apartments'],
    data(){
        return{
            image: true,
            currentApartment: 0
        }
    },
    computed:{
        // Ca => current apartment
        getCa(){
            return this.currentApartment
        }
    },
    methods:{
        closeModal(){
            this.$emit('close');
        },
        submitForm(){
            this.$emit('submitForm');
        },
        nextApartment(i){
            if(this.currentApartment == 0 && i == -1){
                this.currentApartment = this.apartments.length - 1;
            }else if(this.currentApartment == this.apartments.length - 1 && i == 1){
                this.currentApartment = 0;
            }else{
                this.currentApartment += i;
            }
            
        }
    }
}
</script>
<style scoped>
.apartment-modal-title{
    font-size: 1.5rem;
    font-weight: 500;
    color: #149778;
}

.apartment-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}
.apartment-compare-image{
    width: 400px;
}
.compare-image-buttons{
    display: flex;
    justify-content: center;
}
.apartment-info{
    width: 400px;
    padding: 1rem;
}
.apartment-info-item{
    display: flex;
    justify-content: space-between;
}
.apartment-info h3{
    color: #149778;
    font-size: 1.5rem;
    font-weight: 600;
}
.apartment-info-item h3{
    color: #149778;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 10px;
}
.apartment-info-item h4{
    color: #616262;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 10px;
}
.prev-button-mobile{
    display: none;
}
.request-form{
    padding: 10px;
}

.request-form h3{
    color: #616262;
    font-size: 1.4rem;
    font-weight: 500;
}
.request-form p{
    margin-top: 10px;
    color: #616262;
}

.request-form-button{
    outline: none;
    padding: 8px;
    font-size: 1.1rem;
    border: 1.5px solid #149778;
    color: #149778;
}
.request-form-button:hover{
    border-color: #016951;
    color: #016951;
}

@media screen and (max-width: 880px){
    .apartment-content{
        flex-direction: column;
    }
    .apartment-compare-image{
        width: 300px;
    }
    .apartment-info{
        width: 300px;
        padding: 1rem;
    }
    .apartment-info h3{
        font-size: 1.2rem;
    }
    .apartment-info-item h3{
        font-size: 1rem;
    }
    .apartment-info-item h4{
        font-size: 1rem;
    }
    .prev-button-desktop{
        display: none;
    }
    .prev-button-mobile{
        display: block;
    }
    .slide-buttons{
        display: flex;
    }
}
@media screen and (max-width: 320px){
    .apartment-modal-title{
        font-size: 1rem;
    }
    .apartment-compare-image{
        width: 240px;
    }
    .apartment-info{
        width: 240px;
        margin-top: 10px;
        padding: 0;
    }
}
</style>
