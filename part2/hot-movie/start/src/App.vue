<template>
  <nav class="nav-bar">
    <div class="logo">
      <span role="img">🍿</span>
      <h1>电影资讯</h1>
    </div>
  </nav>

  <main class="main">
    <div class="box">
      <button class="btn-toggle" @click="isOpen1 = !isOpen1">
        {{ isOpen1 ? "热映中" : "即将上映" }}
      </button>
      <ul class="list" v-if="isOpen1">
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
    </div>

    <div class="box">
      <button class="btn-toggle" @click="isOpen2 = !isOpen2">
        {{ isOpen2 ? "–" : "+" }}
      </button>
      <div v-if="isOpen2">
        <div class="summary">
          <h2>你看过的电影</h2>
          <div>
            <p>
              <span>#️⃣</span>
              <span>{{ watched.length }} 部</span>
            </p>
            <p>
              <span>⭐️</span>
              <span>{{ avgSc }}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{{ avgUserRating }}</span>
            </p>
          </div>
        </div>

        <ul class="list">
          <li v-for="movie of watched" :key="movie.id">
            <img :src="movie.img" :alt="`${movie.nm} Poster`" />
            <h3>{{ movie.nm }}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{{ movie.sc }}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{{ movie.userRating }}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
const average = (arr) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

const tempMovieData = [
  {
    id: "tt1375666",
    nm: "Inception",
    comingTitle: "2010",
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    id: "tt0133093",
    nm: "The Matrix",
    comingTitle: "1999",
    img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    id: "tt6751668",
    nm: "Parasite",
    comingTitle: "2019",
    img: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    id: "tt1375666",
    nm: "Inception",
    comingTitle: "2010",
    img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    sc: 8.8,
    userRating: 10,
  },
  {
    id: "tt0088763",
    nm: "Back to the Future",
    comingTitle: "1985",
    img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    sc: 8.5,
    userRating: 9,
  },
];

export default {
  data() {
    return {
      movies: tempMovieData,
      watched: tempWatchedData,
      isOpen1: true,
      isOpen2: true,
    };
  },

  computed: {
    avgSc() {
      return average(this.watched.map((movie) => movie.sc));
    },

    avgUserRating() {
      return average(this.watched.map((movie) => movie.userRating));
    },
  },
};
</script>
