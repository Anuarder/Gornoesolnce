<template>
    <v-content>
        <div class="send-request-form2">
            <div class="send-request-form2_img">
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
.send-request-form2{
    display: flex;
}

.send-request-form2_img{
    background-image: url('https://pp.userapi.com/c845020/v845020481/1c6040/_tqyXEsakSA.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 869px;
    height: 382px;
}
.request-form{
    padding: 40px;
    background: #F1F1F1;
    width: 931px;
    height: 382px;
}
@media screen and (max-width: 425px){
    .send-request-form2_img{
        display: none;
    }
    .request-form{
        width: 100%;
    }
}
</style>
