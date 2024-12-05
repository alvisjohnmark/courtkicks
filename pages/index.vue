<template>
  <section class="bg-white h-screen mx-auto font-arimo">
    <div class="flex flex-col justify-center space-y-4 mt-12">
      <div
        class="flex flex-col md:flex-row items-center md:justify-around px-4 md:px-10 relative"
      >
      <h1
  class="text-6xl md:text-[11rem] font-semibold leading-none text-center md:text-left md:-ml-64"
>
  DEFY
</h1>

        <img
          src="/shoe.png"
          alt="Shoe"
          class="hidden md:block absolute w-48 md:w-[30rem] h-auto transform rotate-12 md:-top-25 md:right-40"
        />
      </div>
      <div class="flex justify-center">
        <h1
          class="text-6xl md:text-[11rem] font-semibold leading-none text-center"
        >
          EVERY
        </h1>
      </div>

      <div
        class="flex flex-col md:flex-row items-center justify-around px-4 md:px-10 text-center md:text-left"
      >
        <p class="text-lg md:text-3xl font-medium">
          Your Ultimate Destination <br />for Basketball Footwear
        </p>
        <h1 class="text-6xl md:text-[11rem] font-semibold leading-none">
          LIMIT
        </h1>
        <button
          class="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-black text-black font-semibold text-sm flex items-center justify-center hover:underline mt-4 md:mt-0"
        >
          EXPLORE<br />HERE
        </button>
      </div>
    </div>
  </section>

  <section
    class="h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('/bgpic.jpg')"
  >
    <div class="text-black font-arimo p-4">
      <div class="flex justify-center md:justify-end mx-4 md:mx-24 my-12">
        <p class="text-white bg-black p-2 md:text-2xl text-justify">
          Our selection of basketball shoes is crafted to provide maximum
          support, comfort, and style. From high-tops that offer superior ankle
          support to lightweight, low-cut options for speed and agility, Court
          Kicks has the perfect pair for every player.
        </p>
      </div>
      <div class="flex justify-center md:justify-start ml-4 md:ml-32">
        <h1 class="text-white bg-black p-2 text-5xl md:text-9xl">
          Find your <br />
          perfect fit
        </h1>
      </div>
    </div>
  </section>

  <section
    class="w-full h-auto md:h-screen bg-[#161616] text-white flex flex-col justify-center p-4"
  >
    <h1 class="text-4xl md:text-8xl font-bold text-center md:text-end mb-10">
      UNMATCHED <br />
      QUALITY AND <br />
      PERFORMANCE
    </h1>
    <div class="flex flex-col md:flex-row justify-around gap-10 mt-10 md:mt-32">
      <div class="text-center">
        <Flower :size="30" class="mx-auto md:mx-32" />
        <p class="uppercase text-lg md:text-3xl font-medium">
          High Performance<br />Shoes
        </p>
      </div>

      <div class="text-center">
        <Eclipse :size="30" class="mx-auto md:mx-10" />
        <p class="uppercase text-lg md:text-3xl font-medium">
          Stylish<br />Design
        </p>
      </div>

      <div class="text-center">
        <Globe :size="30" class="mx-auto md:mx-10" />
        <p class="uppercase text-lg md:text-3xl font-medium">
          Expert<br />Advice
        </p>
      </div>
    </div>
  </section>

  <section class="bg-[#161616] text-white py-12 px-6">
    <div class="mx-4 md:mx-10">
      <h1 class="text-5xl md:text-9xl font-bold relative inline-block">
        NEW ARRIVALS
        <span
          class="absolute inset-0 w-full h-full border-2 md:border-4 border-purple-500 -z-10 rounded-md"
        ></span>
      </h1>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-4 md:m-12 pt-12"
    >
      <!-- Cards -->
      <div class="bg-[#161616] border border-white rounded-lg p-6">
        <img
          src="/s2.jpg"
          alt="Jordan 11 Concord"
          class="w-full h-auto rounded-md"
        />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-sm md:text-lg font-semibold">Jordan 11 Concord</h2>
          <p class="text-sm md:text-lg font-bold">Php500.00</p>
        </div>
        <hr />
      </div>

      <div class="bg-[#161616] border border-white rounded-lg p-6">
        <img
          src="/s4.jpg"
          alt="Tatum 2 Legacy"
          class="w-full h-auto rounded-md"
        />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-sm md:text-lg font-semibold">Tatum 2 Legacy</h2>
          <p class="text-sm md:text-lg font-bold">Php150.00</p>
        </div>
        <hr />
      </div>

      <div class="bg-[#161616] border border-white rounded-lg p-6">
        <img
          src="/s3.jpg"
          alt="Kobe Protro 5"
          class="w-full h-auto rounded-md"
        />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-sm md:text-lg font-semibold">Kobe Protro 5</h2>
          <p class="text-sm md:text-lg font-bold">Php1000.00</p>
        </div>
        <hr />
      </div>
    </div>
  </section>

  <section
    class="h-auto md:h-screen bg-[#161616] text-white font-arimo px-4 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center"
  >
    <nav>
      <h1 class="text-5xl md:text-9xl leading-tight text-center md:text-left">
        Court <br />& Kicks
      </h1>
    </nav>
    <div class="space-y-8 max-w-full md:max-w-xl mt-8 md:mt-0">
      <div>
        <p class="text-lg md:text-3xl">
          Follow us on social media to join our growing community of basketball
          enthusiasts.
        </p>
        <h2 class="mt-2 text-base md:text-xl font-semibold uppercase">
          Join the Court & Kicks Community
        </h2>
        <hr class="border-gray-600 mt-4" />
      </div>

      <div>
        <p class="text-lg md:text-3xl">
          Step into our full-sized basketball court to try out your new kicks
          before making a purchase.
        </p>
        <h2 class="mt-2 text-base md:text-xl font-semibold uppercase">
          Visit Our In-Store Court
        </h2>
        <hr class="border-gray-600 mt-4" />
      </div>

      <div>
        <p class="text-lg md:text-3xl">
          Visit us today and find out why Court & Kicks is the go-to destination
          for serious players.
        </p>
        <h2 class="mt-2 text-base md:text-xl font-semibold uppercase">
          Special Offers
        </h2>
        <hr class="border-gray-600 mt-4" />
      </div>
    </div>
  </section>

  <section
    class="h-screen bg-cover bg-center text-black flex flex-col justify-between"
    style="background-image: url('/image.png')"
  >
    <div class="text-[8vw] leading-tight mt-10">
      REACH OUT FOR <br />
      INQUIRIES
    </div>

    <div class="text-end text-[8vw] leading-tight mb-10">AND PARTNERSHIPS</div>
  </section>
</template>

<script setup>
import { Flower, Globe, Eclipse } from "lucide-vue-next";
</script>
