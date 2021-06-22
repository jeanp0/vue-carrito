<template>
  <h1>Mi Carrito</h1>
  <hr />
  <table class="table text-center">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody id="items">
      <Item v-for="item in cart" :key="item.id" :item="item" />
    </tbody>
    <tfoot>
      <tr id="footer-carrito">
        <th v-if="!Object.keys(cart).length" scope="row" colspan="5">
          Carrito vacío - comience a comprar!
        </th>
        <Footer v-else />
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
export default {
  components: { Item, Footer },

  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);

    return { cart };
  },
};
</script>
