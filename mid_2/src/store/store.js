import Vue from 'vue';
import Vuex from 'vuex';
import flats from '../../entities.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    flats: flats.response,
  },

  getters: {
    getFlats(state) {
      return state.flats;
    }
  }
});
