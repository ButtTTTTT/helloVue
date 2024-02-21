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
export default{
    props:["isOpen1","movies"],
}
</script>