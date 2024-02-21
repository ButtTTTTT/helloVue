<template>
  <Navbar>
    <Logo />
  </Navbar>

  <Main>
    <Box
      closeString="热映中"
      openString="即将上映"
      :handleSwitchComponent="handleSwitchComponent"
    >
      <Loading v-show="isLoading" />
      <MovieList v-show="!isLoading" :movies="movies" />
    </Box>

    <Box>
      <div>
        <WatchedSummary :watched="watched" />
        <WatchedList :watched="watched" />
      </div>
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

const tempWatchedList = [
  {
    id: 1458876,
    img: "https://p0.pipi.cn/mmdb/54ecde8d2c951b07acddd2e9497a36e37fe1e.jpg?imageMogr2/thumbnail/2500x2500%3E",
    nm: "年会不能停！",
    rt: "2023-12-29",
    sc: 9.6,
  },
  {
    id: 1331905,
    img: "https://p0.pipi.cn/mmdb/fb73862f5bf5bf02ff300b44817687f64dd8c.jpg?imageMogr2/thumbnail/2500x2500%3E",
    nm: "金手指",
    rt: "2023-12-30",
    sc: 9.2,
  },
];

export default {
  data() {
    return {
      hotMovies: [],
      comingMovies: [],
      watched: [...tempWatchedList],
      isLoading: false,

      componentName: "Hot",

      // TODO: selectID
    };
  },

  methods: {
    // TODO: Add select id
    handleSelectMovie(id) {},

    handleCloseMovie() {},

    handleAddWatched(movie) {},

    handleSwitchComponent() {
      this.componentName = this.componentName === "Hot" ? "Coming" : "Hot";
    },
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
