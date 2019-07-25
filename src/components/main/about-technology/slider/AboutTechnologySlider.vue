<template>
    <v-content>
        <v-carousel hide-delimiters :height="sliderHeight">
            <v-carousel-item
                src="https://pp.userapi.com/c847219/v847219921/1cc109/s4ckd83ZmLA.jpg">
            </v-carousel-item>
            <v-carousel-item
                src="https://pp.userapi.com/c847219/v847219921/1cc113/LFHDb8FMlZo.jpg">
            </v-carousel-item>
            <v-carousel-item
                src="https://pp.userapi.com/c847219/v847219921/1cc11d/kWxfPij1mCc.jpg">
            </v-carousel-item>
        </v-carousel>
    </v-content>
</template>
<script>
export default {
    data(){
        return{
            sliderHeight: 760
        }
    },
    created(){
        this.checkScreenSize();
    },
    methods:{
        checkScreenSize(){
            if(window.innerWidth < 736){
                this.sliderHeight = 600;
            }
        }
    }
}
</script>
