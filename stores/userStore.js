import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { doc, setDoc, getDoc, updateDoc, collection } from "firebase/firestore";
import bcrypt from "bcryptjs";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async register(username, email, password) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const userRef = doc(collection(db, "users"), username);

      try {
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        const userData = {
          username,
          email,
          password: hashedPassword,
        };

        await setDoc(userRef, { ...userData });
        this.user = { username, email };
        return true;
      } catch (error) {
        console.error("Error registering user:", error);
        throw new Error("Failed to register user.");
      }
    },

    async login(username, password) {
      const { $firebase } = useNuxtApp();
      const db = $firebase.db;
      const userRef = doc(collection(db, "users"), username);

      try {
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          console.error("User not found");
          throw new Error("Invalid username or password.");
        }

        const userData = userSnap.data();
        const { email, password: hashedPassword } = userData;

        console.log("Hashed password from Firestore:", hashedPassword);

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordValid) {
          console.error("Password mismatch");
          throw new Error("Invalid username or password.");
        }

        // Login success
        this.user = { username, email };
        return true;
      } catch (error) {
        console.error("Error during login:", error.message);
        throw new Error("Invalid credentials");
      }
    },
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

      const userRef = doc(db, "users", username);

      try {
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

    logout() {
      this.user = null;
    },
  },
});
