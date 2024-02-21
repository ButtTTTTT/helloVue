<template>
  <Navbar/>
  <Main 
  :movies="movies"
  :watched="watched"
  :isOpen1="isOpen1"
  :isOpen2="isOpen2"
  :avgSc="avgSc"
  :avgUserRating="avgUserRating"
   />


 
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
const average = (arr) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

const tempMovieData = [];

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
  components:{
    Navbar, 
    Main,
  }
};
</script>
