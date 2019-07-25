<template>
    <v-content>
        <div class="send-request-form1" id="requestForm1">
            <div class="send-request-form1_img">
            </div>
            <div class="request-form">
                <request-form></request-form>
            </div>
        </div>
    </v-content>
</template>
<script>
import RequestForm from '../../working-components/RequestForm'
export default {
    components: {
        RequestForm
    }
}
</script>
<style scoped>
.send-request-form1{
    display: flex;
    position: relative;
    justify-content: center;
}
.send-request-form1 img{
    max-width: 100%;
    height: auto;
}
.send-request-form1_img{
    background-image: url('https://pp.userapi.com/c845020/v845020481/1c6037/EWJD1z2bpEM.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 493px;
    height: 400px;
}
.request-form{
    padding: 30px;
    background: #F1F1F1;
    width: 931px;
    height: 400px;
}
@media screen and (min-width: 1900px){
    .send-request-form1{
        margin-top: -120px;
    }
}
@media screen and (max-width: 425px){
    .send-request-form1_img{
       display: none;
    }
    .request-form{
        width: 100%;
    }
}
</style>
