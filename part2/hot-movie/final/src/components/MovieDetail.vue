<template>
  <div class="details">
    <Loading v-if="isLoading" />
    <div v-else>
      <header>
        <button class="btn-back" @click="onCloseMovie">&larr;</button>
        <img :src="movie.img" :alt="'Poster of' + movie.nm + 'movie'" />
        <div class="details-overview">
          <h2>{{ movie.nm }}</h2>
          <p>
            {{ movie.rt }}
          </p>
          <p>{{ movie.cat }}</p>
          <p>
            <span>⭐️</span>
            {{ movie.sc === 0 ? "暂无评分" : movie.sc }}
          </p>
        </div>
      </header>

      <section>
        <div class="rating" v-if="watchedIdx < 0">
          <div>
            <button class="btn-add" @click="handleAdd">+ 添加至看过</button>
          </div>
        </div>
        <p>
          <em>{{ movie.plot }}</em>
        </p>
        <p>主演： {{ movie.star }}</p>
        <p>导演： {{ movie.dir }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  props: [
    "selectedId",
    "onCloseMovie",
    "onAddWatched",
    "watched"
  ],

  data() {
    return {
      isLoading: false,
      movie: {},
      userRating: 0,
    };
  },

  methods: {
    setUserRating(rating) {
      this.userRating = rating;
    },
    handleAdd() {
      const { id, img, nm, rt, sc } = this.movie;
      this.onAddWatched({
        id, img, nm, rt, sc
      })
    }
  },

  computed: {
    watchedIdx() {
      return this.watched.findIndex((movie) => movie.id === this.selectedId);
    },
  },

  components: {
    Loading,
  },

  watch: {
    async selectedId() {
      this.isLoading = true;
      const response = await fetch(`/detailmovie?movieId=${this.selectedId}`);
      const data = await response.json();
      this.movie = data.detailMovie;
      this.isLoading = false;
    },
  },

  async mounted() {
    this.isLoading = true;

    const response = await fetch(`/detailmovie?movieId=${this.selectedId}`);
    const data = await response.json();

    this.movie = data.detailMovie;
    this.isLoading = false;
  },
};
</script>
