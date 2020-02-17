import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
var clickDirective;

Vue.directive("color", {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
    clickDirective = function(elem) {
      if (el.contains(elem.target)) {
        alert("Clicked inside the directive");
      }
    };
    document.addEventListener("click", clickDirective);
  },
  unbind(el, binding) {
    document.removeEventListener("click", clickDirective);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
