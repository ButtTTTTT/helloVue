<template>
  <ul class="list list-movies">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" :onSetMovie="onSetMovie" />
  </ul>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  props: ["movies", "onSetMovie"],

  components: {
    Movie,
  },
};
</script>
