<template>
  <section class="bg-white text-[#161616] py-12 px-6">
    <div class="mx-4 md:mx-10">
      <h1 class="text-5xl md:text-9xl font-bold relative inline-block">
        New Kicks
        <span
          class="absolute inset-0 w-full h-full border-2 md:border-4 border-purple-500 -z-10 rounded-md"
        ></span>
      </h1>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-4 md:m-12 pt-12"
    >
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="bg-[#161616] border border-white rounded-lg p-6 text-white"
      >
        <div class="flex justify-center">
          <NuxtImg
            :src="product.photourl"
            :alt="product.name"
            class="w-80 h-96 rounded-md"
          />
        </div>

        <div class="flex justify-between items-center mt-4">
          <h2 class="text-sm md:text-lg font-semibold">{{ product.name }}</h2>
          <p class="text-sm md:text-lg font-bold">Php{{ product.price }}</p>
        </div>
        <hr />
        <div class="flex justify-center">
          <button
            class="bg-white text-[#161616] p-2 my-2 rounded-md w-full font-bold"
            @click="addToCart(product)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProductStore } from "~/stores/productStore";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchProducts(); 
});

function addToCart(product) {
  productStore.addToCart(product); 
}

definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
