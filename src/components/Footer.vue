<template>
  <th scope="row" colspan="2">Total productos</th>
  <td>{{ totalAmount }}</td>
  <td class="font-weight-bold">
    $ <span>{{ totalPrice }}</span>
  </td>
  <td>
    <button class="btn btn-danger btn-sm" @click="empty">Eliminar todo</button>
  </td>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const totalAmount = computed(() => store.getters.totalAmount);
    const totalPrice = computed(() => store.getters.totalPrice);

    function empty() {
      store.commit("setEmptyCart");
    }

    return { totalAmount, totalPrice, empty };
  },
};
</script>
