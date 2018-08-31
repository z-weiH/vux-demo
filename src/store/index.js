import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'


if(process.env.NODE_ENV === 'development') {
	Vue.use(Vuex)
}

export default new Vuex.Store({
	modules: {
		layout,
	}
})