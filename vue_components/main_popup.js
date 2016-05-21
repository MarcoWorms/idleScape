idlescape.vues.main_popup = Vue.extend({
  template: `
  <div v-if="visible" id="main_popup" transition="fade">
    <div @click="hide" class="close_button_container">
      <p class="close_button">X</p>
    </div>
    <img :src="get_spot_img()"></img>
    <h1 class="popup_title">{{ spot.name }}</h1>
  </div>
`,
  data: function() {
    return {
      visible: false,
      template_type: 'skilling',
      spot: {}
    }
  },
  methods: {
    hide: function () {
      this.visible = false
    },
    open_spot: function (template_type, spot_uid) {
      this.spot = idlescape.models.spots[template_type][spot_uid];
      this.visible = true;
    },
    get_spot_img: function () {
      return './imgs/large_icons/' + Object.keys(this.spot.required_levels)[0] + '.png'
    }
  }
})