<template>
  <div>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-96">
        <!-- Item 1 -->
        <div
          v-for="(item, index) in images"
          :key="index"
          :class="{
            hidden: index !== activeIndex,
            'duration-1000 ease-linear': index === activeIndex,
          }"
        >
          <img
            :src="item.src"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          v-for="(item, index) in images"
          :key="index"
          type="button"
          class="w-3 h-3 rounded-full"
          :class="{
            ' bg-white dark:bg-gray-800': index === activeIndex,
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800':
              index !== activeIndex,
          }"
          @click="toSlide(index)"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        id="data-carousel-prev"
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        @click="nextSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import images from '../data/carousel';
</script>

<script>
export default {
  data() {
    return { activeIndex: 0 };
  },
  methods: {
    prevSlide() {
      let calculate = this.activeIndex - 1 + images.length;

      this.activeIndex = calculate % images.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % images.length;
    },
    toSlide(index) {
      this.activeIndex = index;
    },
  },
};
</script>
