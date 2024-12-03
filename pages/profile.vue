<template>
  <main class="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
    <h2 class="text-3xl font-semibold text-[#060606] mb-6 text-center">
      Profile
    </h2>


    <!-- Edit Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            for="firstName"
            class="block text-sm font-medium text-[#060606]"
            >First Name:</label
          >
          <input
            v-model="user.firstName"
            type="text"
            id="firstName"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium text-[#060606]"
            >Last Name:</label
          >
          <input
            v-model="user.lastName"
            type="text"
            id="lastName"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label for="street" class="block text-sm font-medium text-[#060606]"
            >Street:</label
          >
          <input
            v-model="user.street"
            type="text"
            id="street"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label
            for="municipality"
            class="block text-sm font-medium text-[#060606]"
            >Municipality:</label
          >
          <input
            v-model="user.municipality"
            type="text"
            id="municipality"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label for="province" class="block text-sm font-medium text-[#060606]"
            >Province:</label
          >
          <input
            v-model="user.province"
            type="text"
            id="province"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label
            for="phoneNumber"
            class="block text-sm font-medium text-[#060606]"
            >Phone Number:</label
          >
          <input
            v-model="user.phoneNumber"
            type="text"
            id="phoneNumber"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label for="zipCode" class="block text-sm font-medium text-[#060606]"
            >Zip Code:</label
          >
          <input
            v-model="user.zipCode"
            type="text"
            id="zipCode"
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-[#060606]"
            >Email:</label
          >
          <input
            v-model="user.email"
            type="email"
            id="email"
            readonly
            class="mt-1 w-full p-3 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="w-full py-3 px-6 bg-[#060606] text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Update Profile
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "~/stores/userStore";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNuxtApp } from "#app";

// User data structure with photoUrl defined
const userStore = useUserStore();
const user = ref({
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  street: "",
  municipality: "",
  province: "",
  phoneNumber: "",
  zipCode: "",

});

// Function to handle loading user data from Firestore
const loadUserData = async () => {
  const { $firebase } = useNuxtApp();
  const db = $firebase.db;
  const userRef = doc(db, "users", userStore.user.username);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data();
    user.value = { ...data }; // This will include photoUrl
  } else {
    console.log("User not found");
  }
};

onMounted(() => {
  loadUserData();
});


// Handle form submission and updating Firestore
const handleSubmit = async () => {
  const { $firebase } = useNuxtApp();
  const db = $firebase.db;
  const userRef = doc(db, "users", user.value.username);

  try {
    await updateDoc(userRef, {
      firstName: user.value.firstName,
      lastName: user.value.lastName,
      street: user.value.street,
      municipality: user.value.municipality,
      province: user.value.province,
      phoneNumber: user.value.phoneNumber,
      zipCode: user.value.zipCode,
      photoUrl: user.value.photoUrl, // Optionally save the new photo URL
    });

    alert("Profile updated successfully!");
  } catch (error) {
    console.error("Error updating profile:", error);
    alert("Failed to update profile.");
  }
};
</script>

<style scoped>
/* Custom styles can go here */
</style>
