<template>
  <div
    class="min-h-screen bg-[#161616] text-white font-playfair flex items-center justify-center"
  >
    <div class="text-center max-w-lg mx-auto px-4 py-12">
      <h1 class="text-5xl sm:text-6xl font-bebasneue text-whitesemilight mb-6">
        Thank You for Your Purchase!
      </h1>
      <p class="text-lg sm:text-xl text-white mb-8">
        Your order has been successfully processed. We appreciate your business
        and hope to serve you again soon.
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-white text-black py-3 px-8 rounded-lg text-lg sm:text-xl font-semibold shadow-md hover:bg-lpbgcolordark transition duration-300 ease-in-out"
      >
        Go to Dashboard
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style scoped></style>
