<template>
  <div class="summary">
    <h2>你看过的电影</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{{ watched.length }} 部电影</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{{ avgRating }}</span>
      </p>
    </div>
  </div>
</template>

<script>
const average = (arr) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0).toFixed(1);

export default {
  props: ["watched"],

  computed: {
    avgRating() {
      return average(this.watched.map((movie) => movie.sc));
    },
  },
};
</script>
