<template>
  <section class="bg-white h-screen mx-auto font-arimo">
    <div class="flex flex-col justify-center space-y-2 mt-12">
      <div class="flex justfy-around items-center px-10 relative">
        <h1 class="text-[11rem] font-semibold leading-none ml-64">DEFY</h1>
        <img
          src="/shoe.png"
          alt="Shoe"
          class="absolute w-[30rem] h-auto transform rotate-12 -top-25 right-40"
        />
      </div>

      <div class="flex justify-center">
        <h1 class="text-[11rem] font-semibold leading-none">EVERY</h1>
      </div>

      <div class="flex items-center justify-around px-10">
        <p class="text-3xl font-medium">
          Your Ultimate Destination <br />for Basketball Footwear
        </p>
        <h1 class="text-[11rem] font-semibold leading-none">LIMIT</h1>
        <button
          class="w-32 h-32 rounded-full border-2 border-black text-black font-semibold text-sm flex items-center justify-center hover:underline"
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
      <div class="flex justify-end mx-24 my-12">
        <p class="w-80 text-2xl text-justify">
          Our selection of basketball shoes is crafted to provide maximum
          support, comfort, and style. From high-tops that offer superior ankle
          support to lightweight, low-cut options for speed and agility, Court
          Kicks has the perfect pair for every player.
        </p>
      </div>
      <div class="flex justify-start ml-32">
        <h1 class="text-white text-9xl">
          Find your <br />
          perfect fit
        </h1>
      </div>
    </div>
  </section>

  <section class="bg-heroBg h-screen">
    <div class="text-white font-arimo p-4">unmatch</div>
  </section>

  <section class="bg-heroBg h-screen text-white py-12 px-6">
    <div class="mx-10">
      <h1 class="text-9xl font-bold relative inline-block">
        NEW ARRIVALS
        <span
          class="absolute inset-0 w-full h-full border-4 border-purple-500 -z-10 rounded-md"
        ></span>
      </h1>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-12 pt-12"
    >
      <div class="bg-black border border-white rounded-lg p-6">
        <img
          src="/s2.jpg"
          alt="Jordan 11 Concord"
          class="w-full h-auto rounded-md"
        />
        <br />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-lg font-semibold">Jordan 11 Concord</h2>
          <p class="text-lg font-bold">$500.00</p>
        </div>
        <hr />
      </div>

      <div class="bg-black border border-white rounded-lg p-6">
        <img
          src="/s4.jpg"
          alt="Tatum 2 Legacy"
          class="w-full h-auto rounded-md"
        />
        <br />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-lg font-semibold">Tatum 2 Legacy</h2>
          <p class="text-lg font-bold">$150.00</p>
        </div>
        <hr />
      </div>

      <div class="bg-black border border-white rounded-xl p-6">
        <img
          src="/s3.jpg"
          alt="Kobe Protro 5"
          class="w-full h-auto rounded-md"
        />
        <br />
        <div class="flex justify-between items-center mt-4">
          <h2 class="text-lg font-semibold pb-2.5">Kobe Protro 5</h2>
          <p class="text-lg font-bold">$1000.00</p>
        </div>
        <hr />
      </div>
    </div>
  </section>

  <section
    class="bg-heroBg h-screen text-white font-arimo px-16 py-8 flex justify-between items-center"
  >
    <nav class="font-extrasemibol">
      <h1 class="text-9xl leading-tight">Court <br />& Kicks</h1>
    </nav>
    <div class="space-y-8 max-w-xl">
      <div>
        <p class="text-3xl">
          Follow us on social media to join our growing community of basketball
          enthusiasts.
        </p>
        <br />
        <h2 class="mt-2 text-xl font-semibold uppercase">
          Join the Court & Kicks Community
        </h2>
        <hr class="border-gray-600 mt-4" />
      </div>

      <div>
        <p class="text-3xl">
          Step into our full-sized basketball court to try out your new kicks
          before making a purchase.
        </p>
        <br />
        <h2 class="mt-2 text-xl font-semibold uppercase">
          Visit Our In-Store Court
        </h2>
        <hr class="border-gray-600 mt-4" />
      </div>

      <div>
        <p class="text-3xl">
          Visit us today and find out why Court & Kicks is the go-to destination
          for serious players.
        </p>
        <br />
        <h2 class="mt-2 text-xl font-semibold uppercase">Special Offers</h2>
        <hr class="border-gray-600 mt-4" />
      </div>
    </div>
  </section>

  <section class="bg-white h-screen">
    <div class="text-heroBg font-arimo text-8xl">Reach out</div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
