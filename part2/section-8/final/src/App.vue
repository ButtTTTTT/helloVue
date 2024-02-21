<template>
  <h1>Advice Generator</h1>

  <p>{{ advice }}</p>

  <button @click="getAdvice">Get Advice</button>
</template>

<script>
const URL = "https://api.adviceslip.com/advice";

export default {
  data() {
    return {
      advice: "Loading...",
    };
  },
  methods: {
    async getAdvice() {
      this.advice = "Loading..."
      const response = await fetch(URL);
      const data = await response.json();

      this.advice = data.slip.advice;
    },
  },
  mounted(){
    this.getAdvice();
    console.log("the page mounted!")
  },
  unmounted(){
    console.log("The page unmounted!")
  }
};
</script>
