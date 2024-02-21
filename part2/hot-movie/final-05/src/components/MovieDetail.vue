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
            <button class="btn-add" @click="handleReq1">请求云小窝接口1</button>
            <button class="btn-add" @click="handleReq2">请求云小窝接口2</button>
            <button class="btn-add" @click="handleReq3">请求云小窝接口3</button>
            <button class="btn-add" @click="handleReq4">请求云小窝接口4</button>
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
      validCodeNo: "",
      validCode: "5624",
      headTitle: "authorization",
      token: "",
    };
  },

  methods: {
    setUserRating(rating) {
      this.userRating = rating;
    },
    handleReq1() {
      const timeStamp = this.getCurrentTimestamp();
      const phone = "13599966202"
      this.getData(`https://dev-app-api.csjhome.com/auth/c/getPhoneValidCode?Phone=${phone}&timeStamp=${timeStamp}`)
        .then(data => {
          console.log(data);
          this.validCodeNo = data.data;
          console.log(this.validCodeNo);
        });

    },
    handleReq2() {
      const phone = "13599966202";
      const timeStamp = this.getCurrentTimestamp();
      this.getData(`https://dev-app-api.csjhome.com/auth/c/ValidCode?Phone=${phone}&validCode=8921&validCodeReqNo=517548336242757&timeStamp=${timeStamp}`)
        .then(data => {
          console.log(data);
        })
    },
    handleReq3() {
      this.postData('https://dev-app-api.csjhome.com/auth/c/loginByPhone', { "validCode": this.validCode, "validCodeReqNo": this.validCodeNo, "phone": "13599966202", "device": "APP" })
        .then(data => {
          console.log(data);
          this.token = data.data.token;
          alert(this.token);
        });
    },
    handleReq4() {
      const timeStamp = this.getCurrentTimestamp();
      const phone = "13599966202"
      const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjUwNDcwMTQ2NjkzOTQ2MSwiQWNjb3VudCI6IjEzNTk5OTY2MjAyIiwiaWF0IjoxNzA4NTE5ODUxLCJuYmYiOjE3MDg1MTk4NTEsImV4cCI6MTcxMTUxOTg1MSwiaXNzIjoiUGFuZ29saW5BZG1pbiIsImF1ZCI6IlBhbmdvbGluQWRtaW4ifQ.mYUuOAjKzdI4GIRBInStUcUAM3fS4UeKac0vx4lG4Gs';

      this.getData1(`https://dev-app-api.csjhome.com/app/clientUser/my?id=504701466939461&timeStamp=${timeStamp}`, { 'authorization': `Bearer ${authorization}` })
        .then(data => {
          console.log(data);
        });
    },
    async getData1(url = '', headers = {}) {
      const response = await fetch(url, { headers });
      const json = await response.json();
      return json;
    },
    async getData(url = '') {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    },
    getCurrentTimestamp() {
      return new Date().getTime();
    },

    async postData(url = '', data = {}) {
      // 默认post的配置
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      // 执行请求
      const response = await fetch(url, options);

      // 将response解析为json
      const json = await response.json();

      // 返回json数据
      return json;
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
