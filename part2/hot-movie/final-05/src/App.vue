<template>
  <Navbar>
    <Logo />
  </Navbar>

  <Main>
    <Box closeString="热映中" openString="即将上映" :handleSwitchComponent="handleSwitchComponent">
      <Loading v-show="isLoading" />
      <MovieList v-show="!isLoading" :movies="movies" :onSetMovie="handleSelectMovie" />
    </Box>

    <Box>
      <div v-if="!selectId">
        <WatchedSummary :watched="watched" />
        <WatchedList :watched="watched" :onDeleteWatched="handleDeleteWatched" />
      </div>
      <MovieDetail :selectedId="selectId" :onCloseMovie="handleCloseMovie" :onAddWatched="handleAddWatched"
        :watched="watched" v-else />
    </Box>
  </Main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Logo from "@/components/Logo.vue";
import Main from "./components/Main.vue";
import Box from "./components/Box.vue";
import Loading from "./components/Loading.vue";
import MovieList from "./components/MovieList.vue";
import WatchedSummary from "./components/WatchedSummary.vue";
import WatchedList from "./components/WatchedList.vue";
import MovieDetail from "./components/MovieDetail.vue";

export default {
  data() {
    return {
      hotMovies: [],
      comingMovies: [],
      watched: [],
      isLoading: false,

      componentName: "Hot",
      selectId: null,
      // TODO: selectID
    };
  },

  methods: {
    // TODO: Add select id
    handleSelectMovie(id) {
      if (this.selectId === id) {
        this.selectId = null;
        return;
      }
      this.selectId = id;
    },

    handleCloseMovie() {
      this.selectId = null;
    },

    handleAddWatched(newMovie) {
      this.watched.push(newMovie)
    },

    handleSwitchComponent() {
      this.componentName = this.componentName === "Hot" ? "Coming" : "Hot";
    },
    handleDeleteWatched(id) {
      this.watched = this.watched.filter((movie) => movie.id !== id);
    }
  },

  computed: {
    movies() {
      return this.componentName === "Hot" ? this.hotMovies : this.comingMovies;
    },
  },

  components: {
    Navbar,
    Logo,
    Main,
    Box,
    Loading,
    MovieList,
    WatchedSummary,
    WatchedList,
    MovieDetail,
  },

  async mounted() {
    this.isLoading = true;

    const hotMovieResponse = await fetch("/movieOnInfoList");
    const hotMovieData = await hotMovieResponse.json();

    const comingMovieResponse = await fetch("/comingList");
    const comingMovieData = await comingMovieResponse.json();

    this.hotMovies = hotMovieData.movieList;
    this.comingMovies = comingMovieData.coming;

    this.isLoading = false;
  },
};
</script>
