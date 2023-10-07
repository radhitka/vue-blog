<template>
  <div
    class="w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="imageSrc" alt="" />
    </a>
    <div class="p-5">
      <h1 class="text-white font-bold">{{ name }}</h1>
      <div class="flex flex-nowarp"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    rate: String,
    rateTotal: String,
    price: Number,
    imageSrc: String,
  },
};
</script>
