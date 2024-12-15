<template>
  <main class="about-us">

    <!-- Mission Statement Section -->
    <section class="mission-statement py-16 px-6 ">
      <div class="container mx-auto max-w-4xl ">
        <h2 class="text-4xl font-semibold text-dark mb-8">About us</h2>
        <p class="text-xl text-dark/80 leading-relaxed">
          Welcome to <strong>Court and Kicks</strong>, your one-stop destination for premium footwear!
          <br /><br />
          At <strong>Court and Kicks</strong>, we are passionate about bringing you the latest trends
          and timeless classics in shoes. From casual sneakers to formal footwear, we offer a wide range
          of styles designed to fit every occasion and lifestyle.
          <br /><br />
          Our journey began with a simple mission: to provide high-quality, stylish, and comfortable shoes
          at affordable prices. We work with trusted brands and artisans to ensure that every pair we offer
          meets the highest standards of durability and craftsmanship.
          <br /><br />
          <strong>What sets us apart?</strong>
          <ul class="list-disc list-inside text-left mt-4">
            <li><strong>Wide Selection:</strong> Shoes for every style, size, and need.</li>
            <li><strong>Customer-Centric:</strong> We prioritize your satisfaction with easy returns and excellent customer service.</li>
            <li><strong>Affordable Luxury:</strong> Enjoy premium quality without breaking the bank.</li>
          </ul>
          <br />``
          Step up your style and shop with confidence at <strong>Court and Kicks</strong>. Whether you’re
          looking for everyday comfort or a statement piece, we’ve got your feet covered!
          <br /><br />
          <strong>Court and Kicks – Where Style Meets Comfort.</strong>
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team py-16 bg-white">
      <div class="container mx-auto max-w-6xl text-center">
        <h2 class="text-4xl font-semibold text-dark mb-12">
          Meet Our Founders
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          <div class="team-member hover:scale-105 transition-transform">
            <img
              src="/mitchell.jpg"
              alt="Mitchell"
              class="rounded-full w-56 h-56 object-cover mx-auto shadow-lg"
            />
            <h3 class="text-xl font-medium mt-6 text-dark">Mitchell</h3>
            <p class="text-sm text-dark/70 mt-2">
              Mitchell is the visionary mind behind our brand, blending
              creativity and strategic thinking to redefine the online shoe
              shopping experience.
            </p>
          </div>
          <div class="team-member hover:scale-105 transition-transform">
            <img
              src="/tristan.jpg"
              alt="Tristan"
              class="rounded-full w-56 h-56 object-cover mx-auto shadow-lg"
            />
            <h3 class="text-xl font-medium mt-6 text-dark">Tristan</h3>
            <p class="text-sm text-dark/70 mt-2">
              Tristan, our creative director, ensures each design and product
              detail aligns perfectly with our mission of style and
              functionality.
            </p>
          </div>
          <div class="team-member hover:scale-105 transition-transform">
            <img
              src="/jairus.jpg"
              alt="Jairus"
              class="rounded-full w-56 h-56 object-cover mx-auto shadow-lg"
            />
            <h3 class="text-xl font-medium mt-6 text-dark">Jairus</h3>
            <p class="text-sm text-dark/70 mt-2">
              As operations manager, Jairus oversees seamless logistics and
              customer service, ensuring your shopping journey is effortless and
              enjoyable.
            </p>
          </div>
          <div class="team-member hover:scale-105 transition-transform">
            <img
              src="/ian.jpg"
              alt="ian"
              class="rounded-full w-56 h-56 object-cover mx-auto shadow-lg"
            />
            <h3 class="text-xl font-medium mt-6 text-dark">Ian</h3>
            <p class="text-sm text-dark/70 mt-2">
              As Design manager, Ian oversees overall creativity and design, ensuring your shopping journey is fun and
              user friendly.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties -->
    <section class="specialties py-16 px-6 bg-white">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-semibold text-dark text-center mb-8">
          Our Specialties
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            class="specialty-card text-center shadow-lg p-8 bg-gray-50 rounded-lg"
          >
            <Activity class="w-16 h-16 text-dark mx-auto mb-4" />
            <h3 class="text-xl font-medium text-dark mb-2">
              Trend-Driven Collection
            </h3>
            <p class="text-sm text-dark/70">
              We curate collections inspired by the latest global trends,
              ensuring you always have access to modern and fashionable
              footwear.
            </p>
          </div>
          <div
            class="specialty-card text-center shadow-lg p-8 bg-gray-50 rounded-lg"
          >
            <Diamond class="w-16 h-16 text-dark mx-auto mb-4" />
            <h3 class="text-xl font-medium text-dark mb-2">
              Affordable Luxury
            </h3>
            <p class="text-sm text-dark/70">
              Experience premium quality materials and craftsmanship in every
              pair of shoes without breaking the bank.
            </p>
          </div>
          <div
            class="specialty-card text-center shadow-lg p-8 bg-gray-50 rounded-lg"
          >
            <Smile class="w-16 h-16 text-dark mx-auto mb-4" />
            <h3 class="text-xl font-medium text-dark mb-2">
              Exceptional Service
            </h3>
            <p class="text-sm text-dark/70">
              Our dedicated team ensures personalized service, assisting you in
              selecting footwear that fits perfectly and suits your lifestyle.
            </p>
          </div>
          <div
            class="specialty-card text-center shadow-lg p-8 bg-gray-50 rounded-lg"
          >
            <Shuffle class="w-16 h-16 text-dark mx-auto mb-4" />
            <h3 class="text-xl font-medium text-dark mb-2">
              Seamless Experience
            </h3>
            <p class="text-sm text-dark/70">
              From browsing to checkout, we prioritize a user-friendly platform,
              offering a smooth and hassle-free shopping experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Activity, Diamond, Smile, Shuffle } from "lucide-vue-next";
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.about-us {
  font-family: "Playfair Display", serif;
}

.text-dark {
  color: #060606;
}

.shadow-lg {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.rounded-full {
  border-radius: 9999px;
}

.object-cover {
  object-fit: cover;
}
</style>
