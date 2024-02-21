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
      advice: "",
    };
  },

  methods: {
    async getAdvice() {
      const response = await fetch(URL);
      const data = await response.json();

      this.advice = data.slip.advice;
    },
  },
};
</script>
