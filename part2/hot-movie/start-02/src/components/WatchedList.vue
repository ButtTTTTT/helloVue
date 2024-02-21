<template>
  <ul class="list" v-for="movie in watched">
    <WatchedMovie :movie="movie" :key="movie.id" />
  </ul>
</template>

<script>
import WatchedMovie from "@/components/WatchedMovie.vue";

export default {
  // TODO: Delete event handler
  props: ["watched"],

  components: {
    WatchedMovie,
  },
};
</script>
