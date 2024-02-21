<template>
  <ul class="list list-movies">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </ul>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  props: ["movies"],

  components: {
    Movie,
  },
};
</script>
