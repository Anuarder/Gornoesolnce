<template>
    <v-content>
        <div class="apartment-layouts" id="apartmentsLayouts">
            <button class="apartment-layouts_button ellipse1" @click="setEntrance('entrance1')">1</button>
            <button class="apartment-layouts_button ellipse2" @click="setEntrance('entrance2')">2</button>
            <button class="apartment-layouts_button ellipse3" @click="setEntrance('entrance3')">3</button>
            <button class="apartment-layouts_button ellipse4" @click="setEntrance('entrance4')">4</button>
            <button class="apartment-layouts_button ellipse5" @click="setEntrance('entrance5')">5</button>
            <button class="apartment-layouts_button ellipse6" @click="setEntrance('entrance6')">6</button>
            <button class="apartment-layouts_button ellipse7" @click="setEntrance('entrance7')">7</button>

            <button class="apartment-layouts_button ellipseP1" @click="parkingDialog = true">P</button>
            <button class="apartment-layouts_button ellipseP2" @click="parkingDialog = true">P</button>
        </div>
        <!-- //? Parking Dialog -->
        <v-dialog v-model="parkingDialog" max-width="1000">
            <v-card class="parking-dialog"></v-card>
        </v-dialog>
        <!-- //? Entrance Modal -->
        <v-dialog persistent v-model="entranceDialog" max-width="1000">
            <entrance-modal 
                v-if="entranceDialog"
                :entrance="currentEntrance" 
                @close="closeEntranceModal"
                @submitForm="submitForm">
            </entrance-modal>
        </v-dialog>
    </v-content>
</template>
<script>
export default {
    components:{
        EntranceModal: () => import('./Modal/EntranceModal.vue')
    },
    data(){
        return{
            parkingDialog: false,
            entranceDialog: false,
            currentEntrance: '',
            entrance: {
                entrance1:{
                    name: 1,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c854228/v854228479/3e4b/9ZHDlmLaqBo.jpg',
                            apartments: [1,2,3,4,5]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c855024/v855024479/38ce/gMbvOlBGBmA.jpg',
                            apartments: [6,7,8,9,10]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c854524/v854524479/3a57/LaJR5mPI_nE.jpg',
                            apartments: [11,12,13,14,15]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c853520/v853520479/38cd/D0ZciuszbDQ.jpg',
                            apartments: [16,17,17,19,20]
                        }
                    ]
                },
                entrance2:{
                    name: 2,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c844721/v844721323/1cbec1/Ja5G43sls7U.jpg',
                            apartments: [21,22,23,24,25]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c855332/v855332479/3b4c/T3Xmvc5uAv4.jpg',
                            apartments: [26,27,28,29,30]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c845218/v845218323/1c8b3f/WY1AURQpEpI.jpg',
                            apartments: [31,32,33,34,35]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c850424/v850424479/daaf9/0TDC2BE_hnE.jpg',
                            apartments: [36,37,38,39,40]
                        }
                    ]
                },
                entrance3:{
                    name: 3,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c846122/v846122323/1cf16a/cmw4PGJSb08.jpg',
                            apartments: [41,42,43,44,45]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c850532/v850532479/e155a/dwyiU0G4QGA.jpg',
                            apartments: [46,47,48,49,50]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c845523/v845523323/1cb3fd/RSdRUBkv28U.jpg',
                            apartments: [51,52,53,54,55]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c855016/v855016479/35fa/uEorQUvE_bI.jpg',
                            apartments: [56,57,58,59,60]
                        }
                    ]
                },
                entrance4:{
                    name: 4,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c844617/v844617323/1cfb97/dNqbyfHlydc.jpg',
                            apartments: [61,62,63,64,65]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c850424/v850424479/daaef/HgxogtRu1vo.jpg',
                            apartments: [66,67,68,69,70]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c849328/v849328323/153403/M2BmlPtLgGA.jpg',
                            apartments: [71,72,73,74,75]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c851436/v851436479/d7934/I7AhT9ZJ5tE.jpg',
                            apartments: [76,77,78,79,80]
                        }
                    ]
                },
                entrance5:{
                    name: 5,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c852236/v852236479/d99fc/b6bhz2zBDFA.jpg',
                            apartments: [81,82,83,84,85]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c855616/v855616479/454f/HzReHG17yqU.jpg',
                            apartments: [86,87,88,89,90]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c855720/v855720479/41e6/A956LMm0PLA.jpg',
                            apartments: [91,92,93,94,95]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c844416/v844416323/1ccfc1/ZSDDLjJ6qpk.jpg',
                            apartments: [96,97,98,99,100]
                        }
                    ]
                },
                entrance6:{
                    name: 6,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c850136/v850136323/11031a/8xVyziZVE9M.jpg',
                            apartments: [101,102,103,104,105]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c849220/v849220323/154502/TaiK_kqhDCY.jpg',
                            apartments: [106,107,108,109,110]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c850232/v850232323/10ab22/aNPbJoNWKfM.jpg',
                            apartments: [111,112,113,114,115]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c845016/v845016323/1c410c/AY94WmHiz8o.jpg',
                            apartments: [116,117,118,119,120]
                        }
                    ]
                },
                entrance7:{
                    name: 7,
                    floors:[
                        {
                            name: 1,
                            image: 'https://pp.userapi.com/c851228/v851228479/de6b5/HR4NynjDncQ.jpg',
                            apartments: [121,122,123,124,125]
                        },
                        {
                            name: 2,
                            image: 'https://pp.userapi.com/c854224/v854224479/37b9/qZC0Fmen04o.jpg',
                            apartments: [126,127,128,129,130]
                        },
                        {
                            name: 3,
                            image: 'https://pp.userapi.com/c850128/v850128323/f93b7/Sno9iOqE7Ys.jpg',
                            apartments: [131,132,133,134,135]
                        },
                        {
                            name: 4,
                            image: 'https://pp.userapi.com/c846217/v846217323/1c915f/9-NbDg0atDg.jpg',
                            apartments: [136,137,138,139]
                        }
                    ]
                },
            },
        }
    },
    computed:{
        nextSlide(){
            return this.entranceSlider;
        }
    },
    methods:{
        goToSlide(index){
            this.entranceSlider = index;
        },
        submitForm(){
            this.entranceDialog = false;
            this.$vuetify.goTo('#requestForm1');
        },
        setEntrance(i){
            this.entranceDialog = true;
            this.currentEntrance = this.entrance[i];
        },
        closeEntranceModal(){
            this.entranceDialog = false;
        }
    }
}
</script>

