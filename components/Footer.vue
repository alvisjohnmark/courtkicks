<template>
    <footer class="footer py-8 bg-dark text-white ">
      <div class="container mx-auto max-w-6xl text-center">
        <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
        <div class="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            class="hover:text-gray-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook class="w-8 h-8" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            class="hover:text-gray-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram class="w-8 h-8" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            class="hover:text-gray-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube class="w-8 h-8" />
          </a>
        </div>
        <p class="text-sm text-gray-400">
          &copy; 2024 Court and Kicks. All rights reserved.
        </p>
        <p class="text-sm text-gray-400">courticks@gmail.com</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Facebook, Instagram, Youtube } from "lucide-vue-next";
  </script>
  
  <style scoped>
  .bg-dark {
    background-color: #060606;
  }
  
  .hover\:text-gray-400:hover {
    color: #9ca3af; 
  }
  </style>
  