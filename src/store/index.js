import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || {},
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setProductOnCart(state, payload) {
      const { id: productId } = payload;
      state.cart[productId] = { ...payload };
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setEmptyCart(state) {
      state.cart = {};
      localStorage.removeItem("cart");
    },
    increaseProduct(state, payload) {
      const productId = payload;
      state.cart[productId].amount++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseProduct(state, payload) {
      const productId = payload;
      state.cart[productId].amount--;
      if (!state.cart[productId].amount) {
        delete state.cart[payload];
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProduct(state, payload) {
      delete state.cart[payload];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch("api.json");
        const products = await response.json();
        commit("setProducts", products);
      } catch (err) {
        console.log(err);
      }
    },
    addProductToCart({ commit, state }, product) {
      const alreadyContainsProduct = Object.prototype.hasOwnProperty.call(
        state.cart,
        product.id
      );
      alreadyContainsProduct
        ? (product.amount = state.cart[product.id].amount + 1)
        : (product.amount = 1);
      commit("setProductOnCart", product);
    },
  },
  getters: {
    totalAmount(state) {
      return Object.values(state.cart).reduce(
        (acc, { amount }) => acc + amount,
        0
      );
    },
    totalPrice(state) {
      return Object.values(state.cart).reduce(
        (acc, { amount, price }) => acc + amount * price,
        0
      );
    },
  },
});
