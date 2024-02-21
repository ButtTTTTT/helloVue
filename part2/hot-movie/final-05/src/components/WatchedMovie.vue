<template>
  <li>
    <img :src="movie.img" :alt="movie.nm + 'poster'" />
    <h3>{{ movie.nm }}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{{ movie.sc }}</span>
      </p>

      <button class="btn-delete"
      @click="onDeleteWatched(movie.id)"
      >X</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["movie","onDeleteWatched"]
};
</script>
