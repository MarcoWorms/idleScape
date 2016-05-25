'use strict'

Vue.component('cityselector', idlescape.vues.city_selector)
Vue.component('cityexplorer', idlescape.vues.city_explorer)
Vue.component('bank', idlescape.vues.bank)
Vue.component('mainpopup', idlescape.vues.main_popup)
Vue.component('skilling-spot-mechanic', idlescape.vues.skilling_spot_mechanic)
Vue.component('bank-skill', idlescape.vues.bank_skill)

idlescape.root_vue = new Vue({
  el: '#root_vue',
  data: {
    selected_city: 'lumbridge',
    skillingFilter: true
  }
})

idlescape.root_vue.$on('city changed', function (selected_city) {
  this.selected_city = selected_city
  console.log('city changed', idlescape.root_vue.selected_city)
})

idlescape.root_vue.$on('open_popup', function (...args) {
  this.$children[1].$children[0].open_spot(...args)
})

idlescape.player.bank.add('coin', 10)
idlescape.player.bank.add('copper', 13)
idlescape.player.bank.add('logs', 5)