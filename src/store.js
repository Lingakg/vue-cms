import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		num: 1,
    editid:''
	},
	mutations: {
		addNum(state, n) {
			state.num += n
			console.log(state.num)
		},
    editId(state, id){
      state.editid = id
      console.log('editid',state.editid)
    }
	},
	actions: {

	},
	getters: {
      changeId(state){
        return state.editid
      }
	}
})
