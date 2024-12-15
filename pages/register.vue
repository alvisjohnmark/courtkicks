<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <main class="flex-grow flex justify-center items-center">
      <!-- Register Form -->
      <section
        class="max-w-md w-full mx-auto p-6 border border-gray-300 rounded-md bg-white"
      >
        <h2 class="text-2xl font-bold text-[#060606] mb-4">Register</h2>
        <form @submit.prevent="handleRegister" id="handleRegister-form" class="space-y-4">
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
              Email:
              <input
                v-model="email"
                type="email"
                placeholder="Enter email"
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
          <div>
            <label class="block text-sm font-medium text-[#060606]">
              Confirm Password:
              <input
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </label>
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-[#060606] text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Register
          </button>
          <p>
            Have an account?
            <span>
              <NuxtLink to="/login" class="text-blue-700">Login here</NuxtLink>
            </span>
          </p>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/stores/userStore";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "default",
});
const userStore = useUserStore();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  try {
    await userStore.register(username.value, email.value, password.value);
    alert("Registration successful!");
    username.value = email.value = password.value = confirmPassword.value = "";
    router.push("/");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<style scoped></style>