<style scoped>
/* //? Modal */
.parking-dialog{
    background-image: url('https://pp.userapi.com/c847124/v847124283/1c5208/MI_Sesry_BI.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
}

/* //? Apartments layouts */
.apartment-layouts{
    background-image: url('https://pp.userapi.com/c845020/v845020481/1c602d/fH5K9_k4mVQ.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1000px;
    width: 1800px;
    position: relative;
}
.apartment-layouts_button{
    outline: none;
    width: 60px; 
    height: 60px;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #149778;
    color: #fff;
    border-radius: 50%;
    position: absolute;
}
.apartment-layouts_button:hover{
    background-color: #098165;
    transition: .2s;
}
.apartment-layouts_button:active{
    background-color: #149778;
}
.ellipse1{
    top: 47%;
    left: 28%;
}
.ellipse2{
    top: 33%;
    left: 10%;
}
.ellipse3{
    top: 33%;
    left: 33%;
}
.ellipse4{
    top: 33%;
    left: 45%;
}
.ellipse5{
    top: 33%;
    left: 67%;
}
.ellipse6{
    top: 33%;
    left: 77%;
}
.ellipse7{
    top: 47%;
    left: 77%;
}
.ellipseP1{
    top: 42%;
    left: 4%;
}
.ellipseP2{
    top: 82%;
    right: 5%;
}

@media screen and (max-width: 1919px) and (min-width: 1366px){
    .apartment-layouts{
        width: 1320px;
        height: 700px;
    }
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    .apartment-layouts{
        background-size: cover;
        width: 100%;
        height: 500px;
    }
    .apartment-layouts_button{
        width: 30px;
        height: 30px;
        font-size: 1rem;
    }
}
@media screen and (max-width: 768px){
    .apartment-layouts{
        background-size: contain;
    }
    .ellipseP2{
        top: 78%;
        right: 5%;
    }   
}
@media screen and (max-width: 767px){
    .apartment-layouts{
        background-size: cover;
        width: 100%;
        height: 300px;
    }
    .apartment-layouts_button{
        width: 20px;
        height: 20px;
        font-size: 1rem;
    }
}
@media screen and (max-width: 425px){
    .apartment-layouts{
        background-size: cover;
        width: 100%;
        height: 200px;
    }
}
</style>
