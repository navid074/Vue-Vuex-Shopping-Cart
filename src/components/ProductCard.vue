<template>
  <div class="card">
    <h3>{{ item.name }}</h3>
    <h5>{{ item.price }}</h5>
    <h5></h5>
    <button @click="store.commit('removeFromCart', item)">Delete</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: ["item"],
  setup(item) {
    const store = useStore()
    console.log(item);
    return {store}
  },
};
</script>

<style scoped>
.card {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0 5px gray;
  background-color: rgba(20, 13, 13, 0.1);
  text-align: center;
}
h5 {
  font-weight: 700;
}
button {
  cursor: pointer;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 25px;
  background-image: linear-gradient(
    to right,
    #fc6076,
    #ff9a44,
    #ef9d43,
    #e75516
  );
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}
</style>
