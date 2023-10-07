<template>
  <Carousel />
  <br />
  <div class="flex justify-center pt-3 pb-2">
    <b><h1 class="text-white text-lg">Produk Kami</h1></b>
  </div>
  <div class="justify-center">
    <div
      class="max-w-full px-20 lg:pl-52 justify-start mx-auto py-6 flex flex-wrap gap-5"
    >
      <ProductCard
        v-for="(item, index) in homeProducts"
        :key="index"
        v-bind:id="item.id"
        v-bind:name="item.name"
        v-bind:imageSrc="item.src"
      />
    </div>
  </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import ProductCard from '../components/ProductCard.vue';
import { homeProducts } from '../data/product';
</script>
