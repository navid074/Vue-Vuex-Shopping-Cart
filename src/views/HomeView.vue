<template>
  <!--Home Intro-->
  <div class="intro">
    <img class="delivery" src="../assets/delivery.png" alt="delivery" />
    <h1 class="intro-title">Super Fast <span>Food Delivery </span>Service</h1>
    <p class="intro-about">
      We provide super-fast food delivery . <br />Let's use our services Right
      Now and get <br />up to 50% discounts!
    </p>
    <button class="intro-explore-foods">Explore Foods</button>
  </div>
  <img src="../assets/wave-haikei.svg" class="wave" alt="" />

  <!--Import Category component-->
  <HomeCategory />
  <div class="second-intro">
    <h1 class="intro-title"><span>Stay</span> at home<br>We will provide <span>Good Food</span></h1>
    <img class="intro-logo restaurent" src="https://img.icons8.com/nolan/64/D9E021/FB872B/small-business.png"/>
    <label class="option" for="">+500 Restaurents</label>
    <img class="intro-logo city" src="https://img.icons8.com/nolan/64/D9E021/FB872B/city.png"/>
    <label class="option" for="">+500 Cities</label>
    <img class="intro-logo man" src="https://img.icons8.com/nolan/64/D9E021/FB872B/head-profile.png"/>
    <label class="option" for="">+500 SaleMan</label>
    <img class="fast-delivery" src="../assets/fastdelivery.png" alt="fast-delivery" />
  </div>

  <HomeRestaurent />
  <HomeMockup />
  <HomeSub />
  <router-view />
</template>

<script>
import HomeCategory from "@/components/HomeCategory.vue";
import HomeRestaurent from "@/components/HomeRestaurent.vue";
import HomeMockup from "@/components/HomeMockup.vue";
import HomeSub from "@/components/HomeSub.vue";

export default {
  name: "HomeView",
  components: { HomeCategory, HomeRestaurent, HomeMockup, HomeSub },
  setup() {},
};
</script>

<style>
.delivery {
  margin-left: 700px;
  width: 500;
  height: 333;
}
.intro-title {
  position: relative;
  bottom: 300px;
  left: 66px;
}
.intro-about {
  position: relative;
  bottom: 300px;
  left: 70px;
}
.intro-about {
  position: relative;
  bottom: 300px;
  left: 70px;
}
div h1 span {
  color: #ff6037;
}
.intro-explore-foods {
  position: relative;
  bottom: 300px;
  left: 70px;
  width: 140px;
  height: 30px;
  background-image: linear-gradient(
    to right,
    #fc6076,
    #ff9a44,
    #ef9d43,
    #e75516
  );
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.wave {
  height: max-content;
  position: relative;
  bottom: 300px;
}

.second-intro{
  position: relative;
  bottom: 240px;
}
.second-intro h1 {
  position: relative;
  top: 200px;
  left: 600px;
}
.fast-delivery{
  position: relative;
  right: 400px;
}
.option{
  position: relative;
  bottom: 150px;
  left: 530px;
}
.intro-logo{
  position: relative;
  bottom: 170px;
  left: 610px;
}
</style>