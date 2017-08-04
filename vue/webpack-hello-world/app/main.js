import  Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

new Vue({
  el: '#vue-container',
  render: handler => handler(HelloWorld)
})
