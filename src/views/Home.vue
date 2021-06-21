<template>
  <div class="home">
    <h1>Home</h1>
    <hr />
    <pre>
    {{ products }}
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Home",
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
