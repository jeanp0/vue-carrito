<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>
      <div class="row">
        <div class="col">
          <button class="btn btn-sm" @click="decrease(item.id)">-</button>
        </div>
        <div class="col">
          {{ item.amount }}
        </div>
        <div class="col">
          <button class="btn btn-sm" @click="increase(item.id)">+</button>
        </div>
      </div>
    </td>

    <td>$ {{ item.price * item.amount }}</td>
    <td><button class="btn btn-sm" @click="remove(item.id)">X</button></td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
// import { Toast } from "@/helpers/swal";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    function increase(id) {
      store.commit("increaseProduct", id);
    }

    function decrease(id) {
      store.commit("decreaseProduct", id);
    }

    function remove(id) {
      store.commit("removeProduct", id);
    }

    return { increase, decrease, remove };
  },
};
</script>
