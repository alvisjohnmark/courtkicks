<template>
  <section class="bg-gray-50 text-gray-900 py-12 px-6 min-h-screen">
    <div class="mx-4 md:mx-10">
      <h1 class="text-4xl font-bold mb-8">My Cart 🛒</h1>
    </div>

    <div
      v-for="item in cartStore.cart"
      :key="item.id"
      class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center p-4 bg-white border rounded-lg shadow-sm mb-4"
    >
      <div class="flex justify-center h-48">
        <NuxtImg
          :src="item.photourl"
          :alt="item.name"
          class="w-full h-full object-cover rounded-md"
        />
      </div>

      <div class="text-lg font-semibold text-center">{{ item.name }}</div>

      <div class="text-lg font-semibold text-center">Php {{ item.price }}</div>

      <div class="text-lg font-semibold text-center">
        Quantity: {{ item.quantity }}
      </div>

      <div class="flex justify-center mt-8 text-center">
        <button
          @click="openModalCheckout(item)"
          class="bg-[#161616] text-white px-6 py-3 rounded-lg font-bold"
        >
          Pay Now
        </button>
      </div>
    </div>

    <div
      v-if="showCheckout"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg w-full max-w-3xl p-6">
        <div class="flex">
          <!-- Shoe Details -->
          <div class="w-1/2 pr-4 border-r">
            <h2 class="text-2xl font-bold mb-4">Shoe Details</h2>
            <div>
              <NuxtImg
                :src="selectedItem.photourl"
                :alt="selectedItem.name"
                class="w-full h-64 object-cover rounded-md mb-4"
              />
              <p class="text-lg font-semibold">Name: {{ selectedItem.name }}</p>
              <p class="text-lg font-semibold">Price: Php {{ selectedItem.price }}</p>
              <p class="text-lg font-semibold">
                Quantity: {{ selectedItem.quantity }}
              </p>
            </div>
          </div>

          <!-- Payment Options -->
          <div class="w-1/2 pl-4">
            <h2 class="text-2xl font-bold mb-4">Payment Options</h2>
            <div>
              <label class="block mb-2">
                <input
                  type="radio"
                  v-model="selectedPayment"
                  value="card"
                  class="mr-2"
                />
                Credit/Debit Card
              </label>
              <label class="block mb-4">
                <input
                  type="radio"
                  v-model="selectedPayment"
                  value="gcash"
                  class="mr-2"
                />
                GCash
              </label>

              <!-- Card Details -->
              <div v-if="selectedPayment === 'card'">
                <h3 class="text-lg font-semibold mb-2">Card Details</h3>
                <input
                  v-model="cardDetails.number"
                  type="text"
                  placeholder="Card Number"
                  class="w-full p-2 border rounded mb-2"
                />
                <input
                  v-model="cardDetails.name"
                  type="text"
                  placeholder="Card Holder Name"
                  class="w-full p-2 border rounded mb-2"
                />
                <div class="flex gap-2">
                  <input
                    v-model="cardDetails.expiry"
                    type="text"
                    placeholder="MM/YY"
                    class="w-1/2 p-2 border rounded mb-2"
                  />
                  <input
                    v-model="cardDetails.cvv"
                    type="text"
                    placeholder="CVV"
                    class="w-1/2 p-2 border rounded mb-2"
                  />
                </div>
              </div>

              <!-- GCash Details -->
              <div v-if="selectedPayment === 'gcash'">
                <h3 class="text-lg font-semibold mb-2">GCash Details</h3>
                <input
                  v-model="gcashDetails.number"
                  type="text"
                  placeholder="GCash Number"
                  class="w-full p-2 border rounded mb-2"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Confirm Buttons -->
        <div class="mt-6 flex justify-end">
          <button
            @click="showCheckout = false"
            class="bg-red-400 text-white px-6 py-2 rounded-lg mr-4"
          >
            Cancel
          </button>
          <button 
            @click="handlePayment(selectedItem.id)"
            class="bg-[#161616] text-white px-6 py-2 rounded-lg">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useProductStore } from "~/stores/productStore";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const cartStore = useProductStore();
const showCheckout = ref(false);
const selectedItem = ref({});
const selectedPayment = ref(""); 
const cardDetails = ref({
  number: "",
  name: "",
  expiry: "",
  cvv: "",
});
const gcashDetails = ref({
  number: "",
});
const router = useRouter();

const openModalCheckout = (item) => {
  selectedItem.value = item;
  showCheckout.value = true;
};

const handlePayment = async (itemId) => {

  if (selectedPayment.value === "card") {
    if (
      !cardDetails.value.number ||
      !cardDetails.value.name ||
      !cardDetails.value.expiry ||
      !cardDetails.value.cvv
    ) {
      Swal.fire({
        title: "Incomplete Information",
        text: "Please fill in all card details to proceed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
  } else if (selectedPayment.value === "gcash") {
    if (!gcashDetails.value.number) {
      Swal.fire({
        title: "Incomplete Information",
        text: "Please provide your GCash number to proceed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
  } else {
    Swal.fire({
      title: "No Payment Method Selected",
      text: "Please select a payment method to proceed.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    await cartStore.deleteCartItem(itemId);

    Swal.fire({
      title: "Payment Successful!",
      text: "Thank you for your purchase.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      router.push("/thankyou");
    });

    showCheckout.value = false;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Something went wrong while processing your payment.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
};

onMounted(async () => {
  await cartStore.fetchCart();
});
</script>



<style scoped></style>
