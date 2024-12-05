<template>
  <nav class="p-8 flex items-center justify-between">
    <div class="flex items-start">
      <NuxtLink to="/">
        <img
          :src="`${logoPath}?v=${cacheBuster}`"
          alt="Logo"
          class="w-12 h-auto mr-2"
        />
      </NuxtLink>

      <NuxtLink
        to="/"
        class="font-arimo text-black font-semibold text-2xl mt-2"
      >
        Court & Kicks
      </NuxtLink>
    </div>
    <div class="flex gap-6 items-center">
      <NuxtLink to="/about" class="text-black text-lg">About</NuxtLink>
      <template v-if="isLoggedIn">
        <button class="text-black text-lg" @click="userStore.logout">Logout</button>
        <NuxtLink to="/profile" class="flex items-center text-black text-lg">
          <User :size="32" :stroke-width="1" />
        </NuxtLink>
      </template>
      <template v-else>
        <NuxtLink
          to="/register"
          class="text-white bg-[#060606] px-8 py-2 rounded-md font-semibold"
        >
          Sign Up
        </NuxtLink>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "~/stores/userStore";
import { User } from 'lucide-vue-next';

const logoPath = "/logo.jpg";
const cacheBuster = new Date().getTime();

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.user !== null); 
</script>

<style scoped></style>
