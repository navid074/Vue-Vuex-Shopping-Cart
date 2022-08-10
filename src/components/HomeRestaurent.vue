<template>
  <h1 class="restaurent-title-h1">Popular <span>Restaurents</span></h1>
  <div class="restaurent-container">
    <div class="restaurent">
      <img src="../assets/restaurent.png" class="restaurent-pic" /><br />
      <h3 for="restaurent" class="restaurent-title">MMD Restaurent</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="time">
        <img
          src="https://img.icons8.com/material-two-tone/48/000000/clock.png"
          class="time-icon"
        />
        <p>Open From 7 To 22</p>
        <button class="explore">Explore</button>
      </div>
    </div>

    <div class="restaurent">
      <img src="../assets/restaurent.png" class="restaurent-pic" /><br />
      <h3 for="restaurent" class="restaurent-title">MMD Restaurent</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="time">
        <img
          src="https://img.icons8.com/material-two-tone/48/000000/clock.png"
          class="time-icon"
        />
        <p>Open From 7 To 22</p>
        <button class="explore">Explore</button>
      </div>
    </div>

    <div class="restaurent">
      <img src="../assets/restaurent.png" class="restaurent-pic" /><br />
      <h3 for="restaurent" class="restaurent-title">MMD Restaurent</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="time">
        <img
          src="https://img.icons8.com/material-two-tone/48/000000/clock.png"
          class="time-icon"
        />
        <p>Open From 7 To 22</p>
        <button class="explore">Explore</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.restaurent-container {
  text-align: center;
  display: flex;
  position: relative;
  gap: 20px;
  bottom: 100px;
  margin-left: 60px;
}
.restaurent-title-h1 {
    margin-bottom: 150px;
    margin-left: 450px;
}
.restaurent {
  width: 350px;
  height: 350px;
  background-color: rgba(238, 238, 238, 0.75);
  border-radius: 25px;
  margin-left: 10px;
}
.restaurent-pic {
  width: 150px;
  height: 150px;
  margin: 20px 0;
}
.explore {
  margin-left: 150px;
  margin-top: 10px;
  border: none;
  border-radius: 25px;
  width: 110px;
  height: 30px;
  background-image: linear-gradient(
    to right,
    #fc6076,
    #ff9a44,
    #ef9d43,
    #e75516
  );
}
.time {
  position: relative;
  width: 300px;
  height: 60px;
  margin-left: 50px;
}
.time-icon {
  position: absolute;
  top: 15px;
  right: 280px;
  width: 20px;
  height: 20px;
}
.time p {
  position: absolute;
  font-size: 10px;
  left: 25px;
  top: 8px;
}
span {
  color: #ff6037;
}
</style>
