idlescape.vues.bank_skill = Vue.extend({
    template: `
        <p class="bank-skill-title">
            <div class="bank-skill-tab" :class="get_selected_class('bank')"
            @click="set_selected('bank')"
            >
            Bank
            </div>
            
            <div class="bank-skill-tab" :class="get_selected_class('skill')"
            @click="set_selected('skill')"
            >
            Skills
            </div>
        </p>
        <div class="bank-skill-container">

            <bank v-if="is_selected('bank')">

            </bank>



            <div v-if="is_selected('skill')">

                <div class="skill-container" v-for="skill in player_skills">
                    <img :src="get_skill_image($key)" alt="" /><span class="skill-name">{{skill.name}}</span><br>
                    <span class="skill-level">Lvl: {{skill.current_lvl}}</span><br>
                    

                    <div class="skill-progress-bar">
                        <div class="skill-progress-bar-content" :style="get_width_percentage(skill.exp_current, skill.exp_to_next_lvl, skill.current_lvl)">
                        </div>
                        <span class="skill-progress-bar-text">{{skill.exp_current}} / {{skill.exp_to_next_lvl}}</span>
                    </div>
                    
                    <br>
                </div>


                
            </div> 

        </div>
    `,
    data: function () {
        return {
            selected: 'skill',
            player_skills: idlescape.player.all_skills()
        }
    },
    methods: {
        get_selected_class: function (tab_uid) {
            if (this.selected === tab_uid) {
                return {
                    bank_skill_selected_tab: true
                }
            } else {
                return {
                    bank_skill_selected_tab: false
                }
            }
        },
        is_selected: function (tab_uid) {
            if (this.selected === tab_uid) {
                return true
            } else {
                return false
            }
        },
        set_selected: function (tab_uid) {
            this.selected = tab_uid
        },
        get_width_percentage: function (exp_current, exp_to_next_lvl, current_lvl) {
            let width_percentage = 0
            let start_exp_this_lvl = idlescape.models.xp_table[current_lvl]
            let total_exp_this_lvl = exp_to_next_lvl - start_exp_this_lvl
            let relative_exp = exp_current - start_exp_this_lvl

            width_percentage = Math.ceil(relative_exp * 100 / total_exp_this_lvl)


            return {
                width: width_percentage + '%'
            }
        },
        get_skill_image: function (skill_uid) {
            return './imgs/small_icons/' + skill_uid + '.png'
        }
    }
})