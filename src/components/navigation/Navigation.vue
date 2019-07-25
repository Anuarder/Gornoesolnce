<template>
  <v-content>
    <nav class="navigation">
      <div class="links">
        <div class="hyper-links">
          <a @click="goTo('#aboutComplex')">О комплексе</a>
          <a @click="goTo('#features')">Особенности</a>
          <a @click="goTo('#apartmentsLayouts')">Планировки</a>
        </div>
        <div class="social-links">
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
      <div class="contact">
        <div class="phones">
          <div class="title">По всем вопросам</div>
          <ul>
            <li>
              <i class="fas fa-circle"></i>
              <a href="tel:+77780030369">7-778-003-03-69</a>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <a href="tel:+77089722727">7-708-972-27-27</a>
            </li>
          </ul>
        </div>
        <div class="social-links">
          <a href="https://wa.me/77010317248">
            WhatsApp
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </nav>
  </v-content>
</template>
<script>
export default {
  methods:{
    goTo(id){
      let options = {
        duration: 800,
        offset: 0,
        easing: "easeInOutCubic"
      }
      this.$vuetify.goTo(id, options);
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.5rem;
}
.navigation {
  position: absolute;
  top: -60px;
  display: flex;
}

/*//? LINKS ?//*/
.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 891.5px;
  background-color: #149778;
}
.links a {
  color: #fff;
  margin-left: 50px;
  font-weight: 300;
  font-size: 1.3rem;
}
.links .social-links {
  border-left: 1px solid #fff;
  display: flex;
}
.links .social-links .social {
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
}
.links .social-links .social:hover {
  opacity: 0.8;
}

/*//? CONTACT ?//*/
.contact {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 891.5px;
  background-color: #fff;
}
.contact .social-links {
  border-left: 1px solid #149778;
}
.contact .social-links a {
  margin: 0 20px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background-color: #149778;
  font-family: "Roboto", sans-serif;
  padding: 5px 15px;
  color: #fff;
}
.contact .social-links a i {
  font-size: 1.2rem;
  margin: 0 5px;
}
.phones {
  display: flex;
  align-items: center;
}
.phones .title {
  margin-left: 20px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
}
.phones ul {
  display: flex;
}
.phones ul li {
  display: flex;
  align-items: center;
  margin-left: 30px;
  list-style: none;
}
.phones ul li i {
  margin-right: 2px;
  color: #149778;
  font-size: 0.5rem;
}
.phones a {
  color: #2c2b2d;
  font-weight: 500;
}


@media screen and (max-width: 1919px) and (min-width: 1366px){
  .links{
    width: 660px;
  }
  .links a {
    color: #fff;
    margin-left: 20px;
    font-weight: 300;
    font-size: 1.2rem;
  }
  .contact{
    width: 660px;
  }
  .phones ul li {
    margin-left: 10px;
    list-style: none;
  }
  .phones .title {
    display: none;
  }
}
@media screen and (max-width: 1024px){
  .navigation{
    position: static;
    flex-direction: column;
  }
  .links {
    width: 100%;
  }
  .links a {
    margin-left: 25px;
  }
  .links .social-links {
    border-left: none;
  }
  
  .contact {
    width: 100%;
  }
  .phones .title {
    display: none;
  }
  .contact .social-links {
    border-left: none;
  }
}

@media screen and (max-width: 767px){
  .navigation{
    position: static;
    flex-direction: column;
  }
  .links {
    width: 100%;
  }
  .hyper-links{
    display: none;
  }
  .links a {
    margin-left: 25px;
  }
  .links .social-links {
    border-left: none;
  }
  
  .contact {
    width: 100%;
  }
  .phones .title {
    display: none;
  }
  .contact .social-links {
    border-left: none;
  }
  .phones ul {
    flex-direction: column;
  }
  .phones ul li {
    display: flex;
    align-items: center;
    margin-left: 15px;
    list-style: none;
  }
  .phones a {
    color: #2c2b2d;
    font-weight: normal;
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 320px){
    .phones ul li {
      margin-left: 5px;
    }
    .phones a {
      font-size: 1rem;
    }
}
</style>
