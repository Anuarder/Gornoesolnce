<template>
    <v-content>
        <div class="footer">
            <div class="footer-content">
                <div class="footer_about">
                    <div class="footer_image">
                        <img src="https://pp.userapi.com/c851036/v851036964/e1be4/Q-cikDm4XJQ.jpg" alt="footerImage">
                    </div>
                    <div>
                        <h5>О нас</h5>
                        <p>
                            Жилой комплекс «Горное Солнце» <br>
                            находится в одном из лучших и <br>
                            экологически чистых районов Алматы, <br>
                            состоит из 139 квартир и занимает <br>
                            общую площадь в 27 859 м2.
                        </p>
                    </div>
                </div>
                <div class="footer_links">
                    <h5>Карта сайта</h5>
                    <div><a href="#aboutComplex">О комплексе</a></div>
                    <div class="mt-2"><a href="#features">Особенности</a></div>
                    <div class="mt-2"><a href="#apartmentsLayouts">Планировки</a></div>
                </div>
                <div class="footer_contacts">
                    <h5>Связаться с нами</h5>
                    <div>Алматы, пр. Аль-Фараби, 146</div>
                    <div class="mt-2">
                        <a href="tel:+77780030369">+7 778 003 03 69</a>, 
                        <a href="tel:+77089722727">+7 708 972 27 27</a>
                    </div>
                    <div class="mt-2">
                        <a href="mailto:sales@gornoesolnce.kz">sales@gornoesolnce.kz</a>
                    </div>
                    <div class="footer_social-links mt-3">
                        <a href="#" class="social">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social">
                            <i class="fab fa-vk"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </v-content>
</template>
<script>
export default {
    data(){
        return{
            phone: ''
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.footer a{
    color: #fff;
}

.footer{
    height: 240px;
    background-color: #149778;
}
.footer-content{
    display: flex;
    padding-top: 45px;
    justify-content: space-around;
    color: #fff;
}
.footer-content h5{
    font-size: 1.1rem;
    font-weight: normal;
    padding-bottom: 10px;
}
.footer_about{
    display: flex;
}
.footer_about .footer_image{
    padding-right: 20px;
}
.footer_contacts{
    text-align: center;
}
.footer_social-links {
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer_social-links a{
    font-size: 1.2rem;
}
.footer_social-links .social {
  color: #149778;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
  margin-left: 20px;
}
.footer_social-links .social:hover {
  text-decoration: none;
  opacity: 0.8;
}
@media screen and (max-width: 736px){
    .footer{
        height: 100%;
        padding: 20px;
    }
    .footer-content{
        flex-direction: column;
    }
    .footer_about{
        display: none;
    }
    .footer_links{
        display: none;
    }
}
</style>
