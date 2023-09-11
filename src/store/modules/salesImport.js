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
    const rm_key = state.data.findIndex((el) => el.index === index);
    if (rm_key !== -1) {
      state.data.splice(rm_key, 1);
    }
  },
  updateFieldset(state, { index, value }) {
    console.log('12', { index, value });

    Object.assign(state.data[index], value);
  },
};

const actions = {
  // addNew({ commit }) {
  //   commit('addNew');
  // },
  // updateFieldset({ commit }) {
  //   commit('updateFieldset');
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
