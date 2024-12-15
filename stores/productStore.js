import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useUserStore } from "~/stores/userStore";
import Swal from "sweetalert2";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [], // List of products
  }),

  actions: {
    async fetchProducts() {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;

      try {
        const productCollection = collection(db, "shoes");
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.products = productList;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products.");
      }
    },

    async addToCart(product) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const authStore = useUserStore(); 

      if (!authStore.user) {
        console.error("No user is logged in");
        throw new Error("You must be logged in to add items to the cart.");
      }

      try {
        const cartCollection = collection(db, "cart");
        await addDoc(cartCollection, {
          userId: authStore.user.username, 
          productId: product.id,
          name: product.name,
          price: product.price,
          photourl: product.photourl,
          quantity: 1,
        });

        Swal.fire({
          title: "Added to cart!",
          text: "Browse more products.",
          icon: "success",
          confirmButtonText: "OK",
        })
      } catch (error) {
        console.error("Error adding to cart:", error);
        throw new Error("Failed to add product to cart.");
      }
    },

    async fetchCart() {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const authStore = useUserStore(); // Get the logged-in user
    
      if (!authStore.user) {
        console.error("No user is logged in");
        throw new Error("You must be logged in to view the cart.");
      }
    
      try {
        const cartCollection = collection(db, "cart");
        const cartSnapshot = await getDocs(cartCollection);
    
        // Filter cart items by user
        const cartList = cartSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) => item.userId === authStore.user.username);
    
        this.cart = cartList;
        console.log("Cart items for user:", authStore.user.username, this.cart);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        throw new Error("Failed to fetch cart.");
      }
    },

    async deleteCartItem(itemId) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;

      try {
        const itemDoc = doc(db, "cart", itemId);
        await deleteDoc(itemDoc);
        console.log(`Item with ID ${itemId} deleted from Firestore cart.`);
      } catch (error) {
        console.error("Error deleting cart item:", error);
        throw new Error("Failed to delete item from cart.");
      }
    },
    
  },
});
