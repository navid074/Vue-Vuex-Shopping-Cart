<template>
    <div class="cart-container">
        <ProductCard 
        v-for="item in store.state.cart" :key="item.id"
        :item="item" />
    </div>
    <router-view />
</template>

<script>
import { useStore } from 'vuex'
import data from '../store/products.js'
import ProductCard from '@/components/ProductCard.vue'
export default {
    name:'CartView',
    components:{ ProductCard },
    setup(){
        const store = useStore()
        return{data , store}
    }
}
</script>

<style>
.cart-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>