<template>
    <v-content>
        <v-card>
            <div class="entrance-modal">
                <v-card-title>
                    <v-list>
                        <v-list-tile avatar>
                            <v-list-tile-avatar tile size="50">
                                <img src="@/assets/logo.png" alt="logo">
                            </v-list-tile-avatar>
                            <v-list-tile-content class="ml-3">
                                <v-list-tile-title>
                                    <h3 class="entrance-modal-title">
                                        Планировки
                                    </h3>
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    <h3 class="entrance-modal-title">
                                        {{entrance.name}}й подъезд
                                    </h3>
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <v-spacer></v-spacer>
                    <v-btn 
                        small 
                        depressed 
                        fab 
                        color="#149778"
                        @click="closeModal">
                        <v-icon color="white">close</v-icon>
                    </v-btn>
                </v-card-title>
                <div class="entrance-content">
                    <div class="floor-buttons">
                        <v-btn
                            v-for="(item, i) in 4" 
                            :key="i" 
                            round
                            class="floor-button text-none"
                            :color="getCurrentFloorButton == i ? '#149778' : '#D22030'"
                            dark
                            @click="setCurrentFloorImage(i)">
                            {{item}}й этаж
                        </v-btn>
                    </div>
                    <div 
                        class="entrance-image" 
                        @click="openApartmentModal">
                        <v-img 
                            contain
                            :src="getCurrentFloorImage">
                        </v-img>
                    </div>
                </div>
            </div>
        </v-card>
        <v-dialog persistent v-model="apartmentModal" max-width="1000">
            <apartment-modal 
                v-if="currentApartments.length !== 0"
                :apartments="currentApartments" 
                @close="closeApartmentModal"
                @submitForm="submitForm">
            </apartment-modal>
        </v-dialog>
    </v-content>
</template>
<script>
import Catalog from '../ApartmentCatalog.js'
import ApartmentImage from './ApartmentImages.js'
export default {
    props: ['entrance'],
    components:{
        ApartmentModal: () => import('./ApartmentModal.vue')
    },
    data(){
        return{
            apartmentModal: false,
            currentFloorImage: '',
            currentFloorButton: 0,
            currentApartmentsArray: [],
            currentApartments: [],
        }
    },
    computed:{
        getCurrentFloorImage(){
            if(this.currentFloorImage == ''){
                // eslint-disable-next-line
                this.currentApartmentsArray = this.entrance.floors[0].apartments;
                this.getApartments();
                return this.entrance.floors[0].image;
            }else{
                return this.currentFloorImage;
            }
        },
        getCurrentFloorButton(){
            return this.currentFloorButton;
        }
    },
    methods:{
        setCurrentFloorImage(i){
            this.currentFloorButton = i;
            this.currentFloorImage = this.entrance.floors[i].image;
            this.currentApartmentsArray = this.entrance.floors[i].apartments;
            this.getApartments();
        },
        closeModal(){
            this.$emit("close");
        },
        openApartmentModal(){
            this.apartmentModal = true;
        },  
        closeApartmentModal(){
            this.apartmentModal = false;
        },
        submitForm(){
            this.apartmentModal = false;
            this.$emit("submitForm");
        },
        async getApartments(){
            try{
                let data = [];
                for(let item of this.currentApartmentsArray){
                    let response = await Catalog.getApartmentInfo(item);
                    let apartmentByNumber = {
                        // Связывание данных с фото
                        image2D: ApartmentImage[(response.apartmentByNumber.apNumber - 1)].image2D,
                        image3D: ApartmentImage[(response.apartmentByNumber.apNumber - 1)].image3D,
                        apNumber: response.apartmentByNumber.apNumber,
                        apArea: response.apartmentByNumber.apArea,
                        apRoomNumber: response.apartmentByNumber.apRoomNumber,
                        blockNumber: response.apartmentByNumber.blockNumber,
                        floorNumber: response.apartmentByNumber.floorNumber,
                        apIsSold: response.apartmentByNumber.apIsSold
                    }
                    data.push(apartmentByNumber);
                }
                this.currentApartments = data;
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>
<style scoped>
.entrance-modal-title{
    font-size: 1.5rem;
    font-weight: 500;
    color: #149778;
}
.entrance-content{
    display: flex;
    justify-content: space-around;
}
.floor-buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.entrance-image{
    cursor: pointer;
    width: 450px;
}
@media screen and (max-width: 768px){
    .entrance-image{
        width: 400px;
    }
}
@media screen and (max-width: 425px){
    .entrance-image{
        width: 250px;
    }
}
</style>
