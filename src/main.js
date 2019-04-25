import Vue from "vue";
import App from "./App.vue";
import Filters from "./scripts/filters";

Vue.config.productionTip = false;

let data = {
  price: 20.53,
  capitalizeText: "capitlize"
};

const vm = new Vue({
  data: data,
  components: { App, Filters },
  template: "<App/>"
});

// Mount vue
vm.$mount("#app");

console.log(vm.$data === data);

// new Vue({
//   render: h => h(App)
// }).$mount("#app");
