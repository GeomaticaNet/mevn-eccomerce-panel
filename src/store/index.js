import Vue from 'vue'
import { set } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('token'),
	},
	getters: {
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		}
	},
	actions: {
		saveToken({ commit }, token) {
			commit('setToken', token);
			localStorage.setItem('token', token)
		}
		// removeToken({ commit }) {
		// 	localStorage.removeItem('token');
		// 	commit('setToken', null);
		// }	
	},
	modules: {
	}
})
