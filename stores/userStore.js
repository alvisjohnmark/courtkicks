import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { doc, setDoc, getDoc, updateDoc, collection } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // User data will be stored here, including photoUrl
  }),

  actions: {
    // Register user and save photo URL to Firestore
    async register(username, email, password, file) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const storage = getStorage();

      const userRef = doc(collection(db, "users"), username);

      const userData = { username, email, password };

      try {
        // Add photoUrl to user data before storing
        await setDoc(userRef, { ...userData });

        this.user = { username, email }; // Save to Pinia store
        return true;
      } catch (error) {
        console.error("Error registering user:", error);
        throw new Error("Failed to register user.");
      }
    },

    // Login user (without handling photo URL here)
    async login(username, password) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const userRef = doc(collection(db, "users"), username);

      try {
        const userSnap = await getDoc(userRef);
        if (userSnap.exists() && userSnap.data().password === password) {
          const { email } = userSnap.data();
          this.user = { username, email };
          return true;
        }
        throw new Error("Invalid username or password.");
      } catch (error) {
        console.error("Error logging in:", error);
        throw new Error("Invalid credentials");
      }
    },

    // Update profile (for editing user details including photo)
    async updateProfile(
      username,
      email,
      firstName,
      lastName,
      street,
      municipality,
      province,
      phoneNumber,
      zipCode
    ) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const storage = getStorage();

      const userRef = doc(db, "users", username);

      try {
        // Update Firestore with the new data
        await updateDoc(userRef, {
          email,
          firstName,
          lastName,
          street,
          municipality,
          province,
          phoneNumber,
          zipCode,
        });

        // Update user store with the new data
        this.user = {
          username,
          email,
          firstName,
          lastName,
          street,
          municipality,
          province,
          phoneNumber,
          zipCode,
        };

        return true;
      } catch (error) {
        console.error("Error updating profile:", error);
        throw new Error("Failed to update profile.");
      }
    },

    // Logout user
    logout() {
      this.user = null;
    },
  },
});
