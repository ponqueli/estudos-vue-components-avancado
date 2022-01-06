import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.component('Assincrono', (resolve, reject)=>{
//     setTimeout(() => {
//       resolve({
//         template:'<h2> Component Assincrono</h2>'
//       })
//     }, 2000);

//     //chamar reject em caso de erro
// })

// Vue.component(
//   'Assincrono',
//   () => import('./components/Assincrono.vue')
// )

new Vue({
  el: '#app',
  render: h => h(App),
})