<template>
  <NavigationBar />
  <slot />
  <Footer />
</template>

<script setup>
import NavigationBar from "~/components/NavigationBar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
