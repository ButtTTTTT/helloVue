<template>
    <main class="main">
        <MovieList 
        :isOpen1="isOpen1" 
        :movies="movies" />
        <WatchedMovieList 
        :isOpen2="isOpen2" 
        :watched="watched"
        :avgSc="avgSc"
        :avgUserRating="avgUserRating"
         />
    </main>
</template>
<script>
import MovieList from './MovieList.vue';
import WatchedMovieList from '@/components/WatchedMovieList.vue';
export default {
    props: ["movies",
        "watched",
        "isOpen1",
        "isOpen2",
        "avgSc",
        "avgUserRating"],
    components: {
        MovieList,WatchedMovieList
    }
}
</script>