import Swal from 'sweetalert2'
import { createStore } from 'vuex'

export default createStore({
  state: {
    slideBurger:true,
    slidePizza:false,
    slideSandwich :false,
    slideAsian:false,
    cart: []
  },
  getters: {
  },
  mutations: {
    addToCart(state , payload){
      console.log('start');
      state.cart.push(payload)
      console.log(payload);
      console.log(state.cart);
      Swal.fire({title:"successfuly Added to Cart !" , text:"Now You Can See It In Cart :)" , icon:'success' , confirmButtonText:'OK'})
    },
    removeFromCart(state , payload){
      for (var i in state.cart){
        if(state.cart[i].id == payload.id){
          state.cart.pop(state.cart[i].id)
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})