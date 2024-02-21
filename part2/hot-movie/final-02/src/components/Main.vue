<template>
    <main class="main">
        <div class="box">
            <button class="btn-toggle" @click="switchComponent">
                {{ componentName === "HotMovieList" ? "热映中" : "即将上映" }}
            </button>
            <!--  <KeepAlive> 保持组件的状态  对原有的组件进行抽象   -->
            <KeepAlive>
                <component :is="componentName" />
            </KeepAlive>
        </div>
        <WatchedMovieList :isOpen2="isOpen2" :watched="watched" :avgSc="avgSc" :avgUserRating="avgUserRating" />
    </main>
</template>
<script>
import HotMovieList from './HotMovieList.vue';
import ComingMovieList from '@/components/ComingMovieList.vue';
import WatchedMovieList from '@/components/WatchedMovieList.vue';
export default {
    data() {
        return {
            isOpen1: true,
            componentName: "HotMovieList",
        }
    },
    methods: {
        switchComponent() {

            this.componentName = this.componentName === "HotMovieList"
                ? "ComingMovieList" : "HotMovieList";
        },
    },
    props: [
        "watched",
        "isOpen2",
        "avgSc",
        "avgUserRating"],
    components: {
        HotMovieList, WatchedMovieList, ComingMovieList
    }
}
</script>