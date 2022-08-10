<template>
  <div class="app-mockup">
    <h1>Download Our <span>Mobile App</span></h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aliquam
      beatae, commodi ea rem deserunt! Dignissimos nemo nesciunt earum
      repudiandae, totam temporibus harum, eveniet est vitae deleniti officia
      quia ad?
    </p>
    <img src="../assets/mockup.png" alt="">
  </div>
</template>

<script>
export default {
    name: 'HomeMockup',
};
</script>

<style scoped>
.app-mockup{
    margin-top: 200px;
    margin-left: 70px;

}
.app-mockup p{
    width: 450px;
}
.app-mockup img{
    float: right;
    position: relative;
    bottom: 250px;
    right: 60px;
}
span {
  color: #ff6037;
}
</style>
