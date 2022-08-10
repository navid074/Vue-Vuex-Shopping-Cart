<template>
  <nav>
    <h3><span>E</span>Food</h3>
    <li class="navbar navbar-home"><router-link to="/">Home</router-link></li>
    <li class="navbar navbar-team">
      <router-link :to="{ name: 'team' }">Team</router-link>
    </li>
    <li class="navbar navbar-faq">
      <router-link :to="{ name: 'faq' }">FAQ</router-link>
    </li>
    <li class="navbar navbar-contact">
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </li>
    <li class="navbar navbar-download">
      <button>
        <router-link :to="{ name: 'cart' }">Shopping cart</router-link>
      </button>
    </li>
    <li class="navbar navbar-download">
      <button>
        <router-link :to="{ name: 'download' }">Download App</router-link>
      </button>
    </li>
  </nav>

  <router-view />
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Merriweather";
  color: #2c3e50;
  font-weight: 400;
}

#app {
  font-family: "Merriweather", serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  overflow-y: hidden;
}

nav {
  display: flex;
  padding: 30px;
}

nav h3 {
  position: relative;
  bottom: 21px;
  left: 30px;
}

nav h3 span {
  color: #ff6037;
}

nav li {
  list-style-type: none;
  margin: 0 35px;
  position: relative;
  left: 250px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff6037;
}
nav button a.router-link-exact-active {
  color: black;
}

nav button {
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
  width: 130px;
  height: 30px;
  position: relative;
  bottom: 5px;
  left: 10px;
}
nav button:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.site-footer{
  width: 1130px;
  height: 250px;
  background-color: #E64500;
  position: relative;
  top: 3443px;
  left: 60px;
  border: none;
  border-radius: 25px;
}
.buy-logo{
  width: 40px;
  height: 40px;
  position: relative;
  bottom: 10px;
}
</style>
