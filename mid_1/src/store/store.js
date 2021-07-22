import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hiScores: JSON.parse(localStorage.getItem('hiScores')) || [],
  },
  actions: {
    clearScores() {
      localStorage.removeItem('hiScores');
    }
  },

  getters: {
    getHighScores(state) {
      return state.hiScores;
    }
  },

  mutations: {
    addRes(state, res) {
      state.hiScores.push(res);
      localStorage.setItem('hiScores', JSON.stringify(state.hiScores));
    },
    clearScores(state) {
      state.hiScores = [];
    }
  }
});
