<template>
  <div class="card h-100">
    <img
      :src="product.thumbnailUrl"
      class="card-img-top"
      :alt="`image ${product.title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">$ {{ product.price }}</p>
      <div class="d-grid">
        <b utton class="btn btn-dark" @click="buy(product)">Comprar</b>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "@/helpers/swal";
import { useStore } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    function buy(product) {
      Toast.fire({
        icon: "success",
        title: "Producto añadido a carrito!",
      });
      store.dispatch("addProductToCart", product);
    }

    return { buy };
  },
};
</script>
