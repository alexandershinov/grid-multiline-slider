import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

String.prototype.shortDescription = function(length) {
  if (this.length <= length) return this;
  else return this.slice(0, length) + '...'
};

new Vue({
  render: h => h(App),
}).$mount('#app')
