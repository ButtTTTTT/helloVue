<template>
  <ul class="list">
    <li v-for="movie in movies" :key="movie.id">
      <img :src="movie.img" :alt="`${movie.nm} poster`" />
      <h3>{{ movie.nm }}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{{ movie.comingTitle }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      movies: [],
    }
  },
  async mounted() {
    const response = await fetch("/comingList");
    const data = await response.json();
    console.log(data.movieList)
    this.movies = data.coming;
  },
  activated: {
    console.log(new Array(10).fill(Math.random()))
  }
}
</script>