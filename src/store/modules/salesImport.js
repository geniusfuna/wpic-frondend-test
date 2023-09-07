const initFieldState = {
  sid: null,
  sku: null,
  location: null,
  unit_price: 0,
  qty: 0,
};

const state = {
  index: 0,
  data: [{ index: 0, ...initFieldState }],
};

const mutations = {
  addNew(state) {
    state.index++;
    state.data.push({ index: state.index, ...initFieldState });
  },
  removeCurrent(state, index) {
    console.log('removeCurrent', index);
    state.data.splice(index, 1);
    console.log('removeCurrent', state.data);
  },
  updateFieldset(state, { index, value }) {
    Object.assign(state.data[index], value);
  },
};

const actions = {
  addNew({ commit }) {
    commit('addNew');
  },
  updateFieldset({ commit }) {
    commit('updateFieldset');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
