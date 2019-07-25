<template>
    <v-content>
        <div class="request-form-page">
            <h1>Форма заявки</h1>
            <p>
                Хотите узнать стоимость? <br>
                Отправьте заявку, и мы сразу перезвоним!
            </p>
            <v-form ref="form" class="request-form">
                <div class="request-form-item1">
                    <v-text-field
                        class="request-form_input"
                        color="#149778"
                        label="Ваше имя"
                        :rules="rules"
                        v-model="name">
                    </v-text-field>
                    <v-text-field
                        class="request-form_input"
                        color="#149778"
                        label="Телефон"
                        :rules="rules"
                        required
                        mask="# (###) ###-####"
                        v-model="phone">
                    </v-text-field>
                    <v-btn 
                        :loading="isLoading"
                        @click="validate"
                        class="text-none mt-3"
                        large 
                        required
                        color="#149778" 
                        outline>Отправить заявку</v-btn>
                </div>
            </v-form>
            
        </div>
    </v-content>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            isLoading: false,
            name: '',
            phone: '',
            rules: [
                v => !!v || 'Обязательное поле'
            ],
        }
    },
    methods:{
        validate () {
            if (this.$refs.form.validate()) {
                this.sendRequest();
            }
        },
        async sendRequest(){
            try{
                this.isLoading = true;
                let response = await axios.post("", {
                    name: this.name,
                    email: '',
                    subject: 'Заявка на квартиру',
                    phone: `${this.phone}`,
                    message: ''
                });
                if(response.data.message){
                    this.isLoading = false;
                    this.$refs.form.reset();

                    // Выключатель для линтинга
                    /* eslint-disable */ 
                    swal('Успешно', 'Ваша заявка отправлена', 'success');
                }
            }catch(err){
                this.isLoading = false;
                console.log(err);
                swal('Ошибка', 'Заявка не отправлена', 'error');
            }
        }
    }
}
</script>
<style scoped>
.request-form-page{
    color: #616262;
}
.request-form-page h1{
    font-size: 2rem;
}
.request-form-page p{
    font-size: 1.2rem;
}
.request-form{
    display: flex;
}
.request-form_input{
    width: 270px;
}
.request-form-item2{
    margin-left: 250px;
}
</style>
