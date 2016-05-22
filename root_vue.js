'use strict'

Vue.component('cityselector', idlescape.vues.city_selector)
Vue.component('cityexplorer', idlescape.vues.city_explorer)
Vue.component('bank', idlescape.vues.bank)
Vue.component('mainpopup', idlescape.vues.main_popup)
Vue.component('skilling-spot-mechanic', idlescape.vues.skilling_spot_mechanic)

idlescape.root_vue = new Vue({
  el: '#root_vue',
  data: {
    selected_city: 'lumbridge',
    skillingFilter: true
  },
  methods: {
    bank: function () {
      return this.$children[2]
    }
  }
})

idlescape.bank = root_vue.bank

idlescape.root_vue.$on('city changed', function (selected_city) {
  this.selected_city = selected_city
  console.log('city changed', idlescape.root_vue.selected_city)
})

idlescape.root_vue.$on('open_popup', function (...args) {
  this.$children[1].$children[0].open_spot(...args)
})
