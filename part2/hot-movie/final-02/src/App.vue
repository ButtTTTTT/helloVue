<template>
  <Navbar />
  <Main 
  :watched="watched" 
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
export default {
  data() {
    return {
      movies: [],
      watched: [],
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
  components: {
    Navbar,
    Main,
  }
};
</script>
