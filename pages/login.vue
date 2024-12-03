<template>
    <section
      class="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md bg-white"
    >
      <h2 class="text-2xl font-bold text-[#060606] mb-4">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-[#060606]">
            Username:
            <input
              v-model="username"
              type="text"
              placeholder="Enter username"
              required
              class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </label>
        </div>
        <div>
          <label class="block text-sm font-medium text-[#060606]">
            Password:
            <input
              v-model="password"
              type="password"
              placeholder="Enter password"
              required
              class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </label>
        </div>
  
        <button
          type="submit"
          class="w-full py-2 px-4 bg-[#060606] text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Login
        </button>
        <p>
          Don't have an account?
          <span
            ><NuxtLink to="/register" class="text-blue-700"
              >Register here</NuxtLink
            ></span
          >
        </p>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router"; // Import Nuxt's router
  import { useUserStore } from "~/stores/userStore";
  definePageMeta({
  layout: "default",
});
  const username = ref("");
  const password = ref("");
  const userStore = useUserStore();
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      const success = await userStore.login(username.value, password.value);
      if (success) {
        alert("Login successful!");
        router.push("/home"); 
      }
    } catch (error) {
      alert(error.message); 
    }
  };
  </script>
  