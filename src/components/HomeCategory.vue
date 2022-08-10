<template>
  <!--Popular Categories-->
  <div class="popular-category">
    <h1>Popular <span>Category</span></h1>
    <div class="category-container">
      <div
        class="category burger-category"
        @click="changeSliderBurger"
        :class="{ active: store.state.slideBurger }"
      >
        <img src="https://img.icons8.com/wired/64/000000/hamburger.png" /><br />
        <label for="burger" class="burger-title">Hamburger</label>
      </div>

      <div
        class="category pizza-category"
        @click="changeSliderPizza"
        :class="{ active: store.state.slidePizza }"
      >
        <img
          src="https://img.icons8.com/wired/64/000000/italian-pizza.png"
        /><br />
        <label for="pizza" class="pizza-title">Pizza</label>
      </div>

      <div
        class="category sandwich-category"
        @click="changeSliderSandwich"
        :class="{ active: store.state.slideSandwich }"
      >
        <img src="https://img.icons8.com/wired/64/000000/baguette.png" /><br />
        <label for="sandwich" class="sandwich-title">Sandwich</label>
      </div>

      <div
        class="category asian-category"
        @click="changeSliderAsian"
        :class="{ active: store.state.slideAsian }"
      >
        <img src="https://img.icons8.com/wired/64/000000/rice-bowl.png" /><br />
        <label for="asian" class="asian-title">Asian</label>
      </div>
    </div>

    <!--Burger Product-->
    <div v-if="store.state.slideBurger" class="burger-product-container" >
      <div class="product burger-product">
        <img src="../assets/burger-1.png" /><br />
        <label for="id">{{data[0].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[0].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[0])">Buy</button>
      </div>

      <div class="product burger-product">
        <img src="../assets/burger-1.png" /><br />
        <label for="id">{{data[1].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[1].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[1])">Buy</button>
      </div>

      <div class="product burger-product">
        <img src="../assets/burger-1.png" /><br />
        <label for="id">{{data[2].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[2].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[2])">Buy</button>
      </div>
    </div>

    <!--Pizza Product-->
    <div v-if="store.state.slidePizza" class="burger-product-container">
      <div class="product pizza-product">
        <img src="../assets/burger-2.png" /><br />
        <label for="id">{{data[3].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[3].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[3])">Buy</button>
      </div>

      <div class="product pizza-product">
        <img src="../assets/burger-2.png" /><br />
        <label for="id">{{data[4].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[4].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[4])">Buy</button>
      </div>

      <div class="product pizza-product">
        <img src="../assets/burger-2.png" /><br />
        <label for="id">{{data[5].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[5].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[5])">Buy</button>
      </div>
    </div>

    <!--Sandwich Product-->
    <div v-if="store.state.slideSandwich" class="burger-product-container">
      <div class="product sandwich-product">
        <img src="../assets/burger-3.png" /><br />
        <label for="id">{{data[6].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[6].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[6])">Buy</button>
      </div>

      <div class="product sandwich-product">
        <img src="../assets/burger-3.png" /><br />
        <label for="id">{{data[7].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[7].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[7])">Buy</button>
      </div>

      <div class="product sandwich-product">
        <img src="../assets/burger-3.png" /><br />
        <label for="id">{{data[8].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[8].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[8])">Buy</button>
      </div>
    </div>

    <!--Asian Product-->
    <div v-if="store.state.slideAsian" class="burger-product-container">
      <div class="product asian-product">
        <img src="../assets/burger-4.png" /><br />
        <label for="id">{{data[9].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[9].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[9])">Buy</button>
      </div>

      <div class="product asian-product">
        <img src="../assets/burger-4.png" /><br />
        <label for="id">{{data[10].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[10].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[10])">Buy</button>
      </div>

      <div class="product asian-product">
        <img src="../assets/burger-4.png" /><br />
        <label for="id">{{data[11].id}}</label>
        <h3 for="hamburger" class="burger-title">{{data[11].name}}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="buy" @click="store.commit('addToCart' , data[11])">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../store/products.js'
import {mapMutations, useStore } from "vuex";

export default {
  name: "HomeCategory",
  setup() {
    const store = useStore();
    console.log(data);
    function changeSliderBurger() {
      store.state.slideBurger = !store.state.slideBurger;
      store.state.slidePizza = false;
      store.state.slideSandwich = false;
      store.state.slideAsian = false;
      console.log("burger active");
    }
    function changeSliderPizza() {
      store.state.slidePizza = !store.state.slidePizza;
      store.state.slideBurger = false;
      store.state.slideSandwich = false;
      store.state.slideAsian = false;
      console.log("Pizza active");
    }
    function changeSliderSandwich() {
      store.state.slideSandwich = !store.state.slideSandwich;
      store.state.slideBurger = false;
      store.state.slidePizza = false;
      store.state.slideAsian = false;
      console.log("Sandwich active");
    }
    function changeSliderAsian() {
      store.state.slideAsian = !store.state.slideAsian;
      store.state.slidePizza = false;
      store.state.slideSandwich = false;
      store.state.slideBurger = false;
      console.log("Asian active");
      }
      mapMutations(['addToCart'])

    return {
      data,
      store,
      changeSliderBurger,
      changeSliderPizza,
      changeSliderAsian,
      changeSliderSandwich,
      addToCart: () => store.commit('addToCart'),
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.popular-category {
  text-align: center;
  position: relative;
  bottom: 250px;
}
.popular-category h1 span {
  color: #ff6037;
  text-align: center;
}

.category-container {
  display: flex;
}

.burger-category,
.pizza-category,
.sandwich-category,
.asian-category {
  width: 300px;
  height: 100px;
  background-color: rgba(238, 238, 238, 0.75);
  margin-left: 60px;
  margin-top: 10px;
  border-radius: 25px;
  transition: 0.7s;
  cursor: pointer;
}
.asian-category {
  margin-right: 65px;
}
.category:hover {
  background-color: #ff6037;
}
.burger-product-container {
  display: flex;
  margin: 40px 205px;
  gap: 50px;
  animation: fadeIn 2s;
}
.pizza-product-container {
  display: flex;
  margin: 40px 205px;
  gap: 50px;
  animation: fadeIn 2s;
}
.sandwich-product-container {
  display: flex;
  margin: 40px 205px;
  gap: 50px;
  animation: fadeIn 2s;
}
.asian-product-container {
  display: flex;
  margin: 40px 205px;
  gap: 50px;
  animation: fadeIn 2s;
}
.product {
  width: 250px;
  height: 350px;
  background-color: rgba(238, 238, 238, 0.75);
  border-radius: 25px;
}
.product img {
  width: 150px;
  height: 150px;
  margin: 20px 0;
}
.buy {
  margin-top: 10px;
  width: 110px;
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
.active {
  background-color: #ff6037;
}
.wave {
  height: max-content;
  position: relative;
  bottom: 350px;
}
</style>
