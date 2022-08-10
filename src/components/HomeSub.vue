<template>
  <div class="footer">
    <h1><span>Subscribe</span> For latest news and <span>Offers</span></h1>
    <input type="text" placeholder="Enter Email" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  top: 350px;
  left: 75px;
  right: 60px;
  width: 1100px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 25px;
}
span {
  font-weight: 800;
}
h1 {
  position: absolute;
  left: 260px;
}
input {
  width: 350px;
  height: 30px;
  text-align: center;
  border: 2px solid #bd7251;
  border-radius: 25px;
  position: absolute;
  left: 360px;
  top: 100px;
}
</style>
