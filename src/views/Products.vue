<template>
  <h1>Productos</h1>
  <hr />
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="product of products" :key="product.id" class="col">
      <Card :product="product" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import Card from "@/components/Card";

export default {
  name: "Products",
  components: { Card },
  setup() {
    const store = useStore();
    onMounted(async () => {
      store.dispatch("fetchData");
    });
    const products = computed(() => store.state.products);

    return { products };
  },
};
</script>
